
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomRouter from './Components/CustomRouter';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  // aos initialization
  useEffect(() => {
    Aos.init(
      {
        offset: 0,
        duration: 500,
        easing: 'ease-in-sine',
        delay: 0,
        once:true,
      }
    )
    Aos.refresh();
  },[])

  return (
    <BrowserRouter>
      <CustomRouter/>
    </BrowserRouter>
  );
}

export default App;
