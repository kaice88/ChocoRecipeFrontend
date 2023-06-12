import img from "../assets/img_recipe.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import SelectSort from "../component/UI/Select";
import { useActionData, json, redirect, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import { useState } from "react";
import { Spin } from "antd";

function FavouriteRecipes() {
  const data = useLoaderData();
  const updatedData = data.map((data) => {
    return {
      ...data,
      isLiked: true,
    };
  });
  const [recipes, setRecipes] = useState(updatedData);
  const [isLoading, setIsLoading] = useState(false);
  const id = localStorage.getItem("id");
  const token = getAuthToken();
  const SortHandler = async (sort_by) => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/recipes/favorites/?sort_by=" + sort_by,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (!response.ok) {
      throw json({ message: "Could not load data" }, { status: 500 });
    }
    const searchData = await response.json();
    setRecipes(searchData);
    setIsLoading(false);
  };
  return (
    <>
      <SelectSort onSelect={SortHandler}></SelectSort>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <ListRecipes recipe_list={recipes} showIcon={true}></ListRecipes>
        </>
      )}
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
