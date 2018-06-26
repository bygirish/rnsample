/*
Importing required files
*/
import * as drawerActionTypes from './draweractiontypes';

// Constants
const FILE_NAME = "draweractions.js : ";

export function openDrawer():Action {

  console.log(FILE_NAME + "In openDrawer method");

  return {
    type: drawerActionTypes.OPEN_DRAWER,
  };
}

export function closeDrawer():Action {

  console.log(FILE_NAME + "In closeDrawer method");

  return {
    type: drawerActionTypes.CLOSE_DRAWER,
  };
}

export function changeMaterial():Action {

  console.log(FILE_NAME + "In changeMaterial method");

  return {
    type: drawerActionTypes.CHANGE_MATERIAL,
  };
}

export function changePlatform():Action {

  console.log(FILE_NAME + "In changePlatform method");

  return {
    type: drawerActionTypes.CHANGE_PLATFORM,
  };
}

export function disableDrawer():Action {

  console.log(FILE_NAME + "In disableDrawer method");

  return {
    type: drawerActionTypes.DISABLE_DRAWER,
  };
}

export function enableDrawer():Action {

  console.log(FILE_NAME + "In enableDrawer method");

  return {
    type: drawerActionTypes.ENABLE_DRAWER,
  };
}

export function navigateTo(sceneKeyNavigation):Action {

  console.log(FILE_NAME + "In navigateTo method");

  return {
    type: drawerActionTypes.NAVIGATE_TO_SCENE,
    sceneKey: sceneKeyNavigation,
  };

}
