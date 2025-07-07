'use client';

import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="fixed top-0 right-0 bottom-0 w-full sm:w-2/3 bg-no-repeat sm:bg-right bg-contain pointer-events-none select-none img-body"
      />
      <div className="flex flex-col items-center max-w-4xl px-4 relative z-10 py-12 sm:pr-28 sm:mt-30 sm:py-14">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-950 mb-6">Welcome to Recipe Management System!</h1>
        <p className="text-lg font-semibold text-gray-700 mt-48 sm:mt-10">Share your recipes with this app</p>
        <div className="mt-4 sm:mt-20 flex gap-4">
          <Button>Show Recipes</Button>
          <Link href="/about">
            <Button variant="secondary">About Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
