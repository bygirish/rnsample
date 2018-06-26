
import { combineReducers } from 'redux';

import drawerReducer from './drawer/drawerreducer';
//import routes from './routes';
//import cardNavigation from './cardNavigation';
import productReducer from './product/productreducer';

export default combineReducers({

  //cardNavigation,
  //routes,
  product: productReducer,
  drawer:drawerReducer 
});
