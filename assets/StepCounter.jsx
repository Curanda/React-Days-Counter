import React, {useState} from "react"
import CountCounter from "./CountCounter.jsx";


export default function StepCounter() {
    const [step, setStep] = useState(1)

    return (
        <>
            <h1>Days Count</h1>
            <div className={'counter-box'}>
                <button onClick={()=>setStep(s=>s-1)} style={{backgroundColor: 'white', color: 'black'}}>-</button>
                <p>Step : {step}</p>
                <button onClick={()=>setStep(s=>s+1)} style={{backgroundColor: 'white', color: 'black'}}>+</button>
            </div>
            <CountCounter step={step} />
        </>
    )
}

