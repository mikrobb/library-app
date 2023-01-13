import "./App.css";

import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Homepage from "./componentsJs/Homepage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
