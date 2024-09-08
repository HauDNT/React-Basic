import { memo } from "react";

function Content({onIncrease}) {
    console.log('Re-render');
    

    return (
        <>
            <h2>Hellow</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(Content);