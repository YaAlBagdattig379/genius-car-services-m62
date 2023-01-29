import React,{useEffect} from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/SocialLogin/GoogleLogo.png';
import facebookLogo from '../../../images/SocialLogin/facebook.png';
import gitHubLogo from '../../../images/SocialLogin/gitHub.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }
    useEffect(()=>{
      if (user) {
        return (
          navigate('/home')
        );
      }
    })
    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center'>
               <div className='w-50 bg-primary'style={{height:'1px'}}>
               </div>
               <p className='mx-2 mt-2'>or</p>
               <div className='w-50 bg-primary'style={{height:'1px'}}>
               </div>
            </div>
            <div className=''>
              <button onClick={()=>signInWithGoogle()}
              className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%'}} src={googleLogo} alt="" />
               <span className='px-3'>Google Sign In</span>
              </button>
              <button className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%'}} src={facebookLogo} alt="" />
               <span className='px-3'>Facebook Sign In</span>
              </button>
              <button className='btn bg-info w-50 d-block mx-auto my-2'>  
              <img style={{width:'14%',borderRadius:'15px'}} src={gitHubLogo} alt="" />
               <span className='px-3'>GitHub Sign In</span>
              </button>
            </div>
        </div>
    );
};

export default SocialLogin;