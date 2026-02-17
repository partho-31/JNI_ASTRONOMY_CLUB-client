"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RegistrationSchema } from "./RegistrationValidation";
import { registerUser } from "@/services/authServices";
import { toast } from "sonner";

const RegistrationForm = () => {
  const form = useForm({
    resolver: zodResolver(RegistrationSchema),
  });

  const {formState: { isSubmitting }} = form

  const password = form.watch("password");
  const confirmPassword = form.watch("passwordConfirm");

  const OnSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data)
      if (res.ok){
          toast.success("We’ve sent you a verification email. Please verify your account!")
      }else {
        toast.error("Something went wrong! Please try again later.")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="w-full max-w-md m-3 md:m-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-cyan-500/30">
      <div className="text-center mb-3 md:mb-8">
        <h1 className="text-lg md:text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Join the Cosmos
        </h1>
        <p className="text-gray-300 mt-2">Create your stellar account</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(OnSubmit)}
          className="space-y-3 md:space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-300 font-medium text-sm">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-900/80 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-300 font-medium text-sm">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-900/80 border-purple-500/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-cyan-300 font-medium text-sm">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-900/80 border-blue-500/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  />
                </FormControl>
                {confirmPassword && password != confirmPassword ? (
                  <FormMessage className="text-red-400 text-xs">
                    {" "}
                    Password Does not match!
                  </FormMessage>
                ) : (
                  <FormMessage className="text-red-400 text-xs" />
                )}
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled = {!!confirmPassword && password != confirmPassword }
            className="w-full bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
             { isSubmitting ? "Launching..." : 'Launch Account 🚀'}
          </Button>
        </form>
      </Form>

      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
