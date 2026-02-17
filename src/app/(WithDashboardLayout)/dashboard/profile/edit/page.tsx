"use client";

import { useEffect, useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import AuthContext from "@/context/AuthContext";
import { getAccessToken } from "@/services/authServices";



export default function UpdateProfileForm() {
  const { user, setUser } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FieldValues>();

  // Load user data into form
  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const token = await getAccessToken();

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await fetch(
        `https://jni-astronomy-club.vercel.app/auth/users/me/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `JWT ${token}`,
          },
          body: formData,
        },
      );

      const updatedUser = await response.json();
      setUser(updatedUser);

      toast("Profile Updated");
      console.log(response)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast("Update Failed");
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Update Profile
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={`https://res.cloudinary.com/jniac-just/${user?.image}`}
                />
                <AvatarFallback>
                  {user?.first_name?.[0]}
                  {user?.last_name?.[0]}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-2">
                <Label>Upload Photo</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input {...register("first_name", { required: true })} />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input {...register("last_name", { required: true })} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" {...register("email", { required: true })} />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input {...register("phone_number")} />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input {...register("address")} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Role</Label>
                <Input {...register("role")} />
              </div>
              <div className="space-y-2">
                <Label>Institute</Label>
                <Input {...register("institute")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Profession</Label>
              <Input {...register("profession")} />
            </div>

            <div className="space-y-2">
              <Label>Qualifications</Label>
              <Input {...register("qualifications")} />
            </div>

            <div className="space-y-2">
              <Label>Experience</Label>
              <Textarea {...register("experience")} />
            </div>

            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea {...register("bio")} />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-2xl px-6"
              >
                {isSubmitting ? "Updating..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
