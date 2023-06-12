import { Form, json } from "react-router-dom";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { Input } from "antd";
import INPUT from "../UI/Input";
import NewImage from "../NewItem/NewItem";
import styles from "./RecipeForm.module.css";
import NewIngredients from "../Ingredients/NewIngredients";
import { useState, useRef, useEffect } from "react";
import Button from "../UI/Button";
const qs = require("qs");
const { TextArea } = Input;
function RecipeForm(props) {
  const [recipe, setRecipe] = useState(props.recipe2);
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [cooking_time, setCookingTime] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [ingredients, setIngredients] = useState(2);
  useEffect(() => {
    if (recipe) {
      if (recipe.title) {
        setTitle(recipe.title);
        setCalories(recipe.calories);
        setCookingTime(recipe.cooking_time);
        setDirections(recipe.directions);
        setIngredient((prevState) => [...prevState, recipe.ingredients]);
        setImage(recipe.image);
        setIngredients(recipe.ingredients.length);
      }
    }
  }, [recipe]);

  const [selectedImage, setSelectedImage] = useState(null);
  const user = useSelector((state) => state.user);
  // const recipe = props.recipe;
  // console.log(recipe);

  const AddNewIngredient = () => {
    console.log(ingredient.length);
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
    // const recipeObj = {
    //   user_id: transformedObject.user_id,
    //   title: transformedObject.title,
    //   calories: transformedObject.calories,
    //   cooking_time: transformedObject.cooking_time,
    //   directions: transformedObject.directions,
    //   image: transformedObject.image,
    // };
    // const ingredientsObj = transformedObject["ingredients"];
    return transformedObject;
  };

  // const convertObjectToFormData = (object) => {
  //   const formData = new FormData();
  //   for (let key in object) {
  //     formData.append(key, object[key]);
  //   }
  //   return formData;
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formObject = formDataToObject(formData);
    const recipeObj = transformData(formObject);
    // const form = convertObjectToFormData(recipeObj);
    props.handleFormSubmit(recipeObj);
    console.log(recipeObj);
    // // console.log(form);
  };
  const inputRef = useRef(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImage(`/images/recipe/${file.name}`);
    console.log(image);
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></INPUT>
          <div className={styles["time-calories-container"]}>
            <INPUT
              label="Time (mins)"
              type="text"
              placeholder="Enter time cooking"
              name="cooking_time"
              // value={recipe.time}
              value={cooking_time}
              onChange={(e) => setCookingTime(e.target.value)}
            ></INPUT>
            <INPUT
              label="Calories"
              type="text"
              placeholder="Enter calories"
              name="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            ></INPUT>
          </div>
        </div>
        <div onClick={handleDivClick}>
          {image === null ? (
            <NewImage text="Image"></NewImage>
          ) : (
            <div
              style={{
                width: "220px",
                height: "220px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={`http://127.0.0.1:8000${image}`}
                alt="SquareImage"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              />
            </div>
          )}
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
        <div
          style={{
            maxHeight: "400px",
            overflow: "auto",
            borderBottom: "2px solid #3a9691",
            marginBottom: "20px",
          }}
        >
          {Array.from({ length: ingredients }, (_, index) => (
            <NewIngredients
              key={index}
              name={`name-${index}`}
              unit={`unit-${index}`}
              quantity={`quantity-${index}`}
              onClick={RemoveIngredient}
              // valueName={ingredient[index]["name"]}
              // valueQuantity={ingredient[index]["quantity"]}
              // valueUnit={ingredient[index]["unit"]}
              // onChange={(e) =>
              //   setIngredient({
              //     name: e.valueName,
              //     unit: e.valueQuantity,
              //     quantity: e.valueUnit,
              //   })
              // }
            />
          ))}
        </div>

        <div
          className={styles["container-row"]}
          style={{
            marginBottom: "20px",
          }}
        >
          <div className={styles["add-row"]} onClick={AddNewIngredient}>
            + Add ingredient
          </div>
        </div>
      </div>
      <div>
        <Divider orientation="left">Directions</Divider>
        <TextArea
          showCount
          maxLength={1000}
          style={{
            height: 120,
            marginBottom: 24,
          }}
          placeholder="can resize"
          name="directions"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
        />
      </div>
      <Button type="submit" styles={true} value="Save"></Button>
      <Button value="Cancel" onClick={props.onCancel}></Button>
    </Form>
  );
}

export default RecipeForm;
