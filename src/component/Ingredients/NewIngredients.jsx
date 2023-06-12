import styles from "./NewIngredients.module.css";
import Input from "../UI/Input";
import { Form } from "react-router-dom";
function NewIngredients(props) {
  return (
    <div className={styles.input}>
      <Input
        label="Name"
        type="text"
        placeholder='Like "salt"'
        name={props.name}
        value={props.valueName}
        onChange={props.onChange}
      ></Input>
      <Input
        label="Quantity"
        type="text"
        placeholder='Like "1/2"'
        name={props.quantity}
        value={props.valueQuantity}
        onChange={props.onChange}
      ></Input>
      <Input
        label="Unit"
        type="text"
        placeholder='Like "tbs"'
        name={props.unit}
        value={props.valueUnit}
        onChange={props.onChange}
      ></Input>
      <span className={styles.i} onClick={props.onClick}>
        <i class="fa-regular fa-circle-xmark"></i>
      </span>
    </div>
  );
}

export default NewIngredients;
// style={{ borderColor: 'green', borderWidth: '2px' }}
