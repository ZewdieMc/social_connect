import { useState } from 'react';
export default function Counter() {

    // const buttonStyle = {
    //     borderRadius: "4px",
    //     border:"none",
    //     margin:"10px",
    //     padding:"10px"
    // }
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <div className='counter'>
            <p className="count">{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>)
}