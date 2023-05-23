'use client'

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <button onClick={() => reset()}>Try again</button>
        </main>
    );
}