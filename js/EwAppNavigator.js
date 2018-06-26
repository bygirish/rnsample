/*
-------------------------------------------------------------------------------
FILE_NAME: EwAppNavigator.js
Objective: For navigation
Tech Used: React-Native 0.45 & Redux

Author:
- Girish Kumar Gupta
- Simerdeep Singh
- Anshu Goyal

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
*/

/*
Predefined libraries
*/
import React, { Component } from 'react';
import { BackAndroid,Linking, BackHandler, StatusBar, Platform, View, NetInfo,Alert } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, variables, Drawer, Text, Container } from 'native-base';
//import { actions } from 'react-native-navigation-redux-helpers';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

import getTheme from '../native-base-theme/components';


import { closeDrawer, openDrawer, disableDrawer, enableDrawer } from './services/drawer/draweractions';

import statusBarColor from './themes/variables';

import EwDashBoardDrawer from './ewscreens/dashboard/ewdashboarddrawer';

import MainScreen from './ewscreens/dashboard/MainScreen';
import CartScreen from './ewscreens/dashboard/CartScreen';

/*
Constants
*/
const FILE_NAME = "EwAppNavigator.js : ";

var sceneConfig = {
     cardStyle: {
           backgroundColor: '#FFFFFF',
     }
};

var context;

class EwAppNavigator extends Component {


  /*
   To initialize state variables
  */
  constructor(props, context) {

    super(props, context);

    console.log(FILE_NAME + "In constructor");

    this.initialState = {

    };

    this.state = this.initialState;
  }

  /*
  Tasks to do before initial Rendering
  */
  componentWillMount(props) {

    console.log(FILE_NAME + "In componentWillMount");

    //this.props.updateImageTimestamp(null);

  }

  componentWillReceiveProps(nextProps) {


    console.log(FILE_NAME + "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps,this.props);

  }

  shouldComponentUpdate(nextProps, nextStat) {

    console.log(FILE_NAME + "In shouldComponentUpdate");
    console.log("New Props are - ", nextProps);
    console.log("New State is - ", nextStat);

    return true;

  }

  componentWillUpdate(nextProps, nextState) {

    console.log(FILE_NAME + "In componentWillUpdate");

  }


  render() {

    console.log(FILE_NAME + "In render method ");
    /*
    if(this.props.isReduxStateRecovered){
    */

    return (
      <StyleProvider style = { getTheme(undefined) }>

        <Container>

          <Router>
              <Scene key = "root" { ...sceneConfig } >

                <Scene key = "mainscreen"  title = "Main Scren" hideNavBar navigationBarStyle = { { backgroundColor:'white' } }  component = { MainScreen }  direction = "vertical" />
                <Scene key = "cartscreen"  title = "Cart Scren" hideNavBar navigationBarStyle = { { backgroundColor:'white' } }  component = { CartScreen }  direction = "vertical" />
                <Scene key = "ewdashboarddrawer" initial type = { ActionConst.REPLACE } title = "Dashboard" hideNavBar navigationBarStyle = { { backgroundColor:'white' } }  component = { EwDashBoardDrawer }  direction = "vertical" />


              </Scene>


          </Router>

          </Container>

      </StyleProvider>
    );
    /*

    }
    else{
        return <EwLoadingIndicator /> ;
    }
    */
  }


  componentDidMount() {


    console.log(FILE_NAME + "In componentDidMount method");


  }

  componentDidUpdate(prevProps, prevState) {

    console.log(FILE_NAME + "In componentDidUpdate");

  }

  componentDidUpdate(prevProps, prevState) {

    console.log(FILE_NAME + "In componentDidUpdate");

  }

  componentWillUnmount() {

    console.log(FILE_NAME + "In componentWillUnmount method");


  }

}

function mapStateToProps(state){

  console.log(FILE_NAME + "In mapStateToProps method ");

  console.log("Current State is - ", state);

  return {

  drawerState: state.drawer.drawerState,
  drawerDisabled: state.drawer.drawerDisabled,
  sceneKey: state.drawer.sceneKey,
  themeState: state.drawer.themeState,
  };

}
function bindAction(dispatch) {

  console.log(FILE_NAME + "In bindAction method");

  return {
    
    addToTruck: (params) => dispatch(addToTruck(params)),
    
  };
}

export default connect(mapStateToProps, bindAction)(EwAppNavigator);
