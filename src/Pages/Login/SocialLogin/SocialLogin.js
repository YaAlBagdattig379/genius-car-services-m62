import React from 'react';
import googleLogo from '../../../images/SocialLogin/GoogleLogo.png';
import facebookLogo from '../../../images/SocialLogin/facebook.png';
import gitHubLogo from '../../../images/SocialLogin/gitHub.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
               <div className='w-50 bg-secondary'style={{height:'1px'}}>
               </div>
               <p className='mx-2 mt-2'>or</p>
               <div className='w-50 bg-secondary'style={{height:'1px'}}>
               </div>
            </div>
            <div className=''>
              <button className='btn bg-info w-50 d-block mx-auto my-2'>  
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