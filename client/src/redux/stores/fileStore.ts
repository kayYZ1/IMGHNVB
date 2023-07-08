import { configureStore } from '@reduxjs/toolkit';
import fileReducer from '../slices/fileSlice';

const fileStore = configureStore({
  reducer: {
    file: fileReducer,
  },
});

export default fileStore;
