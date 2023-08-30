import React from "react"

function Reset({ setStep, setCount }) {
    function handleReset(setCount, setStep) {
        // window.location.reload();
        setStep(1)
        setCount(0)
    }
    return (
    <>
        <button onClick={(e)=>handleReset(setCount, setStep)} style={{backgroundColor: "white", color: 'black'}}>Reset</button>
    </>
    )
}

export default Reset
