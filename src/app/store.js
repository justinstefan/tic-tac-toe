import { configureStore } from '@reduxjs/toolkit';

//reducers
import gameReducer from './gameSlice';

// middlewares
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: [logger]
});
