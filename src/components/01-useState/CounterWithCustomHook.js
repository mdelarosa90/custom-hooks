import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter();


    return (
       <>
        <h1>Counter with Hook: {state}</h1>
        <hr />
        <button className="btn btn-secondary" onClick={()=> increment(2)}>+1</button>
        <button className="btn btn-dark" onClick={reset}>Reset</button>
        <button className="btn btn-secondary" onClick={()=>decrement(2)}>-1</button>
       </>
    )
}
