import styles from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{props.categoryInfo}</div>
    </div>
  );
};

export default Category;
