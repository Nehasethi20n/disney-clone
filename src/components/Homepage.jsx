import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenresList from "./GenresList";
import Header from "./Header";

const Homepage = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenresList />
    </div>
  );
};

export default Homepage;
