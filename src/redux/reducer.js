
import { createSlice } from '@reduxjs/toolkit';

const categorSlice = createSlice({
  name: 'categorARR',
  initialState: [ 
    { id: 1, title: 'Category 1' },
    { id: 2, title: 'Category 2'}],
  reducers: {
    setCategorArr: (state, action) => {
        debugger
        return action.payload;
      },
  },
});

export const { setCategorArr } = categorSlice.actions;
export default categorSlice.reducer;
