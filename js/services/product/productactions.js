/*
Importing required files
*/
import axios from 'axios';


// Constants
const FILE_NAME = "productactions.js : ";

// For performing login
export function addToTruck(param): Action {

  console.log(FILE_NAME + "In addToTruck method- ");
  console.log("params - ", param);
  
  return ({
    type: 'ADD_PRODUCT_IN_TRUCK',
    response: param,
  });

}
