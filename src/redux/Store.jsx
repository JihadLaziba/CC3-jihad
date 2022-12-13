import { configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice';
import PostSlice from './PostSlice';
import { combineReducers } from '@reduxjs/toolkit';



const reducer = combineReducers({
    user: UserSlice,
    post:PostSlice
})

  const store =configureStore({
    reducer,
})
export default store