import React, { useState } from "react"
import DisplayTime from "./DisplayTime.jsx";

function CountCounter({ step, setStep }) {
    const [count, setCount] = useState(0)

    return (
    <>
        <div className={'counter-box'}>
            <button onClick={()=>setCount(c=>c-step)} style={{backgroundColor: 'white', color: 'black'}}>-</button>
            <input onChange={(e)=>setCount(Number(e.target.value)+step)}/>
            <button onClick={()=>setCount(c => c + step)} style={{backgroundColor: 'white', color: 'black'}}>+</button>
        </div>
        <DisplayTime setCount={setCount} setStep={setStep} count={count} />
    </>
    )
}

export default CountCounter
