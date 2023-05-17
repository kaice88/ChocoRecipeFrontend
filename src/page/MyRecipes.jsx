import { useActionData, json, redirect, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../utils/auth";
import img from "../assets/img_recipe.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import SelectSort from "../component/UI/Select";

const dummy_arr = [
  {
    src: img,
    name: "Fluffy Japanese Soufflé Pancakes",
    like: "15k",
    username: "kimchi123",
    rate: "2.5",
    isLiked: true,
  },
  {
    src: img,
    name: "Pumpkin Cake",
    like: "15k",
    username: "kimchi123",
    rate: "5",
    isLiked: false,
  },
  {
    src: img,
    name: "Fluffy Japanese Soufflé Pancakes",
    like: "15k",
    username: "kimchi123",
    rate: "2.5",
    isLiked: false,
  },
  {
    src: img,
    name: "Fluffy Japanese Soufflé Pancakes",
    like: "15k",
    username: "kimchi123",
    rate: "2.5",
    isLiked: false,
  },
  {
    src: img,
    name: "Fluffy Japanese Soufflé Pancakes",
    like: "15k",
    username: "kimchi123",
    rate: "2.5",
    isLiked: false,
  },
  {
    src: img,
    name: "Fluffy Japanese Soufflé Pancakes",
    like: "15k",
    username: "kimchi123",
    rate: "2.5",
    isLiked: true,
  },
];

function MyRecipes() {
  const data = useLoaderData();
  return (
    <>
      <SelectSort></SelectSort>
      <ListRecipes recipe_list={data} create="True"></ListRecipes>
    </>
  );
}

export default MyRecipes;
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
export const loader = async () => {
  // const id = localStorage.getItem("id");
  // const token = getAuthToken();
  // let response;
  // if (token && id) {
  //   response = await fetch("http://127.0.0.1:8000/recipes/" + id, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   if (!response.ok) {
  //     throw json({ message: "Could not fetch recipe" }, { status: 500 });
  //   }
  // }
  // return response;
  const dummy_arr = [
    {
      src: img,
      name: "Fluffy Japanese Soufflé Pancakes",
      like: "15k",
      username: "kimchi123",
      rate: "2.5",
      isLiked: true,
    },
    {
      src: img,
      name: "Pumpkin Cake",
      like: "15k",
      username: "kimchi123",
      rate: "5",
      isLiked: false,
    },
    {
      src: img,
      name: "Fluffy Japanese Soufflé Pancakes",
      like: "15k",
      username: "kimchi123",
      rate: "2.5",
      isLiked: false,
    },
    {
      src: img,
      name: "Fluffy Japanese Soufflé Pancakes",
      like: "15k",
      username: "kimchi123",
      rate: "2.5",
      isLiked: false,
    },
    {
      src: img,
      name: "Fluffy Japanese Soufflé Pancakes",
      like: "15k",
      username: "kimchi123",
      rate: "2.5",
      isLiked: false,
    },
    {
      src: img,
      name: "Fluffy Japanese Soufflé Pancakes",
      like: "15k",
      username: "kimchi123",
      rate: "2.5",
      isLiked: true,
    },
  ];
  return dummy_arr;
};
