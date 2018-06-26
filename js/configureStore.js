
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
//import reducer from './reducers';
import reducer from './services';
//import promise from './promise';
import ReduxThunk from 'redux-thunk';

export default function configureStore(onCompletion: () => void):any {
  // const enhancer = compose(
  //   applyMiddleware(thunk, promise),
  //   devTools({
  //     name: 'Employwise', realtime: true,
  //   }),
  // );

  const store = createStore(reducer, undefined, compose(applyMiddleware(ReduxThunk), autoRehydrate()));

//  persistStore(store, { storage: AsyncStorage });


//  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  // persistStore(store, { storage: AsyncStorage }, onCompletion);


  return store;
}
