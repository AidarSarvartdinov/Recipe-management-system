"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormInputs>();

  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setFirebaseError(null);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Logged in successfully!");
      reset();
      router.push("/recipes/my");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFirebaseError(error.message);
      } else {
        setFirebaseError("Unknown error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
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
            })}
          />

          {firebaseError && (
            <p className="text-red-600 text-center text-sm">{firebaseError}</p>
          )}

          <div className="flex justify-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
