import { Recipe } from "@/types/Recipe";
import { getFirestore } from "firebase-admin/firestore";

export const getRecipesByUser = async (userId: string): Promise<Omit<Recipe, 'products'>[]> => {
  const firestore = getFirestore();
  const recipeSnapshot = await firestore
    .collection("recipes")
    .where("userId", "==", userId)
    .get();
  const recipes = recipeSnapshot.docs.map((recipe) => ({
    id: recipe.id,
    title: recipe.data().title,
    description: recipe.data().description,
    img: recipe.data().img,
  }));

  return recipes;
};
