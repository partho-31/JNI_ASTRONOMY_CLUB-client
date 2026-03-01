"use client";

import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, UploadCloud } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { getAccessToken } from "@/services/authServices";
import { useParams } from "next/navigation";
import { Magazine } from "@/types/magazine";

export default function MagazineForm() {
  const { register, handleSubmit, reset ,  formState: { isSubmitting } } = useForm<FieldValues>();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const { magazineId } = useParams<{ magazineId: string }>();

  useEffect(() => {
    const handlefetch = async () => {
      const response = await fetch(
        `https://jni-astronomy-club.vercel.app/api/magazines/${magazineId}`,
      );
      const magazine: Magazine = await response.json();
      reset(magazine);
    };
    handlefetch();
  }, [magazineId, reset]);

  const onSubmit = async (data: FieldValues) => {
    const token = await getAccessToken();
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });

    if (imageFile) {
      formData.append("cover_img", imageFile);
    }

    try {
      const res = await fetch(
        `https://jni-astronomy-club.vercel.app/api/magazines/${magazineId}/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `JWT ${token}`,
          },
          body: formData,
        },
      );

      if (!res.ok) throw new Error("Failed");

      reset();
      toast("Magazine has benn updated!");
      setImageFile(null);
    } catch (err: any) {
      toast("Failed to update magazine");
      throw Error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-25 px-6">
      <Card className="shadow-xl border-muted">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center font-bold">
            Update Magazine
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            {/* Title */}
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input
                placeholder="Enter magazine title"
                {...register("title", { required: true })}
              />
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                placeholder="Optional subtitle"
                {...register("sub_title")}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                rows={4}
                placeholder="Write description..."
                {...register("discription", { required: true })}
              />
            </div>

            {/* Outcomes */}
            <div className="space-y-2">
              <Label>Outcomes *</Label>
              <Textarea
                rows={3}
                placeholder="Learning outcomes..."
                {...register("outcomes", { required: true })}
              />
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <Label>Summary *</Label>
              <Textarea
                rows={3}
                placeholder="Short summary..."
                {...register("summary", { required: true })}
              />
            </div>

            {/* Read Time */}
            <div className="space-y-2">
              <Label>Read Time *</Label>
              <Input
                placeholder="e.g. 5 min read"
                {...register("read_time", { required: true })}
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-3">
              <Label>Cover Image</Label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-2 cursor-pointer hover:bg-muted transition">
                {!imageFile && (
                  <div className="flex flex-col items-center justify-center">
                    <UploadCloud className="w-6 h-6 mb-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("cover_img")}
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
                {imageFile && (
                  <div className="flex items-baseline gap-3">
                    <Image
                      width={100}
                      height={60}
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      className="rounded-xl border w-48 shadow"
                    />
                    <ArrowLeftRight />
                  </div>
                )}
              </label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer text-md md:text-lg py-3 md:py-6"
            >
                {isSubmitting ?  "submitting..."  : "Publish Magazine 🚀"}
              
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
