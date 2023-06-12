import { useState, useEffect } from "react";
import { useSubmit, json } from "react-router-dom";
import styles from "./IconButton.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ModalRecipe from "../Modal/ModalRecipe";
import { async } from "q";

function IconButton(props) {
  const [recipe, setRecipe] = useState(null);
  const [recipe2, setRecipe2] = useState(null);
  const [show, setShow] = useState(false);
  const isDelete = props.isDelete;
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
  const editHandler = async () => {
    const response = await fetch("http://127.0.0.1:8000/recipes/" + props.id);
    if (response.status === 401) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Could not authenticate user" }, { status: 500 });
    }
    const data = await response.json();
    return data;
  };

  const handleClick = async () => {
    if (isDelete) {
      console.log("Delete clicked");
      deleteHandler();
    } else {
      // mở modal edit
      console.log(props.id);
      const data = await editHandler();
      setRecipe(data);
    }
  };
  useEffect(() => {
    if (recipe) {
      showModal(recipe);
    }
  }, [recipe]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (recipe) => {
    setRecipe2(recipe);

    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const handleFormSubmit = () => {};
  return (
    <>
      <div className={styles["but-container"]}>
        <div className={styles.iconButton} onClick={handleClick}>
          <span className={styles["icon-border"]}>
            <i className={iconClass}></i>
          </span>
        </div>
      </div>
      {recipe2 && (
        <ModalRecipe
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          heading={props.heading}
          recipe2={recipe2}
          edit={true}
        ></ModalRecipe>
      )}
    </>
  );
}

export default IconButton;
