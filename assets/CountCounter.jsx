import React from "react"

function CountCounter({ step, count, setCount }) {

    return <div className={'counter-box'}>
                <button onClick={()=>setCount(c=>c-step)} style={{backgroundColor: 'white', color: 'black'}}>-</button>
                <input type='text' value={count} onChange={(e)=>setCount(Number(e.target.value)+step)}/>
                <button onClick={()=>setCount(c => c + step)} style={{backgroundColor: 'white', color: 'black'}}>+</button>
            </div>
}

export default CountCounter
