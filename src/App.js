
import './App.css';
//import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';
import React ,{useState} from 'react'

import TextForm from './components/TextForm';

function App() {
  const[mode,setmode] = useState('light');
  const togglemode = () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= 'black';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    
    <>
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
     <div className="container " my-3="true" >
     <TextForm heading="Enter Text To Process" mode={mode}/>
     {/*<AboutUs/>*/}
     
     </div>

    </> 
  );
}

export default App;
 