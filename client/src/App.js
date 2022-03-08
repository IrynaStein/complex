import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
     <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/otherpage">
            boom boom
          </Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </header>
        <Routes>
        <Route exact path="/" element={<Fib />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
