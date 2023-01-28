import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Navigate, useLocation, useSelector} from 'react-router-dom';
import auth from '../../../firebase.init';
/**
   const [user] = useAuthState(auth);
    const location = useLocation();
    if(! user){
        return <Navigate to="/login" state={{from: location }} replace></Navigate>
    }
    return children ;
 */
const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace></Navigate>
    }
    return children;
 }
export default RequireAuth;