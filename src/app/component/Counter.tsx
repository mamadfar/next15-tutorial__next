'use client';

import React from 'react';
import {useAuth, useUser} from "@clerk/nextjs";

const Counter = () => {

    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded, isSignedIn, user} = useUser()

    const [count, setCount] = React.useState(0);

    // if (!isLoaded || !userId) return null;
    if (!isLoaded || !isSignedIn) return null;

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default Counter;
