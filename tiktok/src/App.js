import { useState } from "react";
import Content from "./Content";

function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {
                show && <Content/>
            }
        </>
    );
}

export default App;
