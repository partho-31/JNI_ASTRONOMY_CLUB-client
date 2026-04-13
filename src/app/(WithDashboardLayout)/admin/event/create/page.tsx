"use client";

import { useState } from "react";
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
import { baseURL } from "@/services/config/BaseURL";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading },
  } = useForm<FieldValues>();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const onSubmit = async (data: FieldValues) => {
    const token = await getAccessToken();
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${baseURL}/api/events/`, {
        method: "POST",
        headers: {
          Authorization: `JWT ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      reset();
      toast("Event created successfully!");
      setImageFile(null);
    } catch (err: any) {
      toast("Failed to create event");
      throw Error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Card className="shadow-xl border-muted">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center font-bold">
            Create New Event
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
                placeholder="Enter event title"
                {...register("title", { required: true })}
              />
            </div>

            {/* Type */}
            <div className="space-y-2">
              <Label>Type *</Label>
              <Input
                placeholder="Define event type i.g webinar, seminar"
                {...register("type")}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                rows={4}
                placeholder="Write description..."
                {...register("description", { required: true })}
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Location *</Label>
              <Input
                placeholder="Enter event location"
                {...register("location", { required: true })}
              />
            </div>

            {/* Start_time */}
            <div className="space-y-2">
              <Label>Star time*</Label>
              <Input
                type="datetime-local"
                placeholder="Enter start time"
                {...register("start_time", { required: true })}
              />
            </div>

            {/* End_time */}
            <div className="space-y-2">
              <Label>End time*</Label>
              <Input
                type="datetime-local"
                placeholder="Enter end time"
                {...register("end_time", { required: true })}
              />
            </div>

            {/* RG link */}
            <div className="space-y-2">
              <Label>Registration Link *</Label>
              <Input
                type="url"
                placeholder="Enter registration link"
                {...register("registration_link", { required: true })}
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
                  {...register("image")}
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
              disabled={isLoading}
              type="submit"
              className="w-full cursor-pointer text-md md:text-lg py-3 md:py-6"
            >
              Publish Event 🚀
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
