import React from 'react'

function Footer() {
  return (
    <>
    <div  style={{color:'white',backgroundColor:'rgb(0 0 46)'}}>
      <footer className='mt-5'>
        <p className='text-center fs-5 m-0 p-0 fw-bolder' style={{color:'white'}}>Chatify</p>
      <div className='d-flex align-items-center justify-content-center mt-1 mb-0'>
      <i className="fa-brands mx-1 fa-github fs-5" ></i>|
      <i className="fa-brands mx-1 fa-instagram fs-5" ></i>
      
      </div>
      <div className='mt-2'>
          <p className='text-center m-0 p-0' style={{fontSize:'12px'}}>Chatify uses socket.io to deliver you the best use experience possible</p>
          <p className='text-center' style={{fontSize:'10px'}}>© copyright athul 2023</p>
      </div>
      </footer>
    </div>
    </>
  )
}

export default Footer