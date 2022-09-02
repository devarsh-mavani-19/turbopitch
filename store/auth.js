import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoading: true, isAuth: false, email: '', fullname: '', token: '', credits: 0 },
  reducers: {
    stopLoading (state) {
      state.isLoading = false
    },
    login (state, payload) {
      state.isAuth = true
      state.email = payload.payload.email
      state.fullname = payload.payload.fullname
      state.token = payload.payload.token
      state.credits = payload.payload.credits
      state.isLoading = false
    },
    logout (state) {
      state.isAuth = false
      state.isLoading = false
    },
    updateCredits (state, payload) {
      state.credits = payload.payload.credits
    }
  }
})

export const authAction = authSlice.actions
export default authSlice.reducer
