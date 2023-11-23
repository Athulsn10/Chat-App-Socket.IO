import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer'

function Auth() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
       <div>
            <div className="rounded mt-5 mb-5" style={{ backgroundColor: 'transparent', width:'400px' }}>
              <div className='mt-4 d-flex align-items-center justify-content-center ' style={{ backgroundColor: 'transparent' }}>
                <button 
                style={{border:'none',backgroundColor: value === 0 ? '#3c46ff' : 'transparent',color:'white'}}
                className='btn w-100 me-1 ms-4'
                variant={value === 0 ? 'contained' : 'outlined'} 
                onClick={() => handleChange(0)}
                >
                Login
                </button>
                <button 
                className='btn btn-primary w-100 ms-1 me-4'
                style={{border:'none',backgroundColor: value === 1 ? '#3c46ff' : 'transparent',color:'white'}}
                variant={value === 1 ? 'contained' : 'outlined'} 
                onClick={() => handleChange(1)}
                >
                Signup
                </button>
              </div>
              <div className='mx-3'>
                  <div  hidden={value !== 0}>
                    {value === 0 && <Login />}
                  </div>
                  <div hidden={value !== 1}>
                    {value === 1 && <Signup />}
                  </div>
              </div>
            </div>
            <Footer/>
       </div>
      </div>
      
      
    </>
  );
}

export default Auth;
