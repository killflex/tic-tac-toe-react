import React from "react";

const ButtonTic = (props) => {
  return (
    <>
      <button
        className="bg-white text-black h-[35px] w-[35px] border border-black font-bold text-xl cursor-pointer"
        onClick={props.btnEvent}
      >
        {props.btnText}
      </button>
    </>
  );
};

export default ButtonTic;
