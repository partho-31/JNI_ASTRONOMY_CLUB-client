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
import { Article } from "@/types/article";
import { useParams } from "next/navigation";

export default function ArticleForm() {
  //   const { magazineId } = useParams<{ magazineId: string }>();
  const { register, handleSubmit, reset, formState : {isSubmitting} } = useForm<FieldValues>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { articleId } = useParams<{ articleId: string }>();
  useEffect(() => {
    const handlefetch = async () => {
      const response = await fetch(
        `https://jni-astronomy-club.vercel.app/api/articles/${articleId}`,
      );
      const article: Article = await response.json();
      reset(article);
    };
    handlefetch();
  }, [articleId, reset]);

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
        `https://jni-astronomy-club.vercel.app/api/articles/${articleId}/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `JWT ${token}`,
          },
          body: formData,
        },
      );
      if (res.ok) {
        reset();
        setImageFile(null);
        toast("Article has been updated successfully!");
      } else {
        toast("Failed");
      }
    } catch (err: any) {
      toast("Failed to create article");
      throw Error(err);
    }
  };

  return (
    <div className=" max-w-3xl mx-auto py-25 px-6">
      <Card className="shadow-xl border-muted">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center font-bold">
            Update Article
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Title */}
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input {...register("title", { required: true })} />
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input {...register("sub_title")} />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                rows={4}
                {...register("discription", { required: true })}
              />
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <Label>Summary *</Label>
              <Textarea rows={3} {...register("summary", { required: true })} />
            </div>

            {/* Heading 1 */}
            <div className="space-y-2">
              <Label>Heading 01</Label>
              <Input {...register("heading_01")} />
            </div>

            <div className="space-y-2">
              <Label>Paragraph 01</Label>
              <Textarea rows={3} {...register("paragraph_01")} />
            </div>

            {/* Heading 2 */}
            <div className="space-y-2">
              <Label>Heading 02</Label>
              <Input {...register("heading_02")} />
            </div>

            <div className="space-y-2">
              <Label>Paragraph 02</Label>
              <Textarea rows={3} {...register("paragraph_02")} />
            </div>

            {/* Heading 3 */}
            <div className="space-y-2">
              <Label>Heading 03</Label>
              <Input {...register("heading_03")} />
            </div>

            <div className="space-y-2">
              <Label>Paragraph 03</Label>
              <Textarea rows={3} {...register("paragraph_03")} />
            </div>

            {/* Quote */}
            <div className="space-y-2">
              <Label>Quote</Label>
              <Textarea rows={2} {...register("quotes")} />
            </div>

            <div className="space-y-2">
              <Label>Quoter</Label>
              <Input {...register("quoter")} />
            </div>

            {/* Read Time */}
            <div className="space-y-2">
              <Label>Read Time *</Label>
              <Input {...register("read_time", { required: true })} />
            </div>

            {/* Image Upload */}
            <div className="space-y-3">
              <Label>Cover Image</Label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-3 cursor-pointer hover:bg-muted transition">
                {!imageFile && (
                  <div className="flex flex-col items-center">
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
              className="w-full cursor-pointer py-5 text-lg"
            >
              {isSubmitting? "submitting.." : "Publish Article"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
