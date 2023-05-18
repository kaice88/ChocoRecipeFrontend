import { Modal } from "antd";
import { useActionData } from "react-router-dom";
import RecipeForm from "../Form/RecipeForm";
function ModalRecipe(props) {
  return (
    <Modal
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={null}
      width={800}
      destroyOnClose={true}
    >
      <RecipeForm
        handleFormSubmit={props.handleFormSubmit}
        heading="Edit recipe"
      ></RecipeForm>
    </Modal>
  );
}

export default ModalRecipe;
