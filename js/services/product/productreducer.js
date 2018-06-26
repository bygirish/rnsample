/*
Imported Libraries
*/
import React from 'react';
import { REHYDRATE } from '../../utils';

const FILE_NAME = "productreducer.js : ";
const initialState = {
    productsInTruck: [],
};

// Reducer for authentication
export default function productReducer(state = initialState, action){

  console.log(FILE_NAME + "In method productReducer");
  console.log(action.type);
  console.log(state);

  switch (action.type) {

    // Successful login
    case 'ADD_PRODUCT_IN_TRUCK':

      console.log("In method productReducer ADD_PRODUCT_IN_TRUCKN");

      var updatedProductsInTruck = state.productsInTruck;
      updatedProductsInTruck.push(action.response.product);
      
      return {
        ...state,
        productsInTruck: updatedProductsInTruck,

      };
      break;

    default:

      console.log(FILE_NAME + ": In method AuthReducer NOTHING");

      return {
        ...state,
      };

  }

}
