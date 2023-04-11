import styles from "./Categories.module.css";
import Category from "./Category";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/recipes/category-list")
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  return (
    <div className={styles[`grid-container`]}>
      {categoryList &&
        categoryList.map((category) => {
          return <Category key={category} categoryInfo={category} />;
          //return <Category />;
        })}
    </div>
  );
};

export default Categories;
