import Ingredient from "./Ingredient";
import styles from "./ListIngredients.module.css"
function ListIngredients(props) {
  return (
    <>
    <div className={styles["title-ingre"]}>Ingredients</div>
    <div className={styles["list-ingredient"]}>
      {props.ingredient_list.map((item, index) => (
        <Ingredient className={styles.ingredient}
        key={index}
        quantity={item.quantity}
        unit={item.unit}
        name={item.name}
        ></Ingredient>
      ))}
    </div>
    </>
  );
}

export default ListIngredients;
