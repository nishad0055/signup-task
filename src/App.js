import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Routes/Routes';

function App() {
  return (
    <div>
     
     <RouterProvider router={router} >

     </RouterProvider>

    </div>
  );
}

export default App;
