import { useSelector } from "react-redux";
import {
  useParams,
  json,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import ListIngredients from "../component/Ingredients/ListIngredients";
import Directions from "../component/Directions/Directions";
import styles from "./ViewRecipe.module.css";
import Introview from "../component/Introview/Introview";
import ListReviews from "../component/Reviews/ListReviews";
import Reviews from "../component/Reviews/Reviews";
import { Spin } from "antd";
import { useEffect, useState } from "react";

function ViewRecipe(props) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);
  console.log(reviews);
  useEffect(() => {
    if (data) {
      setReviews(data);
    }
  }, [data.reviews.length]);
  const params = useParams();
  const user = useSelector((state) => state.user);

  //   const [value, setValue] = useState(1);
  const HandlerValue = (value) => {
    console.log(value);
  };
  return (
    <>
      {isSubmitting ? (
        <Spin />
      ) : (
        <>
          {/* <Rating HandlerValue={HandlerValue}></Rating>
      <Rating rate={4} disabled={true}></Rating> */}
          <p>{params.recipeId}🦜</p>
          <div className={styles.container}>
            <div className={styles["container-introview"]}>
              <Introview
                name={reviews.title}
                username={reviews.author}
                rate={reviews.average_rating}
                like={reviews.num_likes}
                review={reviews.reviews.length}
                unitIngre={reviews.ingredients.length}
                unitMin={reviews.cooking_time}
                unitCalo={reviews.calories}
                src={`http://127.0.0.1:8000${reviews.image}`}
              ></Introview>
            </div>
            <div className={styles["container-ingre"]}>
              <ListIngredients
                ingredient_list={reviews["ingredients"]}
              ></ListIngredients>
            </div>
            <div className={styles["container-directions"]}>
              <Directions directions={reviews.directions}></Directions>
            </div>
            <div>
              <Reviews
                review={reviews.reviews.length}
                rateAverage={reviews.average_rating}
                src={user.image}
                username={user.username}
                recipe_id={params.recipeId}
                // disabled={false}
                MyReview=""
                review_list={reviews.reviews}
              ></Reviews>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ViewRecipe;
export const loader = async ({ res, params }) => {
  // const data = await request.formData();
  // const authUser = {
  //   username: data.get("username"),
  //   password: data.get("password"),
  // };
  const id = params.recipeId;

  const response = await fetch("http://127.0.0.1:8000/recipes/" + id);
  if (response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
  // const res = await response.json();
  // const token = res.access;
  // const id = res.user_id;
  // localStorage.setItem("id", id);
  // localStorage.setItem("token", token);

  return response;
};
