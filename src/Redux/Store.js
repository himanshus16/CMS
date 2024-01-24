import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stuUserReducer from './StuSlice';
import AdminSlice from './AdminSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  stuUser: stuUserReducer,
  AdminUser: AdminSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
});


export const persistor= persistStore(store)


















// import { persistStore, persistReducer } from 'redux-persist';
// import Localforage from 'localforage';

// const persistedReducer = persistReducer(persistConfig, stuUserReducer);


// const store = createStore(persistedReducer);
// const persistor = persistStore(store);

// export {store, persistor};