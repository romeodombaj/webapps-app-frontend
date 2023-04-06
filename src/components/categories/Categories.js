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
  {
    id: 7,
    name: "perad",
  },
  {
    id: 8,
    name: "perad",
  },
  {
    id: 9,
    name: "perad",
  },
  {
    id: 10,
    name: "perad",
  },
];

const Categories = () => {
  return (
    <div className={styles[`grid-container`]}>
      {dummy_categories.map((category) => {
        return <Category key={category.id} categoryInfo={category} />;
      })}
    </div>
  );
};

export default Categories;
