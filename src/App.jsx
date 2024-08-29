import React from "react";
import { useState } from "react";
import ButtonTic from "./components/ButtonTic";

function App() {
  return (
    <>
      <div className="flex flex-wrap w-[105px] h-[105px]">
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
        <ButtonTic />
      </div>
    </>
  );
}

export default App;
