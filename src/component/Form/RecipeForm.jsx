import { Form, useActionData } from "react-router-dom";
import { Divider } from "antd";
import { Input } from "antd";
import INPUT from "../UI/Input";
import NewImage from "../NewItem/NewItem";
import styles from "./RecipeForm.module.css";
import NewIngredients from "../Ingredients/NewIngredients";
import { useState } from "react";
const { TextArea } = Input;
function RecipeForm(props) {
  const recipe = props.recipe;
  console.log(recipe);
  const [ingredients, setIngredients] = useState(1);
  const AddNewIngredient = () => {
    setIngredients((prev) => prev + 1);
  };

  const RemoveIngredient = () => {
    setIngredients((prev) => prev - 1);
  }

  return (
    <Form name="form">
      <div>
        <h3 className={styles.heading}>{props.heading}</h3>
      </div>
      <div className={styles["container"]}>
        <div className={styles.input}>
          <INPUT
            label="Title"
            type="text"
            placeholder='Enter a title, like "Smothered Chicken"'
            name="title"
            // value={recipe.title}
          ></INPUT>
          <div className={styles["time-calories-container"]}>
            <INPUT
              label="Time (mins)"
              type="text"
              placeholder="Enter time cooking"
              name="time"
              // value={recipe.time}
            ></INPUT>
            <INPUT
              label="Calories"
              type="text"
              placeholder="Enter calories"
              name="calories"
              // value={recipe.calories}
            ></INPUT>
          </div>
        </div>

        <NewImage text="Image"></NewImage>
      </div>
      <div>
        <Divider orientation="left">Ingredients</Divider>
        {Array.from({ length: ingredients }, (_, index) => (
          <NewIngredients key={index} name={`'ingredient-${index}`} iclick={RemoveIngredient} />
        ))}
        <div className={styles['container-row']}>

        <div className={styles["add-row"]} onClick={AddNewIngredient}>
          + Add ingredient
        </div>
        </div>
      </div>
      <div>
        <Divider orientation="left">Ingredients</Divider>
        <TextArea
          showCount
          maxLength={500}
          style={{
            height: 120,
            marginBottom: 24,
          }}
          placeholder="can resize"
          name="direction"
        />
      </div>
    </Form>
  );
}

export default RecipeForm;
