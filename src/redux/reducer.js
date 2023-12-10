
import { createSlice } from '@reduxjs/toolkit';

const categorSlice = createSlice({
  name: 'categorARR',
  initialState: [],
  reducers: {
    setCategorArr: (state, action) => {        
        return action.payload;
      },
  },
});

export const { setCategorArr } = categorSlice.actions;
export default categorSlice.reducer;
