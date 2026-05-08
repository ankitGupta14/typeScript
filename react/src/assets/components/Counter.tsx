import { useState } from "react";

export function Counter(){
    const [Count, setCount] = useState(0)

    return(
        <div>
            <p>Cards cups order: {Count}</p>
            <button onClick={() => setCount((c) => c+1)}>Order one more </button>
        </div>
    )
}