import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import ExploreFoodList from "./components/ExploreFoodList";
import FoodMenuList from "./components/FoodMenuList";

function App() {
  return (
    <>
      <Navbar />
      <Input />
      <ExploreFoodList />
      <FoodMenuList/>
    </>
  );
}

export default App;
