//creates a global Redux store so all components in the app can access the state managed by the venueReducer() on venueSlice.js.
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
  },
});
