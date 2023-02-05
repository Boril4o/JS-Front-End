import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    React.useEffect(() => {
        console.log('Count changed to: ' + count);  
    }, [count]);
    
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button/>);