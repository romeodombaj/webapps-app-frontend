import styles from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onCategoryClick}>
      <div className={styles.title}>{props.categoryInfo}</div>
    </div>
  );
};

export default Category;
