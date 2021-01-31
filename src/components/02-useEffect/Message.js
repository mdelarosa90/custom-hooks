import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x: 0, y: 0});

    const {x, y} = coors;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoors(coords);       
        } 
        window.addEventListener('mousemove', mouseMove);
        return () => {
           console.log('Componente desmontado');
           window.removeEventListener('mousemove', mouseMove);
        }
    }, []);
    return (
        <div>
            <h1>Eres Genial</h1>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
