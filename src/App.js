import { Route } from "react-router-dom";

// A component import
import Navbar from "./components/Navbar";
import Restaurant from "./components/Restaurant";

// adding css to jsx is that easy
import "./App.css"; // This pattern is preferred where css for this component has a matching .css filename

// Defining our <App /> component the function name matches the file name
function App() {
  // All functional components need to return jsx with one parent element
  return (
    <div className="App">
      {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar />
      <Route path="/restaurant/:name" component={Restaurant} />
    </div>
  );
}

// Makes our Component available for import
export default App;