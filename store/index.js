import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import notificationReducer from './notification'
import loadingReducer from './loading'


const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
    loading: loadingReducer
  }
})

export default store
