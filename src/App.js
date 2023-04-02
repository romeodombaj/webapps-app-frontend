import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import RecipesGallery from "./components/recipes/RecipeGallery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <RecipesGallery></RecipesGallery>
        <NavBar />
      </Fragment>
    ),
  },
  {
    path: "/profile",
    element: (
      <Fragment>
        <Profile></Profile>
        <NavBar />
      </Fragment>
    ),
  },
  {
    path: "/categories",
    element: (
      <Fragment>
        <RecipesGallery></RecipesGallery>
        <NavBar />
      </Fragment>
    ),
  },
]);

const App = () => {
  return (
    <div className="App">
      <h1>COOK 'n' RATE</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
