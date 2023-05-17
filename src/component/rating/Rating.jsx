import { useState } from "react";
import styles from "./Rating.module.css";
import { Rate } from "antd";

const Rating = (props) => {
  const HandlerValue = (value) => {
    props.HandlerValue(value);
  };
  return (
    <Rate
      className={styles.rate}
      disabled={props.disabled}
      allowHalf={true} // true: 1/2
      value={props.rate}
      onChange={HandlerValue}
    />
  );
};
export default Rating;
