import React , { useState ,useEffect} from 'react';
import './App.css';
import Loader from './components/Loader'
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';


const App = () => {
   
  let name = 'Smriti Naik'
  let details = {name};

  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
    setLoading(false);
  };

  useEffect(() => {
    wait(2000);
  });

  if(loading)return <Loader />

    return (
      <>
      <Navbar />  
      </>
    );
}

export default App;
