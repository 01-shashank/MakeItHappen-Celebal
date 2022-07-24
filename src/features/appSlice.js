import { createSlice } from '@reduxjs/toolkit';
  
  export const appSlice = createSlice({
    name: 'app',
    initialState:{
        workspaceId:null,
        workspaceName:null,
    },
    reducers: {
      setWorkspaceInfo: (state,action) => {
        state.workspaceId = action.payload.workspaceId;
        state.workspaceName =action.payload.workspaceName;
      },
    },
});

  export const { setWorkspaceInfo } = appSlice.actions;
  
 
  export const selectWorkspaceId = (state) => state.app.workspaceId;
  export const selectWorkspaceName= (state) => state.app.workspaceName;

  export default appSlice.reducer;
   