import './Register.css' ;
import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword ,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateToLogin = ()=>{
        navigate('./login') ;
    }
    useEffect(()=>{
       if(user){
         navigate('/home')
        }
    })
    

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
        // console.log(name,email,password)
    }
    return (
        <div className='form-register'>
            <h3 className='text-center'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"required placeholder='Your Name' id="" />
                <input type="email"name="email" required placeholder='Email Address' id="" />
                <input type="Password"name="password" required placeholder='Password' id="" />
                <input type="checkbox" name="terms" id=""required />
                 <label htmlFor="accepts terms">Accept terms and conditions of Genius Car</label>
                <input className='w-50 mx-auto d-block btn btn-primary mt-2' type="submit"value={'Register'}></input>
            </form>
            <p>Already have an account? <Link to={'/login'} onClick={navigateToLogin}  className='text-primary pe-auto text-decoration-none '>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;