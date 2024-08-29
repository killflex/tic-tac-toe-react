import React from "react";
import { useState } from "react";

const ButtonTic = (props) => {
  const [value, setValue] = useState("");

  function valueX() {
    setValue("X");
  }

  return (
    <>
      <button
        className="bg-white text-black h-[35px] w-[35px] border border-black font-bold text-xl cursor-pointer"
        onClick={valueX}
      >
        {value}
      </button>
    </>
  );
};

export default ButtonTic;
