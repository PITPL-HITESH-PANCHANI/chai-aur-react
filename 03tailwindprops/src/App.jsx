import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400 rounded-xl text-black p-4 mb-3">Tailwind Test</h1>
      <Card userName="Hitesh" btnText="click me"/>
      <Card userName="Panchani" btnText="visit me"/>
      <Card userName="Panchani"/>
    </>
  );
}

export default App;
