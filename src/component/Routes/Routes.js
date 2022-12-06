import { createBrowserRouter } from "react-router-dom";
import AttendaceTable from "../AttendanceTable/AttendaceTable";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Signup from "../Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/signup' , element: <Signup></Signup>
            },
            {
                path: '/login' , element: <Login></Login>
            },
            {
                path: '/attendance-info', element:  <PrivateRoutes><AttendaceTable></AttendaceTable></PrivateRoutes> ,
                loader: async () => fetch('https://ultimate-server.vercel.app/attendace-info')
            }
        ]
    }
])