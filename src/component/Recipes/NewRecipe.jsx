import { Modal } from "antd";
import { useState } from "react";
import styles from "./NewRecipe.module.css";
import createImg from "../../assets/create.png";

function NewRecipe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={styles["adding-cart"]}>
        <div className={styles.content}>
          <button className={styles["create-button"]} onClick={showModal}>
            <img
              src={createImg}
              alt="create"
              className={styles["create-img"]}
            ></img>
            <span>New Recipe</span>
          </button>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default NewRecipe;
