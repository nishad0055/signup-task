import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Signup from "../Signup";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/signup' , element: <Signup></Signup>
            },
            {
                path: '/login' , element: <Login></Login>
            }
        ]
    }
])