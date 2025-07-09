"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Header: React.FC = () => {
  const [isOpen, setIsopen] = React.useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

  const logout = async () => {
    try {
      signOut(auth);
    await fetch("/api/logout", { method: "POST" });

    router.push("/login");
    } catch (error) {
      console.log("Error: ", error);
      
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-2">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <Link
                  href="/recipes/my"
                  className="text-xl pl-2 font-bold text-gray-800"
                >
                  {user?.email}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link
                  href="/recipes"
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  All Recipes
                </Link>
                <Link
                  href="/recipes/my"
                  className="text-gray-700 hover:text-orange-600 transition"
                >
                  Your Recipes
                </Link>
                <Link href="/recipes/add">
                  <Button>Add Recipe</Button>
                </Link>
                <button
                  onClick={logout}
                  className="font-light text-gray-600 ml-8 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2"
                onClick={() => setIsopen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden sm:px-6">
            <div className="px-0 pt-2 pb-3 space-y-1 ">
              <Link href="/recipes" className="text-gray-900 p-1 block">
                All Recipes
              </Link>
              <Link href="/recipes/my" className="text-gray-900 p-1 block">
                Your Recipes
              </Link>
              <Link href="/recipes/add" className="text-orange-700 p-1 block">
                Add Recipe
              </Link>
              <button
                onClick={logout}
                className="font-light text-gray-600 p-1 block"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
