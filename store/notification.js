import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { show: false, message: '', type: '' }, // type = error/success/info
  reducers: {
    showNotification (state, payload) {
      state.show = true
      state.message = payload.payload.message
      state.type = payload.payload.type
    },
    hideNotification (state) {
      state.show = false
      state.message = ''
      state.type = ''
    },
  }
})

export const notificationAction = notificationSlice.actions
export default notificationSlice.reducer
