import React from "react";
import { useState } from "react";
import ButtonTic from "./components/ButtonTic";

function App() {
  const [value, setValue] = useState(Array(9).fill());

  const valueX = (i) => {
    const nextSquares = value.slice();
    nextSquares[i] = "X";

    setValue(nextSquares);
  };

  return (
    <>
      <div className="flex flex-wrap w-[105px] h-[105px]">
        <ButtonTic btnText={value[0]} btnEvent={() => valueX(0)} />
        <ButtonTic btnText={value[1]} btnEvent={() => valueX(1)} />
        <ButtonTic btnText={value[2]} btnEvent={() => valueX(2)} />
        <ButtonTic btnText={value[3]} btnEvent={() => valueX(3)} />
        <ButtonTic btnText={value[4]} btnEvent={() => valueX(4)} />
        <ButtonTic btnText={value[5]} btnEvent={() => valueX(5)} />
        <ButtonTic btnText={value[6]} btnEvent={() => valueX(6)} />
        <ButtonTic btnText={value[7]} btnEvent={() => valueX(7)} />
        <ButtonTic btnText={value[8]} btnEvent={() => valueX(8)} />
      </div>
    </>
  );
}

export default App;
