'use client';

import { Button } from '@/components/Button';
import React, { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { app, auth } from '../../../../../firebase/firebaseConfig';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const MEASURE_UNITS = ['kg', 'g', 'l', 'ml', 'tbsp', 'tsp', 'pcs'] as const;

const imgUrl =
  'https://www.allrecipes.com/thmb/lhDMaQOTgVgojQABCMV4iIVE_0Q=/771x514/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/3220117_Grilled-Cod-with-Spinach-and-Tomatoes-photo-by-KGora-resize-6f25f6973ddb4ad999524ceb0fddd156.jpg';

type Unit = (typeof MEASURE_UNITS)[number];

interface Product {
  name: string;
  quantity: number | '';
  unit: Unit;
}

interface Recipe {
  title: string;
  description: string;
  products: Product[];
}

const AddRecipePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Recipe>({
    defaultValues: {
      products: [{ name: '', quantity: '', unit: 'pcs' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const firestore = getFirestore(app);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Recipe> = async (data) => {
    setErrorMsg(null);
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('You must be logged in');

      await addDoc(collection(firestore, 'recipes'), {
        title: data.title,
        description: data.description,
        products: data.products,
        img: imgUrl,
        userId: user.uid,
      });

      reset();
      alert('Recipe created successfully!');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
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
          {...register('title', { required: 'Title is required' })}
          placeholder="Enter the title"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          placeholder="Describe the recipe"
          rows={4}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.description ? 'border-red-500' : 'border-gray-300'
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
          <div
            key={field.id}
            className="flex flex-col md:flex-row gap-3 mb-10 md:items-center"
          >
            <input
              {...register(`products.${index}.name` as const, {
                required: 'Product name is required',
              })}
              placeholder="Product name"
              className={`flex-1 border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.products?.[index]?.name
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            <input
              type="number"
              step="any"
              {...register(`products.${index}.quantity` as const, {
                required: 'Quantity is required',
                min: {
                  value: 0.00001,
                  message: 'Quantity must be greater than 0',
                },
                valueAsNumber: true,
              })}
              placeholder=""
              className={`w-24 border rounded px-3 py-2 focus:outline-none focus:ring ${
                errors.products?.[index]?.quantity
                  ? 'border-red-500'
                  : 'border-gray-300'
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
        <Button
          variant="secondary"
          onClick={() => append({ name: '', quantity: '', unit: 'pcs' })}
        >
          Add a product
        </Button>
      </div>
      <div>{errorMsg}</div>
      <div>
        <Button type="submit">
          {loading ? <span>Loading</span> : <span>Submit</span>}
        </Button>
      </div>
    </form>
  );
};

export default AddRecipePage;
