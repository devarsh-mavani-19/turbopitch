import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { isLoading: true }, // type = error/success/info
  reducers: {
    startLoading (state) {
      state.isLoading = true
    },
    stopLoading (state) {
      state.isLoading = false
    },
  }
})

export const loadingAction = loadingSlice.actions
export default loadingSlice.reducer
