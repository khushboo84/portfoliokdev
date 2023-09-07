import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingIcon from "./components/LoadingIcon";

function App() {
  return (
    <div>
      <LoadingIcon />
    </div>
    // <Router>
    //   {/* <Header />  */}
    //   <LoadingIcon />
    //   <Routes>
    //     <Route path="/" exact element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={Project} />
    //     <Route path="/contact" element={Contact} />
    //   </Routes>
    // </Router>
  );
}

export default App;

{
  /* <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Project} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>; */
}
