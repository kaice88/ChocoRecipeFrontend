import img from "../assets/img_recipe.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import SelectSort from "../component/UI/Select";
import { useActionData, json, redirect, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

function FavouriteRecipes() {
  const data = useLoaderData();
  return (
    <>
      {" "}
      <>
        <SelectSort></SelectSort>
        <ListRecipes recipe_list={data}></ListRecipes>
      </>
    </>
  );
}

export default FavouriteRecipes;
export const loader = async () => {
  const id = localStorage.getItem("id");
  const token = getAuthToken();
  let response;
  if (token && id) {
    response = await fetch("http://127.0.0.1:8000/recipes/favorites/", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw json({ message: "Could not fetch recipe" }, { status: 500 });
    }
  }
  return response;
};
