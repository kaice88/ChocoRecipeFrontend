import { useActionData, json, redirect, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import img from "../assets/img_recipe.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import SelectSort from "../component/UI/Select";
import { useState } from "react";
import { Spin } from "antd";

function MyRecipes() {
  const data = useLoaderData();
  const [recipes, setRecipes] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const id = localStorage.getItem("id");
  const SortHandler = async (sort_by) => {
    setIsLoading(true);
    const response = await fetch(
      `http://127.0.0.1:8000/recipes/?user_id=${id}&?sort_by=` + sort_by
    );
    console.log(
      `http://127.0.0.1:8000/recipes/?user_id=${id}&?sort_by=` + sort_by
    );
    if (!response.ok) {
      throw json({ message: "Could not load data" }, { status: 500 });
    }
    const searchData = await response.json();
    // setRecipes(searchData);
    console.log(searchData);
    setIsLoading(false);
  };

  return (
    <>
      <SelectSort onSelect={SortHandler}></SelectSort>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <ListRecipes
            recipe_list={recipes}
            create="True"
            showIcon={true}
          ></ListRecipes>
        </>
      )}
    </>
  );
}

export default MyRecipes;
// export async function action({ params, request }) {
//   const eventId = params.eventId;
//   const response = await fetch("http://localhost:8080/events/" + eventId, {
//     method: request.method,
//   });

//   if (!response.ok) {
//     throw json(
//       { message: "Could not delete event." },
//       {
//         status: 500,
//       }
//     );
//   }
//   return redirect("/events");
// }
export const loader = async () => {
  const id = localStorage.getItem("id");
  const token = getAuthToken();
  let response;
  if (token && id) {
    response = await fetch("http://127.0.0.1:8000/recipes/?user_id=" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw json({ message: "Could not fetch recipe" }, { status: 500 });
    }
  }
  return response;
};
