import styles from "./Categories.module.css";
import Category from "./Category";

const dummy_categories = [
  {
    id: 1,
    name: "piletina",
  },
  {
    id: 2,
    name: "svinjetina",
  },
  {
    id: 3,
    name: "puretina",
  },
  {
    id: 4,
    name: "junetina",
  },
  {
    id: 5,
    name: "zečetina",
  },
  {
    id: 6,
    name: "perad",
  },
];

const Categories = () => {
  return (
    <div>
      <div className={styles[`grid-container`]}>
        {dummy_categories.map((category) => {
          return <Category categoryInfo={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
