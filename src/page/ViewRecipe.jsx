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

function ViewRecipe(props) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useLoaderData();
  console.log(data);
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
                name={data.title}
                username={data.author}
                rate={2.5}
                like="998"
                review={data.reviews.length}
                unitIngre={data.ingredients.length}
                unitMin={data.cooking_time}
                unitCalo={data.calories}
                src={`http://127.0.0.1:8000${data.image}`}
              ></Introview>
            </div>
            <div className={styles["container-ingre"]}>
              <ListIngredients
                ingredient_list={data["ingredients"]}
              ></ListIngredients>
            </div>
            <div className={styles["container-directions"]}>
              <Directions directions={data.directions}></Directions>
            </div>
            <div>
              <Reviews
                review={data.reviews.length}
                rateAverage={data.average_rating}
                src={user.image}
                username={user.username}
                recipe_id={params.recipeId}
                // disabled={false}
                MyReview=""
                review_list={data.reviews}
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
