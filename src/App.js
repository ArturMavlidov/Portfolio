import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About, Contact, Home, Portfolio } from "./containers";
import { Sidebar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
