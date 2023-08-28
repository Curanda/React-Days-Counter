import React, { useState } from "react"
import DisplayTime from "./DisplayTime.jsx";

function CountCounter({ step }) {
    const [count, setCount] = useState(0)

    return (
    <>
        <div className={'counter-box'}>
            <button onClick={()=>setCount(c=>c-step)} style={{backgroundColor: 'white', color: 'black'}}>-</button>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(c=>c+step)} style={{backgroundColor: 'white', color: 'black'}}>+</button>
        </div>
        <DisplayTime  count={count} />
    </>
    )
}

export default CountCounter
