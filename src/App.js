import "../src/assets/css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alphabet from "./pages/Alphabet";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1 className="text-center text-3xl font-bold text-red-600">
          Ôn thi tiếng nhật N4
        </h1>
        <Routes>
          <Route path="/alphabet" element={<Alphabet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
