import React, {useState} from "react"
import CountCounter from "./CountCounter.jsx";


export default function StepCounter() {
    const [step, setStep] = useState(1)

    return <>
        <h1>Days Count</h1>
        <div className={'counter-box'}>
            <input type={'range'} min={0} max={10} value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            <p>{step}</p>
        </div>
        <CountCounter step={step} setStep={setStep}/>
    </>
}

