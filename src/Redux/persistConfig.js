
import localForage from 'localforage';

const persistConfig = {
  key: 'root',                        // the key to use for storing the data
  storage: localForage,              // choose your storage library (IT CAN ALSO BE LOCAL STORAGE)
};

export default persistConfig;