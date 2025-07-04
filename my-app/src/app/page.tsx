'use client';

import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
		document.body.classList.add('img-body');

		return () => {
			document.body.classList.remove('img-body');
		};
	}, []);
  return (
    <div className="max-w-4xl ml-32 mt-16 py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Recipe Management System!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Share your recipes with this app 
      </p>
      <div className="mt-12 flex gap-4">

        <Button>Browse Items</Button>

        <Link href="#">
          <Button variant="secondary">About Us</Button>
        </Link>
      </div>
    </div>
  );
}
