import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Tasks.css"
function Tasks({timestamp,user,task}) {
  return (
    <div className="tasks">
        <Avatar src={user.photo} fontSize="large" />
        <div className="tasks__info">
            <h4>{user.displayName}
                <span className='tasks__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            <p>{task}</p>
        </div>
    </div>
  )
}
export default Tasks