import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact'

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
      <Home title= {"Home Page"} description = {"Welcome to our website."}/>
      <About title = {"About Us"} description = {"We are passionate about delivering quality experiences"}/>
      <Contact title = {"Contact Us"} description = {"Feel free to reach out to us via email or phone."}/>
    </div>
  ); 
}

export default App;
