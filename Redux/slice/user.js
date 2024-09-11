// import { state } from '@angular/animations'
import { createSlice } from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    userLoading: null
}
// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })
  
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state, action) => {
            state.user = action.payload
        },
        setUserLoading:(state, action) => {
            state.userLoading = action.payload
        }
    }
})

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer