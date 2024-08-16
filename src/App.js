import "../src/assets/css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Alphabet from "./pages/Alphabet";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/japanse" element={<Home />} />
          <Route path="/alphabet" element={<Alphabet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
