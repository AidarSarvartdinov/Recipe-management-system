import Card from "@/components/Card";
import { title } from "process";
import React from "react";

const recipes = [
  {
    id: 1,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 2,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 3,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 4,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 5,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 6,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 7,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 8,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
  {
    id: 9,
    title: "Some title of some recipe",
    img: "https://rare-gallery.com/uploads/posts/851971-Fish-Food-Potato-Vegetables-Lemons-Salmon-Plate.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem expedita laboriosam dolorem. Magnam nesciunt sapiente, sit officiis dolorem debitis saepe dignissimos placeat soluta ea praesentium animi, cumque nobis adipisci reprehenderit.",
  },
];

const page = () => {
  return (
    <div className="m-2 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
      {recipes.map((recipe) => (
        <div className="mt-2" key={recipe.id}>
          <Card
            title={recipe.title}
            description={recipe.description}
            img={recipe.img}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
