import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page-404";
import Header from "./components/Header";
import Post from "./components/Posts";
import Categorias from "./pages/Categorias";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/categoria/:id/*" element={<Categorias />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
export default App;
