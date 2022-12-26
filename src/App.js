
import Navbar from './components/Navbar.jsx';
import './components/style/Navbar.scss'
import './components/style/Home.scss'
import Home from './components/Home.jsx';
import { useState } from 'react';

function App() {

  const[theme,setTheme] = useState("light");
  const toggleMode = () => {
    // if(theme == 'light'){
    //   document.body.style.backgroundColor = 'none';
    //   setTheme("dark")
    // }
    // else{
    //   document.body.style.backgroundColor = 'black';
    //   setTheme("light");
    // }
  }

  return (
    <>
     <Navbar theme={theme} mode={toggleMode}/>
     <Home/>
    </>
  );
}

export default App;
