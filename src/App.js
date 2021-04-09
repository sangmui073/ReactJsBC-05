import "./App.css";
import Header from "./Component/Header";
import Carousel from "./Component/Carousel";
import ProductList from "./Component/ProductList";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
