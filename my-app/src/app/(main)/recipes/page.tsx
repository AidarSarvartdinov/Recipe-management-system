import Card from "@/components/Card";
import React from "react";
import { initAdmin } from "../../../../firebase/firebaseAdmin";
import { getAllRecipies } from "@/lib/getAllRecipes";
import { getServerAuthUser } from "@/lib/getServerAuthUser";
import Link from "next/link";

const Page = async () => {
  await initAdmin();
  const user = await getServerAuthUser();
  if (!user) return <h1 className="text-xl">You are not authorized</h1>;
  const recipes = await getAllRecipies();
  return (
    <div className="m-2 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
      {recipes.map((recipe) => (
        <div className="mt-2" key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>
            <Card
              title={recipe.title}
              description={recipe.description}
              img={recipe.img}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
