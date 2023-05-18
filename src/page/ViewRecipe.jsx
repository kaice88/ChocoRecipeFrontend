import { useSelector } from "react-redux";
import { useParams, json, useLoaderData } from "react-router-dom";
import ListIngredients from "../component/Ingredients/ListIngredients";
import Directions from "../component/Directions/Directions";
import styles from "./ViewRecipe.module.css";
import Introview from "../component/Introview/Introview";
import ListReviews from "../component/Reviews/ListReviews";
import Reviews from "../component/Reviews/Reviews";

function ViewRecipe(props) {
  const data = useLoaderData();
  console.log(data);
  const params = useParams();
  const user = useSelector((state) => state.user);

  const review_arr = [
    {
      src: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Quynh Linh",
      time: "a few seconds ago",
      rate: "5.0",
      content:
        "We loved this recipe. I have made these before using shredded cheddar but using mozzarella shredded is the way to go. 100% delicious",
    },
    {
      src: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Sarah Diaz",
      time: "8 months ago",
      rate: "3.0",
      content:
        "Turned out great. I think next time i might sprinkle a little garlic salt on the Zucchini before adding the beef mixture, it seemed like it could have used a little more seasoning. Also, i did not have enough mozzarella cheese on hand so i mixed what I had left with Monterey jack and it was good. I also cooked it 5 mins longer than what the recipe called for and it was perfect. My husband loved it! 😍",
    },
    {
      src: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "AMorg",
      time: "10 months ago",
      rate: "4.0",
      content: "Really good! Family loved it!!",
    },
  ];
  //   const [value, setValue] = useState(1);
  const HandlerValue = (value) => {
    console.log(value);
  };
  return (
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
