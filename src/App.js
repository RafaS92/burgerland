import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Feature />
      <Products heading="Choose your favorite" data={productData} />
      <Footer />
    </Router>
  );
}

export default App;
