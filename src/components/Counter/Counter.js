import React, { useState } from 'react';
import './style.css';


function Counter({incrementBy, startingValue}){    
    const [count, updateCount] = useState(0);

    const plusCounter = function(){
        updateCount(count + (incrementBy || 1));
    }

    return (
        <div>
            <button onClick={plusCounter}>+{incrementBy || 1}</button>
            <p>{count}</p>
        </div>
    )
}



export default Counter;
