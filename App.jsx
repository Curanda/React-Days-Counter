import React, { useState } from 'react'
import './App.css'
import StepCounter from "./assets/StepCounter.jsx";
import CountCounter from "./assets/CountCounter.jsx";
import DisplayTime from "./assets/DisplayTime.jsx";
import Reset from "./assets/Reset.jsx";
function App() {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Days Count</h1>
            <StepCounter step={step} setStep={setStep} />
            <CountCounter step={step} setCount={setCount} count={count} />
            <DisplayTime  count={count} setCount={setCount} />
            {count !== 0 ? (<Reset setStep={setStep} setCount={setCount} />) : null}
        </>
    )
}

export default App
