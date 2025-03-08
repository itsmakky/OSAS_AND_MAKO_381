import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const currentYear = date.getFullYear();
  let isLoggedIn = true;
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {isLoggedIn ? <p>Welcome back!</p> :<p>Please log in.</p>}
    </div>
  ); 
}

export default App;
