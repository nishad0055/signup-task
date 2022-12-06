import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     
     <RouterProvider router={router} >

     </RouterProvider>
    <Toaster/>
    </div>
  );
}

export default App;
