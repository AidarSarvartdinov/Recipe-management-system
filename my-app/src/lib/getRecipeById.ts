import { Recipe } from "@/types/Recipe";
import { getFirestore } from "firebase-admin/firestore";

export const getRecipeById = async (id: string): Promise<Recipe|null> => {
  const firestore = getFirestore();
  const recipeDoc = await firestore
    .collection("recipes").doc(id).get()


    if (!recipeDoc.exists) return null;

  const recipe = {
    id: recipeDoc.id,
    title: recipeDoc.data()?.title,
    description: recipeDoc.data()?.description,
    img: recipeDoc.data()?.img,
    products: recipeDoc.data()?.products,
  };
  console.log(recipe);
  
  return recipe;
};
