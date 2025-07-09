import { Button } from '@/components/Button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-[#f9f9f9] max-w-[96%] py-2 sm:h-auto shadow-xl rounded-2xl sm:max-w-[80%] sm:p-4">
        <h1 className="text-2xl text-center px-1 text-blue-950 sm:text-4xl">
          What is Recipe Management System?
        </h1>
        <div className="mt-4 sm:mt-10 sm:text-2xl px-6">
          This is an application where you can create and save your recipes.
          Describe the cooking process, provide a list of products and labels,
          attach a photo and post it. Then you can see your recipe among the
          list of other recipes.
        </div>
        <div className="flex gap-4 mt-4 pb-8 sm:mt-6">
          <Button>Go to recipes</Button>
          <Link href="/">
            <Button variant="secondary">Home page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
