import { useState } from "react";
import * as React from "react";
import Navbar from "./assets/component/Navbar";
import Footer from "./assets/component/Footer";
import BoilerPlate from "./assets/component/BoilerPlate";
import Try from "./assets/component/Try";

function App() {
  const [count, setCount] = useState(0);

  const footerStyle = {
    padding: 0,
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <>
      <Navbar />
      <Try />
      <BoilerPlate />
      <div style={footerStyle}>
        <Footer />
      </div>
    </>
  );
}

export default App;
