import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import "./Todo.css"
import TodoHeader from './TodoHeader'
import AttachmentIcon from '@mui/icons-material/Attachment';
import Tasks from './Tasks';
import { selectWorkspaceId, selectWorkspaceName } from './features/appSlice';
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';
import db from './firebase';



function Todo() {

const user=useSelector(selectUser);
const workspaceId=useSelector(selectWorkspaceId);
const workspaceName=useSelector(selectWorkspaceName);
const [tasks,setTasks]=useState([]);
const [input,setInput]=useState(""); 

useEffect(()=>{
  if(workspaceId){
    db.collection("workspace")
    .doc(workspaceId)
    .collection("tasks")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot)=>
      setTasks(snapshot.docs.map((doc)=>doc.data()))
      );
  }
},[workspaceId]);

const setTask=e=>{
  e.preventDefault();
  db.collection('workspace').doc(workspaceId).collection('tasks').add({
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    task:input,
    user:user,
  });
  setInput("");
};

  return (
    <div className="todo">
        <TodoHeader workspaceName={workspaceName}/>
        <div className="todo__tasks">
          <div className="scroll-div">
          {tasks.map((task)=>(
            <Tasks
            timestamp={task.timestamp}
            task={task.task}
            user={task.user}
            
            />
          ))}
            </div>
        </div>

        <div className="todo__input">
        <AttachmentIcon/>
        <form>
            <input value={input} 
            disabled={!workspaceId} 
            onChange={e=>setInput(e.target.value)} 
            placeholder={"Add your Todo!"}/>
            
            <button disabled={!workspaceId} 
             className="todo__inputButton" 
             type="submit" 
             onClick={setTask}>Add Task!</button>
        </form>
        

        </div>
    </div>
  )
}

export default Todo