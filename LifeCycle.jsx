import { useState, useEffect } from "react";

export const Lifecycle = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
       console.log("component mounted");

       return ()=>{
           console.log("component unmounted");
       }
    },[]);

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }
    
    useEffect(()=>{
       console.log("component updated")
    }, [count])
    
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>Count: {count}</p>
        </div>
    )
}