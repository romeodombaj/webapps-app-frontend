import styles from "./Category.module.css";

const Category = (props) => {
  const onClickHandler = (e) => {
    const value = e.currentTarget.getAttribute("value");
    props.onCategoryClick(value);
  };

  return (
    <div
      value={props.value}
      className={styles.wrapper}
      onClick={onClickHandler}
    >
      <div className={styles.title}>{props.categoryInfo}</div>
    </div>
  );
};

export default Category;
