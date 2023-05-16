import { Modal } from "antd";
import RecipeForm from "../Form/RecipeForm";
function ModalRecipe(props) {
  return (
    <Modal
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={800}
    >
      <RecipeForm></RecipeForm>
    </Modal>
  );
}

export default ModalRecipe;
