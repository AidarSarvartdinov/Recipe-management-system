"use client";

import { Button } from "@/components/Button";
import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

const MEASURE_UNITS = ["kg", "g", "l", "ml", "tbsp", "tsp", "pcs"] as const;

type Unit = (typeof MEASURE_UNITS)[number];

interface Product {
  name: string;
  quantity: number | "";
  unit: Unit;
}

interface Recipe {
  title: string;
  img: FileList | null;
  description: string;
  products: Product[];
}

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Recipe>({
    defaultValues: {
      title: "",
      img: null,
      description: "",
      products: [{ name: "", quantity: "", unit: "pcs" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit: SubmitHandler<Recipe> = (data) => {
    console.log(data);
    console.log(data.img?.[0]);
    
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mt-4 mx-auto p-6 bg-white rounded shadow-xl space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter the title"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="img">
          Image
        </label>
        <input
          id="img"
          type="file"
          accept="image/*"
          {...register("img", { required: "Image is required" })}
          className={`block w-full text-sm text-gray-600
            file:mr-4 file:py-2 file:px-4 file:cursor-pointer
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-orange-600
            hover:file:bg-blue-100
            ${errors.img ? "border-red-500" : ""}`}
        />
        {errors.img && (
          <p className="text-red-500 text-sm mt-1">{errors.img.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          placeholder="Describe the recipe"
          rows={4}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Products</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col md:flex-row gap-3 mb-10 md:items-center">
            <input
              {...register(`products.${index}.name` as const, {
                required: "Product name is required",
              })}
              placeholder="Product name"
              className={`flex-1 border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.products?.[index]?.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <input
              type="number"
              step="any"
              {...register(`products.${index}.quantity` as const, {
                required: "Quantity is required",
                min: {
                  value: 0.00001,
                  message: "Quantity must be greater than 0",
                },
                valueAsNumber: true,
              })}
              placeholder=""
              className={`w-24 border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.products?.[index]?.quantity
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <select
              {...register(`products.${index}.unit` as const)}
              className="border rounded px-2 py-2 cursor-pointer focus:outline-none focus:ring"
              defaultValue={field.unit}
            >
              {MEASURE_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600 hover:text-red-800 border p-2 rounded cursor-pointer font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
        <Button variant="secondary" onClick={() => append({ name: "", quantity: "", unit: "pcs" })}>
          Add a product
        </Button>
      </div>
      <div>
        <Button type="submit">
          Subbmit
        </Button>
      </div>
    </form>
  );
};

export default page;
