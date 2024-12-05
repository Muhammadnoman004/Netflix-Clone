import "./App.css";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import Slider from "./Component/Slider";
import TrendingContainer from "./Component/TrendingContainer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrendingContainer />
      <Slider />
      <Cards />
    </>
  );
}

export default App;
