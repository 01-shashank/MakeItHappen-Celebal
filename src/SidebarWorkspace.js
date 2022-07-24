import React from 'react'
import { useDispatch} from "react-redux";
import { setWorkspaceInfo } from './features/appSlice';
import "./SidebarWorkspace.css"
function SidebarWorkspace({id,workspaceName}) {
  const dispatch=useDispatch();
  return (
    <div className="sidebarWorkspace" onClick={()=>dispatch(setWorkspaceInfo({
      workspaceId:id,
      workspaceName:workspaceName,
    }))}>
        <h4>
            <span className="sidebarWorkspace__dash">~</span>{workspaceName}
        </h4>
    </div>
  )
}

export default SidebarWorkspace