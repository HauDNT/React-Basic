// D:\Workspace\React-Basic\Process
import logo from './logo.svg';
import './App.scss';
import MyComponent from "./Example/MyComponent";

/*
 * React có 2 loại component: class component và function component (có thể được định nghĩa bằng function hoặc arrow)
 * Component của React có sự đặc biệt là dùng cú pháp JSX (Một function của JS trả về khối HTML).
 */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Component tương tự như một thẻ HTML */}
        <MyComponent>

        </MyComponent>
      </header>
    </div>
  );
}

export default App;
