// store.js

import { configureStore } from '@reduxjs/toolkit';
import categorSlice from './reducer';

const store = configureStore({
  reducer: {
    categorArr: categorSlice,
    
  },
});

export default store;
