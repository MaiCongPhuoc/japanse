import "../src/assets/css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Alphabet from "./pages/Alphabet";
import Vocabulary from "./pages/Vocabulary";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/japanse" element={<Home />} />
          <Route path="/alphabet" element={<Alphabet />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
