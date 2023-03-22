import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Model';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
export default store;