import logo from "./logo.svg";
import "./App.scss";
import Nav from "./Nav/Nav";
import MyComponent from './Example/MyComponent';
import ListTodo from "./Todos/ListTodo";
import Home from "./Example/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import React Router Dom
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/todos">
              <ListTodo/>
            </Route>
            <Route path="/about">
              <MyComponent/>
            </Route>
            <Route path="/user" exact>
              <ListUser/>
            </Route>
            <Route path="/user/:id">
              <DetailUser/>
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
