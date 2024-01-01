import React from "react";

// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
// );
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <Navbar />
    <App />
    <Footer />
  </>
);
