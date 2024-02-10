'use client'

//Code Evolution - yt channel

import { useState, useEffect } from "react";
import Props from "./prop";

export default () => {
  //To re-render objects we cant use use normal variables like
  //let count = 0;
  // let inc = () => 
  // {
  //   count++;
  // }
  //Therefore we use useStates which returns a array of size = 2 which has [0] = init value, [1] = function
  let [count, setCount] = useState(0);
  let [temp, setTemp] = useState(0);
  let [str, setStr] = useState("");
  //[1] of useState is used as a re-renderer and only renders after the function that called it has executed

  //useEffect is used to track when a component is being rendered
  useEffect(() => {
    if (temp > count)
      setStr("Count Decreased!");
    else if(temp < count)
      setStr("Count Increased!");
    setTemp(count);
  }, [count])
  //The array passed with the callback function is called a dependency array

  return (
    //if we use multiple useStates in a function only one of them will be executed and rendered
    //# if we use inc & dec operators the above mentioned line is not viable and the setStates will be executed but only rendered once {also works when we send a callback function to setState} #/
    <main className="flex ">
      <button onClick={() => {
        //Only the last setCount is executed & rendered
        // setCount(count+2);
        // setCount(count+1);

        //All of them are executed and only rendered once
        setCount((c) => c + 1);
        setCount((c) => c + 1);

      }}
        className="bg-blue-500 py-4 px-6 rounded-[50px] mr-10 hover:bg-blue-400 border border-black"
      >
        Increment
      </button>
      <p className="flex font-bold items-center text-xl">
        {count}
      </p>
      {/* useStates can be passed as a prop and will also be rendered [all children will be rendered if the parent is rendered] */}
      <Props count={count} />
      <button onClick={() => {
        setCount(count - 1);
      }}
        className="bg-blue-500 py-4 px-6 rounded-[50px] ml-10 hover:bg-blue-400 border border-black"
      >
        Decrement
      </button>
      <div className="flex items-center ml-3">
        {str}
      </div>
    </main>
  );
}