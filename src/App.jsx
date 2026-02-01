import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BrowserRoutter from "./BrowserRouter/BrowserRoutter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRoutter />
    </>
  );
}

export default App;
