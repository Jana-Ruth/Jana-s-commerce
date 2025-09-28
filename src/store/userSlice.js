import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user : null,
    token : "",
    onlineUser : [],
    socketConnection : null
  },
  reducers: {
    setUserDetails : (state, action)=>{
        state.user = action.payload    
    },  
    
    setToken : (state,action)=>{
      state.token = action.payload
  },

    logout : (state, action)=>{
      state._id = ""
      state.fullName = ""
      state.email = ""
      state.profilePic= ""
      state.token = ""
      state.onlineUser = []
      state.socketConnection = null 
  },
    setOnlineUser : (state, action)=>{
      state.onlineUser = action.payload  
  },
  setSocketConnection : (state, action)=>{
    state.socketConnection = action.payload  
},

  }
})

// Action creators are generated for each case reducer function
export const { setUserDetails,logout, setToken, setOnlineUser, setSocketConnection } = userSlice.actions

export default userSlice.reducer