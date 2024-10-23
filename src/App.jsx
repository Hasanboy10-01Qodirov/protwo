import { useState } from "react";
import "./styles/App.css";
import Layout from "./components/layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Layout />
    </div>
  );
}

export default App;
