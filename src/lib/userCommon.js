import { createSlice } from '@reduxjs/toolkit';

const userCommon = createSlice({
  name: 'userCommon',
  initialState: {
    nowPage: null,
  },
  reducers: {
    setPageValue(state, action) {
      state.nowPage = action.payload.nowPage;
    },
  },
})

export const { setPageValue } = userCommon.actions;
export default userCommon.reducer;