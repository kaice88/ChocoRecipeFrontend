import { useState } from "react";
import { useSubmit } from "react-router-dom";
import { Modal } from "antd";
import styles from "./IconButton.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function IconButton(props) {
  const [isDelete, setIsDelete] = useState(props.isDelete);
  const submit = useSubmit();
  let formData = new FormData();
  formData.append("recipeId", props.id);

  let iconClass = "fa-solid fa-pen";
  if (isDelete) {
    iconClass = "fa-solid fa-trash";
  }
  const deleteHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(formData, { method: "delete" });
    }
  };

  const handleClick = () => {
    if (isDelete) {
      // mở modal delete
      console.log("Delete clicked");
      deleteHandler();
    } else {
      // mở modal edit
      console.log("Edit clicked");
      showModal();
    }
  };
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
      <div className={styles["but-container"]}>
        <div className={styles.iconButton} onClick={handleClick}>
          <span className={styles["icon-border"]}>
            <i className={iconClass}></i>
          </span>
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

export default IconButton;
