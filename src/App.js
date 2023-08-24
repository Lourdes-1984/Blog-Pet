import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page-404";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
export default App;