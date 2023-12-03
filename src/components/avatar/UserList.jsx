import React from 'react'
import { Avatar } from '@mui/material';
import ListGroup from 'react-bootstrap/ListGroup';


function UserList({user, handleFunction}) {
  return (
    <>
      <ListGroup variant="flush" onClick={handleFunction} className="w-100">
       <ListGroup.Item style={{backgroundColor:'black', color:'white'}} className='d-flex align-items-center'>
          <Avatar
            src={user.pic ? user.pic : null}
          >
          </Avatar>
          <div className='ms-2'>
              <p className='m-0 p-0 fw-bolder'>{user.name}</p>
              <p style={{opacity:'0.9',fontSize:'14px'}} className='m-0 p-0'>{user.email}</p>
          </div>
       </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default UserList