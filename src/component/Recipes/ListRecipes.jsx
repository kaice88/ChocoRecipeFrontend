import { useState } from "react";
import Recipe from "./Recipe";
import styles from "./ListRecipes.module.css";
import NewRecipe from "../NewItem/NewItem";
import ModalRecipe from "../Modal/ModalRecipe";
function ListRecipes(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    console.log("handleClick");
    showModal();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles["list-recipe"]}>
      {props.create && (
        <div onClick={handleClick}>
          <NewRecipe text="New recipe"></NewRecipe>
        </div>
      )}
      {props.recipe_list.map((item, index) => (
        <Recipe
          className={styles.recipe}
          key={index}
          src={item.src}
          alt={item.alt}
          name={item.name}
          test={item.test}
          like={item.like}
          rate={item.rate}
          username={item.username}
          isLiked={item.isLiked}
          // handleLikeClick={() => handleLikeClick(index)}
        ></Recipe>
      ))}
      <ModalRecipe
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></ModalRecipe>
    </div>
  );
}

export default ListRecipes;
