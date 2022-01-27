import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Portfolio } from "./containers";
import { Sidebar } from "./components";

function App() {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
