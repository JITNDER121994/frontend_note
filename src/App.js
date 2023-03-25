import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeRoute } from "./Routes/HomeRoute";
import Register from "./Routes/Register";
import Signin from "./Routes/signin";
import './app.css'

function App() {
  return (
    <div className="app" id="app">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addnotes" element={<HomeRoute />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
