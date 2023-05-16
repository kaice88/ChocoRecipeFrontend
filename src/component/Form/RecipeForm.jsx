import { Form } from "react-router-dom";
import Input from "../UI/Input";
import NewImage from "../NewItem/NewItem";
import styles from "./RecipeForm.module.css";
function RecipeForm(props) {
  return (
    <Form>
      <div>
        <h3>{props.heading}</h3>
      </div>
      <div className={styles["container"]}>
        <div className={styles.input}>
          <Input
            label="Title"
            type="text"
            placeholder='Enter a title, like "Smothered Chicken"'
            name="title"
          ></Input>
          <div className={styles["time-calories-container"]}>
            <Input
              label="Time (mins)"
              type="text"
              placeholder="Enter time cooking"
              name="time"
            ></Input>
            <Input
              label="Calories"
              type="text"
              placeholder="Enter calcories"
              name="calories"
            ></Input>
          </div>
        </div>
        <NewImage text="Image"></NewImage>
      </div>
    </Form>
  );
}

export default RecipeForm;
