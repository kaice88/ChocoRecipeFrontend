import { useActionData } from "react-router-dom";
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
  const data = useActionData();
  console.log(data);
  return (
    <>
      <SelectSort></SelectSort>
      <ListRecipes recipe_list={dummy_arr} create="True"></ListRecipes>
    </>
  );
}

export default MyRecipes;
