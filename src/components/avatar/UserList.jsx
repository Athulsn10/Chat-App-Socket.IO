import React from 'react'
import { Avatar } from '@mui/material';


function UserList({user, handleFunction}) {
  return (
    <>
      <div style={{backgroundColor:'white'}} onClick={handleFunction} className="mb-3 rounded p-2 d-flex align-items-center">
        <Avatar
          
          src={user.pic ? user.pic : null}
        >
        </Avatar>
        <div className='ms-2'>
            <p className='m-0 p-0 fw-bolder'>{user.name}</p>
            <p style={{opacity:'0.9',fontSize:'14px'}} className='m-0 p-0'>{user.email}</p>
        </div>
      </div>
    </>
  );
}

export default UserList