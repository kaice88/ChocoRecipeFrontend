import Recipe from "./Recipe";
import styles from "./ListRecipes.module.css"
function ListRecipes(props) {
  return (
    <div className={styles["list-recipe"]}>
      {props.recipe_list.map((item, index) => (
        <Recipe className={styles.recipe}
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
    </div>
  );
}

export default ListRecipes;
