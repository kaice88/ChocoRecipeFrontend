import { Select, Space } from "antd";
import styles from "./Select.module.css";

const SelectSort = (props) => {
  const handleChange = (value) => {
    props.onSelect(value);
  };
  return (
    <div className={styles["container"]}>
      <Space wrap>
        <span className={styles["sort-label"]}>Sort by</span>
        <Select
          className={styles["select-container"]}
          defaultValue="rating"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "rating",
              label: "Rating",
            },
            {
              value: "like",
              label: "Like",
            },
            {
              value: "calories",
              label: "Calories",
            },
            {
              value: "quick",
              label: "Quick",
            },
          ]}
        />
      </Space>
    </div>
  );
};
export default SelectSort;
