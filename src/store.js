import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { userReducer, errorReducer, languageReducer, footerReducer,easySudokuReducer } from './reducers';

export const rootReducer = combineReducers({
  userData: userReducer,
  language: languageReducer,
  error: errorReducer,
  footerVisibility:footerReducer,
  easyFields:easySudokuReducer,
});

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userData','language','footerVisibility','easyFields'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
