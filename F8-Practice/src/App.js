import Button from "./components/Button/Button";
import './App.css';

function App() {
    return (
        <div style={{padding: 30}}>
            <Button/>
            <Button primary/>
            <Button danger/>
        </div>
    )
}

export default App;