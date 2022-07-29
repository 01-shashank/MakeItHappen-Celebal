import React from 'react'
import "./TodoHeader.css"
import Avatar from '@mui/material/Avatar';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function TodoHeader({workspaceName}) {
  const user=useSelector(selectUser);
  return (
    <div className="todoHeader">
        <div className="todoHeader__left">
            <h3><span className="todoHeader__dash">
            ~    
            </span>
            {workspaceName}
            </h3>
        </div>
        
        <div className="todoHeader__right">
            <FilterAltIcon sx={{ width: 40, height: 40 }}/>
            <CircleNotificationsIcon sx={{ width: 40, height: 40 }}/>
            {/* <div className="todo__profileInfo"> */}
            <Avatar onClick={()=>auth.signOut()} src= {user.photo} sx={{ width: 30, height: 30 }}/>
                <h3>{user.displayName} </h3>
                <p>#{user.uid.substring(0,5)}</p>
            {/* </div> */}
        </div>
        
        
    </div>
  )
}

export default TodoHeader