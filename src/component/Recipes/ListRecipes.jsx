import { useState } from "react";
import { Link, json, redirect } from "react-router-dom";
import Recipe from "./Recipe";
import styles from "./ListRecipes.module.css";
import NewRecipe from "../NewItem/NewItem";
import ModalRecipe from "../Modal/ModalRecipe";
import { getAuthToken } from "../../utils/auth";
function ListRecipes(props) {
  const [visibleRows, setVisibleRows] = useState(20); // Số hàng đang hiển thị
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    console.log("handleClick");
    showModal();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const token = getAuthToken();
  const handleShowMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 20); // Tăng số hàng đang hiển thị lên 5
  };
  function formDataToObject(formData) {
    return Array.from(formData.entries()).reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  }
  const visibleRecipes = props.recipe_list.slice(0, visibleRows); // Lấy danh sách hàng hiển thị
  const handleFormSubmit = async (recipe) => {
    const formData = new FormData();
    for (let key in recipe) {
      if (key === "ingredients") {
        formData.append(key, JSON.stringify(recipe[key]));
      } else {
        formData.append(key, recipe[key]);
      }
    }
    console.log(formDataToObject(formData));
    setIsModalOpen(false);
    console.log(recipe);
    const response = await fetch(`http://127.0.0.1:8000/recipes/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 400) {
      const data = await response.json();
      console.log(data);
    }
    if (!response.ok) {
      throw json({ message: "Could not load data" }, { status: 500 });
    }
    return redirect("/profile/my-recipes");
    //   const response2 = await fetch(
    //     `http://127.0.0.1:8000/recipes/ingredients/`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(ingredients),
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + token,
    //       },
    //     }
    //   );
    //   if (!response2.ok) {
    //     console.log(response2.json());
    //     throw json({ message: "Could not load data" }, { status: 500 });
    //   }
    //   console.log(formData);
  };
  return (
    <div className={styles["list-recipe"]}>
      {props.create && (
        <div onClick={handleClick}>
          <NewRecipe text="New recipe"></NewRecipe>
        </div>
      )}

      {visibleRecipes.map((item, index) => (
        <Recipe
          key={index}
          showIcon={props.showIcon}
          className={styles.recipe}
          src={`http://127.0.0.1:8000${item.image}`}
          alt={item.alt}
          name={item.title}
          like={item.num_likes}
          rate={item.average_rating}
          username={item.author}
          isLiked={item.isLiked}
          id={item.id}
          directions={item.directions}
          calories={item.calories}
          ingredients={item.ingredients}
          cooking_time={item.cooking_time}
          // handleLikeClick={() => handleLikeClick(index)}
        ></Recipe>
      ))}
      {visibleRows < props.recipe_list.length && ( // Kiểm tra xem còn hàng nào để hiển thị
        <div className={styles["show-container"]}>
          <button className={styles.show} onClick={handleShowMore}>
            {" "}
            <i class="fa-solid fa-caret-down"></i> Show More
          </button>
        </div>
      )}
      <ModalRecipe
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        handleFormSubmit={handleFormSubmit}
        heading="Create a new recipe"
      ></ModalRecipe>
    </div>
  );
}

export default ListRecipes;
