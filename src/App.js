import styles from "./App.module.css";
import NavBar from "./components/navigation/NavBar";
import RecipesGallery from "./components/recipes/RecipeGallery";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import NewRecipe from "./components/new recipe/NewRecipe";
import Categories from "./components/categories/Categories";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>COOK 'n' RATE</h1>

      <Routes>
        <Route path="/" element={<RecipesGallery />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/newrecipe" element={<NewRecipe />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>

      <NavBar />
    </div>
  );
};

export default App;
