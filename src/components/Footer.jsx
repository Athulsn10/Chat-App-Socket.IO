import React from 'react'

function Footer() {
  return (
    <>
    <div style={{backgroundColor:'black'}}>
      <footer className='mt-4'>
        <p className='text-center fs-2 m-0 p-0 fw-bolder text-light'>Chatify</p>
      <div className='d-flex m-0 p-0 align-items-center justify-content-center'>
        <h5 className='fw-bolder mx-3 text-danger'>Home</h5>
        <h5 className='fw-bolder mx-3 text-danger'>Home</h5>
        <h5 className='fw-bolder mx-3 text-danger'>Home</h5>
        <h5 className='fw-bolder mx-3 text-danger'>Home</h5>
      </div>
      <div className='d-flex align-items-center justify-content-center my-3'>
      <i className="fa-brands mx-3 fa-github fs-3" style={{color:'white'}}></i>
      <i className="fa-brands mx-3 fa-x-twitter fs-3" style={{color:'white'}}></i>
      <i className="fa-brands mx-3 fa-instagram fs-3" style={{color:'white'}}></i>
      <i className="fa-brands mx-3 fa-react fs-3" style={{color:'white'}}></i>
      <i className="fa-solid mx-3 fa-comments fs-3" style={{color:'white'}}></i>
      </div>
      <div className='mt-2'>
          <p className='text-center text-light'>Chatify uses socket.io to deliver you the best use experience possible</p>
          <p className='text-center text-light'>© copyright @athul 2023</p>
      </div>
      </footer>
    </div>
    </>
  )
}

export default Footer