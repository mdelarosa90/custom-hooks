import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

export const Memorize = () => {
    const {state: counter, increment} = useCounter(10);
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>
            <button className="btn btn-outline-secondary" onClick={increment}>
                +1
            </button>
            <button className="btn btn-outline-warning ml-2" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
