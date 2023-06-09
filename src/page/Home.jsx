import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import img from "../assets/img_recipe.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import Search from "../component/UI/Search";
import styles from "./Home.module.css";
import Slider from "../component/Slider/Slider";
import SelectSort from "../component/UI/Select";
import { Spin } from "antd";
import { useState } from "react";
import { getAuthToken } from "../utils/auth";
import { useSelector } from "react-redux";

function Home(props) {
  const data = useLoaderData();
  // const favData = useRouteLoaderData("fav-recipes");
  console.log(data);
  // console.log(favData);
  const token = getAuthToken();
  const id = localStorage.getItem("id");
  // const user = useSelector();
  // if(id) {
  //   user.username ==
  // }
  const updatedData = data.map((data) => {
    return {
      ...data,
      isLiked: token ? true : false,
    };
  });
  const [recipes, setRecipes] = useState(updatedData);
  const [isLoading, setIsLoading] = useState(false);

  const slides = [
    {
      url: "https://images.pexels.com/photos/3743169/pexels-photo-3743169.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/5644944/pexels-photo-5644944.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/5490968/pexels-photo-5490968.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  const SearchHandler = async (keyword) => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/recipes/?keyword=" + keyword
    );
    if (!response.ok) {
      throw json({ message: "Could not load data" }, { status: 500 });
    }
    const searchData = await response.json();
    setRecipes(searchData);
    setIsLoading(false);
  };
  const SortHandler = async (sort_by) => {
    setIsLoading(true);
    const response = await fetch(
      "http://127.0.0.1:8000/recipes/?sort_by=" + sort_by
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
      <div className={styles.container}>
        <div className={styles.img}>
          <div className={styles.containerSlider}>
            <Slider slides={slides}></Slider>
          </div>
          <div className={styles.search}>
            <Search
              type="text"
              placeholder="Search recipes"
              onEnter={SearchHandler}
            ></Search>
          </div>
        </div>
        <div className={styles.recipe_list}>
          {/* <div className={styles["select-container"]}> */}
          <SelectSort onSelect={SortHandler}></SelectSort>
          {/* </div> */}
          {isLoading ? (
            <Spin></Spin>
          ) : (
            <ListRecipes recipe_list={recipes} showIcon={false}></ListRecipes>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
export const loader = async () => {
  const response = await fetch("http://127.0.0.1:8000/recipes/");
  if (response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not load data" }, { status: 500 });
  }
  return response;
};
//  const favoriteLoader = async () => {
//   const id = localStorage.getItem("id");
//   const token = getAuthToken();
//   let response;
//   if (token && id) {
//     response = await fetch("http://127.0.0.1:8000/recipes/favorites/", {
//       headers: {
//         "content-type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//     });
//     if (!response.ok) {
//       throw json({ message: "Could not fetch recipe" }, { status: 500 });
//     }
//   }
//   const data = await response.json();
//   return data;
// };
