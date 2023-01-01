import React,{useState} from "react";

 function Counter(){
  const [count, setCount] = useState(0)
  const increase = () =>setCount(count + 1)
  const increaseAsync = () =>setTimeout(() => {
    setCount(count + 1)
  }, 2000);
  return (
    <>
      <h1>Counter:{count}</h1>
      <button class="btn btn-primary m-1" onClick={increase}>
        Increase
      </button>
      <button class="btn btn-primary m-1" onClick={increaseAsync}>
        Increase Async
      </button>
    </>
  );
}
export default Counter;
