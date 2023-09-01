import React from "react"

export default function StepCounter({ step, setStep }) {
    return (
        <div className={'counter-box'}>
            <input type={'range'} min={0} max={10} value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
            <p>{step}</p>
        </div>
    )
}
