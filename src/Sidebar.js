import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarWorkspace from './SidebarWorkspace';
import db from './firebase';
function Sidebar() {
    const [workspace,setWorkspace]=useState([]);
    useEffect(()=>{
        db.collection('workspace').onSnapshot(snapshot=>(
            setWorkspace(snapshot.docs.map(doc=>({
                id:doc.id,
                workspace:doc.data(),
            })))
        )
        );
    },[]);

const handleAddWorkspace=()=>{
    const workspaceName=prompt("Add New Workspace Name:");

    if(workspaceName){
        db.collection('workspace').add({
            workspaceName: workspaceName,
        });
    }
};


  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h3>Co-Workers</h3>
            <ExpandMoreIcon/>
        </div>
        <div className="sidebar__workspace">
            <div className="sidebar__workspaceHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Workspace</h4>
                    
                </div>
                <AddIcon onClick={handleAddWorkspace} className="sidebar__addworkspace"/>
            </div>
            
        <div className="sidebar__workspaceList">
            {workspace.map(({id,workspace})=>(
                <SidebarWorkspace 
                key={id} 
                id={id} 
                workspaceName={workspace.workspaceName}/>
            ))}
        </div>
        </div>

    </div>
  )
}

export default Sidebar