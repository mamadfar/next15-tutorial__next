'use client'

import {useEffect} from "react";

const Error = ({error}: {error: Error}) => {

    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">{error.message}</div>
        </div>
    );
};

export default Error;
