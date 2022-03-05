import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={Fib}></Route>
      <Route exact path="/otherpage" element={OtherPage}></Route>
    </Routes>
    <div className="App">
     
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <Link className="App-link" to="/">Home</Link>
       <Link className="App-link" to="otherpage">Other Page</Link>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>
   </BrowserRouter>
      
  );
}

export default App;
