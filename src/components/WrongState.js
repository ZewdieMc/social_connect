import { useState } from "react";

export default function WrongState(){
    const [greeting, setGreeting] = useState({greet:"hello, world"});
    function updateGreeting(){
        greeting = {greet:"hello world, how are you?"}
        setGreeting(greeting)
    }

    function correctUpdate(){
        const newState = {...greeting}
        newState.greet = "hello, world-wide web";
        setGreeting(newState)
    }
    function dontDoThis(){
        greeting.greet = "hello, world-wide web";
        setGreeting(greeting)
    }
    function best(){
        setGreeting(prevState => ({...prevState, greet:"hello world-wide web"}))
    }
    return (
        <>
            <h2>{greeting.greet}</h2>
            <button onClick={updateGreeting} className='wrong'>Wrong way to update a state object</button>
            <button onClick={correctUpdate} className='correct'>Correct way to update a state object</button>
            <button onClick={dontDoThis} className='wrong'>Another wrong way to update a state object</button>
            <button onClick={best} className='best'>Best way to update a state object</button>
        </>
    )
}