import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import './App.css';


function App() {
    const context = useContext(ThemeContext);

    return (
        <>
            <button onClick={context.toggleTheme} style={{padding: 10}}>Toggle theme</button>
            <Content/>
        </>
    )
}

export default App;