import "./App.css";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import GenresList from "./components/GenresList";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div className="bg-slate-900">
   {/* <Header/>
   <Slider/>
   <ProductionHouse/>
   <GenresList/> */}
   <SignIn/>
    </div>
   
  );
}

export default App;
