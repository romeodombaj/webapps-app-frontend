import "./App.css";
import NavBar from "./components/navigation/NavBar";
import RecipesGallery from "./components/recipes/RecipeGallery";

const App = () => {
  return (
    <div className="App">
      <h1>COOK 'n' RATE</h1>
      <RecipesGallery />
      <NavBar />
    </div>
  );
};

export default App;
