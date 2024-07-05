
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomRouter from './Components/CustomRouter';

function App() {
  return (
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
  );
}

export default App;
