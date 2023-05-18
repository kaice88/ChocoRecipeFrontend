import { Form, json } from "react-router-dom";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { Input } from "antd";
import INPUT from "../UI/Input";
import NewImage from "../NewItem/NewItem";
import styles from "./RecipeForm.module.css";
import NewIngredients from "../Ingredients/NewIngredients";
import { useState, useRef } from "react";
import Button from "../UI/Button";
const qs = require("qs");
const { TextArea } = Input;
function RecipeForm(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const user = useSelector((state) => state.user);
  const recipe = props.recipe;
  console.log(recipe);
  const [ingredients, setIngredients] = useState(1);
  const AddNewIngredient = () => {
    setIngredients((prev) => prev + 1);
  };

  const RemoveIngredient = () => {
    console.log(ingredients);
    setIngredients((prev) => prev - 1);
  };
  function formDataToObject(formData) {
    return Array.from(formData.entries()).reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  }
  const transformData = (data) => {
    const transformedObject = {
      user_id: user.id,
      title: data.title,
      calories: data.calories,
      cooking_time: data.cooking_time,
      directions: data.directions,
      ingredients: [],
      image: selectedImage,
    };

    for (const key in data) {
      if (key.startsWith("name-")) {
        const index = key.slice(5);
        const ingredientIndex = transformedObject.ingredients.findIndex(
          (ingredient) => ingredient.name === data[`name-${index}`]
        );

        if (ingredientIndex === -1) {
          transformedObject.ingredients.push({
            name: data[`name-${index}`],
            unit: data[`unit-${index}`],
            quantity: data[`quantity-${index}`],
          });
        } else {
          transformedObject.ingredients[ingredientIndex] = {
            ...transformedObject.ingredients[ingredientIndex],
            unit: data[`unit-${index}`],
            quantity: data[`quantity-${index}`],
          };
        }
      }
    }
    const recipeObj = {
      user_id: transformedObject.user_id,
      title: transformedObject.title,
      calories: transformedObject.calories,
      cooking_time: transformedObject.cooking_time,
      directions: transformedObject.directions,
      image: transformedObject.image,
    };
    const ingredientsObj = transformedObject["ingredients"];
    return { recipeObj, ingredientsObj };
  };

  const convertObjectToFormData = (object) => {
    const formData = new FormData();
    for (let key in object) {
      formData.append(key, object[key]);
    }
    return formData;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formObject = formDataToObject(formData);
    const { recipeObj, ingredientsObj } = transformData(formObject);
    const form = convertObjectToFormData(recipeObj);
    props.handleFormSubmit(recipeObj, ingredientsObj);
    console.log(recipeObj, ingredientsObj);
    // // console.log(form);
  };
  const inputRef = useRef(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handleDivClick = () => {
    inputRef.current.click();
  };
  return (
    <Form onSubmit={handleSubmit} name="form">
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
              name="cooking_time"
              // value={recipe.time}
            ></INPUT>
            <INPUT
              label="Calories"
              type="text"
              placeholder="Enter calories"
              name="calories"
            ></INPUT>
          </div>
        </div>
        <div onClick={handleDivClick}>
          <NewImage text="Image"></NewImage>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </div>
      </div>
      <div>
        <Divider orientation="left">Ingredients</Divider>
        {Array.from({ length: ingredients }, (_, index) => (
          <NewIngredients
            key={index}
            name={`name-${index}`}
            unit={`unit-${index}`}
            quantity={`quantity-${index}`}
            onClick={RemoveIngredient}
          />
        ))}
        <div className={styles["container-row"]}>
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
          name="directions"
        />
      </div>
      <Button type="submit" styles={true} value="Save"></Button>
      <Button value="Cancel"></Button>
    </Form>
  );
}

export default RecipeForm;
