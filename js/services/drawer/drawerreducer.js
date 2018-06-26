/*
Imported Libraries
*/
import * as drawerActionTypes from './draweractiontypes';

export type State = {
  drawerState: string,
  drawerDisabled: boolean,
  themeState: string,
}

/*
Constants
*/
const FILE_NAME = "drawerreducer.js : ";
const initialState = {
  drawerState: 'closed',
  drawerDisabled: false,
  themeState: 'platform',
  sceneKey: null,
};

// Reducer for Drawer
export default function drawerReducer(state:State = initialState, action:Action): State {

  console.log(FILE_NAME + "In drawerReducer method");

  // To open drawer
  if (action.type === drawerActionTypes.OPEN_DRAWER) {

    console.log("Opening drawer");

    return {
      ...state,
      drawerState: 'opened',
    };
  }

  // To close drawer
  if (action.type === drawerActionTypes.CLOSE_DRAWER) {

    console.log("Closing drawer");

    return {
      ...state,
      drawerState: 'closed',
    };

  }

  // To change platform
  if (action.type === drawerActionTypes.CHANGE_PLATFORM) {

    console.log("Changing platform");

    return {
      ...state,
      themeState: 'platform',
    };

  }

  // To change material
  if (action.type === drawerActionTypes.CHANGE_MATERIAL) {

    console.log("Changing Material");

    return {
      ...state,
      themeState: 'material',
    };

  }

  // To disable drawer
  if (action.type === drawerActionTypes.DISABLE_DRAWER) {

    console.log("Disabling Drawer");

    return {
      ...state,
      drawerDisabled: true,
    };

  }

  // To enable drawer
  if (action.type === drawerActionTypes.ENABLE_DRAWER) {

    console.log("Enabling drawer");

    return {
      ...state,
      drawerDisabled: false,
    };

  }

  // To navigate to scene
  if (action.type === drawerActionTypes.NAVIGATE_TO_SCENE) {

    console.log("SceneKey is - " + action.sceneKey);

    return {
      ...state,
      sceneKey: action.sceneKey,
    };

  }

  return state;

}
