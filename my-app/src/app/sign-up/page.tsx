"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegisterFormInputs>();

  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const password = watch("password", "");

  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setFirebaseError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(res);
      router.push("/recipes/my");
      reset()
    } catch (error: unknown) {
        if (error instanceof Error) {
            setFirebaseError(error.message);
        } else {
            setFirebaseError("Something went wrong");
        }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          <Input
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />

          {firebaseError && (
            <p className="text-red-600 text-center text-sm">{firebaseError}</p>
          )}

          <div className="flex justify-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Sign up"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
