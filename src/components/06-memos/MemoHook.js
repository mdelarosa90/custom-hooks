import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {state: counter, increment} = useCounter(5000);
    const [show, setShow] = useState(false)
    
    const iteraciones = useMemo(() => {
        return procesoPesado(counter);
    }, [counter])
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: {counter}</h3>
            <hr/>
                {/* <p>{procesoPesado(counter)}</p> */}
                <p>{iteraciones}</p>
            <button className="btn btn-outline-secondary" onClick={increment}>
                +1
            </button>
            <button className="btn btn-outline-warning ml-2" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
