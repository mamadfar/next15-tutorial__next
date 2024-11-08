'use client';

import React from 'react';

const Counter = () => {
    console.log('Counter');
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default Counter;
