import React from "react"

function Reset({ setStep, setCount }) {
    return <button onClick={(e)=>{setStep(1); setCount(0)}} style={{backgroundColor: "white", color: 'black'}}>Reset</button>
}

export default Reset
