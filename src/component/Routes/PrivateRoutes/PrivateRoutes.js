import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loaction = useLocation()
    if(loading) {
        return <div className='flex justify-center ' >
             <div class="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }

    if(user) {
        return children
    }
    return <Navigate to = '/login' state={{from:loaction}} replace ></Navigate>
};

export default PrivateRoutes;