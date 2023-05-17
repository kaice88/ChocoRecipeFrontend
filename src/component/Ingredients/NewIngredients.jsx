import styles from "./NewIngredients.module.css";
import Input from "../UI/Input";
function NewIngredients() {
  return (
    <div className={styles.input}>
      <Input
        label="Name"
        type="text"
        placeholder='Like "salt"'
        name="name"
      ></Input>
      <Input
        label="Quantity"
        type="text"
        placeholder='Like "1/2"'
        name="quantity"
      ></Input>
      <Input
        label="Unit"
        type="text"
        placeholder='Like "tbs"'
        name="unit"
      ></Input>
    </div>
  );
}

export default NewIngredients;
// style={{ borderColor: 'green', borderWidth: '2px' }}
