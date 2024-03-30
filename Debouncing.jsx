import { useState, useEffect } from "react"

export const Debouncing = () => {
    const [text, setText] = useState("")
    const [output, setOutput] = useState("Type in input box")
    useEffect(()=>{
      
        timeout = setTimeout(()=>{
            if (!text == ""){
               setOutput(text);
            }
            else{
                setOutput("Type in input box")
            }
        }, 1000)
      
        return ()=>{
            console.log("clearing timeout...")
            clearTimeout(timeout)
        }
    }, [text])
    
    const handleInputChange = (event) => {
        setText(event.target.value)
    }


    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <p>{output}</p>
        </div>
    )
}