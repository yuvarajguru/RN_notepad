import { configureStore , getDefaultMiddleware} from '@reduxjs/toolkit'
// import user from './slice/user'
import userSlice from './slice/user'

export const store = configureStore({
    reducer:{
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

// export const store = configureStore({
//     reducer: {
//         user
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   })