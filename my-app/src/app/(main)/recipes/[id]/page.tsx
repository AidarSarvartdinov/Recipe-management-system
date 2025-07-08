import React from "react";

const recipe = {
  title: "Яичница с баклажанами и помидорами",
  description:
    "Разнообразьте свое утреннее меню, добавив овощи в обычную яичницу. Хорошим сочетанием будет смесь баклажанов и томатов. Обжарьте нарезанные овощи на сковороде, а затем залейте яйцами и дождитесь, когда они приготовятся до нужной консистенции.",
  img: "https://cdn.food.ru/unsigned/fit/2048/1536/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDYxNS80U01SVXguanBlZw.webp",
  ingredients: [
    {
      name: "Помидор",
      amount: 2,
      gramming: "шт",
    },
    {
      name: "Баклажан",
      amount: 120,
      gramming: "гр",
    },
    {
      name: "Яйцо",
      amount: 2,
      gramming: "шт",
    },
    {
      name: "Растительное масло",
      amount: 4,
      gramming: "ст. л.",
    },
  ],
};

const page = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full flex justify-center rounded-2xl overflow-hidden max-w-[600px]">
        <img src={recipe.img} alt="recipe image" width={600}></img>
      </div>

      <div className="w-full max-w-[600px] mt-6">
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-4">{recipe.title}</h1>

        <p className="text-gray-700 text-center mb-6">{recipe.description}</p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {ingredient.name}: {ingredient.amount} {ingredient.gramming}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
