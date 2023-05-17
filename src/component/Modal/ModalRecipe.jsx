import { Modal } from "antd";
import { useActionData } from "react-router-dom";
import RecipeForm from "../Form/RecipeForm";
function ModalRecipe(props) {
  return (
    <Modal
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={800}
    >
      <RecipeForm heading="Create a new recipe"></RecipeForm>
    </Modal>
  );
}

export default ModalRecipe;
