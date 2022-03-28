import logo from './logo.svg';
import './App.css';

// all properties we pass in ReactDOM will b available in 1st arrg of func
function App(props) {
  return <div>Hello from Dua MG {props.name}</div>
}

export default App;
