import styles from "./App.module.css";
import NavBar from "./components/navigation/NavBar";
import RecipesGallery from "./components/recipes/RecipeGallery";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./components/profile/Profile";
import NewRecipe from "./components/new recipe/NewRecipe";
import Categories from "./components/categories/Categories";
import SignUp from "./components/auth/SignUp";
import { Navigate } from "react-router-dom";
import UserContext from "./components/store/user-context";
import { useContext } from "react";

const App = () => {
  const userCtx = useContext(UserContext);

  return (
    <div className={styles.App}>
      <h1>COOK 'n' RATE</h1>

      <Routes>
        <Route path="/" element={<RecipesGallery />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/newrecipe" element={<NewRecipe />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>

      {userCtx.isLoggedIn && <NavBar />}
    </div>
  );
};

export default App;
