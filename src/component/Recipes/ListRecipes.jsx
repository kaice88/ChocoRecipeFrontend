import { useState } from "react";
import { Link, json } from "react-router-dom";
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
  const visibleRecipes = props.recipe_list.slice(0, visibleRows); // Lấy danh sách hàng hiển thị
  const handleFormSubmit = async (formData) => {
    setIsModalOpen(false);
    const response = await fetch(`http://127.0.0.1:8000/recipes/`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw json({ message: "Could not load data" }, { status: 500 });
    }
    // console.log(formData);
  };
  return (
    <div className={styles["list-recipe"]}>
      {props.create && (
        <div onClick={handleClick}>
          <NewRecipe text="New recipe"></NewRecipe>
        </div>
      )}

      {visibleRecipes.map((item, index) => (
        <Link to={`/${item.id}`} key={index}>
          <Recipe
            className={styles.recipe}
            src={`http://127.0.0.1:8000${item.image}`}
            alt={item.alt}
            name={item.title}
            like={item.num_likes}
            rate={item.average_rating}
            username={item.author}
            isLiked={false}
            // handleLikeClick={() => handleLikeClick(index)}
          ></Recipe>
        </Link>
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
      ></ModalRecipe>
    </div>
  );
}

export default ListRecipes;
