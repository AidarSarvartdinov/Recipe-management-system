import React from 'react';
import { initAdmin } from '../../../../../firebase/firebaseAdmin';
import { getRecipeById } from '@/lib/getRecipeById';

interface Props {
  params: Promise<{ id: string }>;
}

const Page: React.FC<Props> = async ({ params }) => {
  await initAdmin();
  const { id } = await params;
  const recipe = await getRecipeById(id);
  if (!recipe) return <p>No such recipe</p>;
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full flex justify-center rounded-2xl overflow-hidden max-w-[600px]">
        <img src={recipe.img} alt="recipe image" width={600}></img>
      </div>

      <div className="w-full max-w-[600px] mt-6">
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-700 text-center mb-6">{recipe.description}</p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {recipe.products.map((product) => (
            <li key={product.name}>
              {product.name}: {product.quantity} {product.unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
