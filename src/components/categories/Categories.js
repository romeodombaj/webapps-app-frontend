import styles from "./Categories.module.css";
import Category from "./Category";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Categories = () => {
  const [categoryList, setCategoryList] = useState();

  const navigate = useNavigate();

  const routeToCategoryRecipes = () => {
    navigate("/");
  };

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
          return (
            <Category
              onCategoryClick={routeToCategoryRecipes}
              key={category}
              categoryInfo={category}
            />
          );
          //return <Category />;
        })}
    </div>
  );
};

export default Categories;
