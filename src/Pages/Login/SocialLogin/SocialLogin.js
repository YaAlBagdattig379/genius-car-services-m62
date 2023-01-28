import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
               <div className='w-50 bg-secondary'style={{height:'1px'}}>
               </div>
               <p className='mx-3 mt-2'>or</p>
               <div className='w-50 bg-secondary'style={{height:'1px'}}>
               </div>
            </div>
            <button>Google Sign in</button>
        </div>
    );
};

export default SocialLogin;