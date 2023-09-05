import styles from "./Categories.module.css";
import Category from "./Category";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Categories = () => {
  const [categoryList, setCategoryList] = useState();

  const navigate = useNavigate();

  const routeToCategoryRecipes = (category) => {
    navigate("/", { state: { catString: `category-list/${category}` } });
  };

  useEffect(() => {
    fetch("https://webapps-app-backend-7q54.vercel.app/recipes/category-list")
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
              value={category}
              categoryInfo={category}
            />
          );
          //return <Category />;
        })}
    </div>
  );
};

export default Categories;
