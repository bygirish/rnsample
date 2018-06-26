/*
-------------------------------------------------------------------------------
FILE_NAME: drawersidebarview.js
Objective: Implementing and Designing drawersidebarview
Tech Used: React-Native 0.47 & Redux

Author:
- Girish Kumar Gupta
- Simerdeep Singh

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
/*
Predefined libraries
*/

import React, { Component } from 'react';
import { PropTypes } from "react";
import { StyleSheet, Image, Platform } from "react-native";

import { Content, Text, Thumbnail, List, ListItem, Icon,Body,  Container, Left, Right, Badge, Button, View, StyleProvider, getTheme, variables } from 'native-base';
import { Actions } from 'react-native-router-flux';

/*
Redux Actions
*/
import { connect } from 'react-redux';

/*
Styles
*/
import styles from './styles/drawersidebarviewstyle';

/*
components
*/


import EwH1Text from '../../components/ewh1text/ewh1text';

import EwH2Text from '../../components/ewh2text/ewh2text';

import EwListView from '../../components/ewlistview/ewlistview';

import EwH3Text from '../../components/ewh3text/ewh3text';




import  * as appstyleguide from '../../../appstyleguide/appstyleguide';

import * as drawerUtils from './dashboardutils';

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
});
*/


/*
Constants
*/
const FILE_NAME = "drawersidebarview.js : ";

const SCREEN_NAME = "Drawer Sidebar Screen";


//const drawerCover = require('../../../img/drawer-cover.png');
const drawerImage = require('../../../img/ewlogo.png');

const homeIcon = require('../../../img/elementicons/home.png');
const truckIcon = require('../../../img/elementicons/truck.png');
const userIcon = require('../../../img/elementicons/user.png');


const sidebarItems = [

  {
    name: 'Home',
    id: drawerUtils.MY_HOLIDAYS_ID,
    icon: homeIcon, //'home',
    bg: '#477EEA',
  },

  {
    name: 'My Profile',
    id: drawerUtils.MY_CALENDAR_ID,
    icon: userIcon, //'home',
    bg: '#477EEA',
  },

  {
    name: 'My Products',
    id: drawerUtils.EMPLOYEE_DIRECTORY_ID,
    icon: truckIcon, //'home',
    bg: '#477EEA',
  },

];

/*
For showing Drawer
*/
export class DrawerSiderBarView extends Component {

  static propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
  };

  static contextTypes = {
    drawer: React.PropTypes.object,
  };

  /*
   To initialize state variables
  */
  constructor(props, context) {

    super(props, context);

    this.initialState = {
      activeToggleItem: null,
    };

    this.state = this.initialState;

    console.log(FILE_NAME + "In constructor");

    drawer = context.drawer;
  }




  render() {

    console.log(FILE_NAME + "In render method of drawersidebarview");
    
    return (

        <Container style = { styles.containerStyle }>

          <Content
            bounces = { false }
            style = { styles.contentStyle }
            >
            <EwListView
              listData = { sidebarItems }
              extraData = { this.state.activeToggleItem }
              listKey = { (data,index) => index }
              renderListItem = { (data) => this.renderListView(data) }
            />

          </Content>

        </Container>
    );
  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    trackComponentVisibleTimings(this.state.componentInitializeTime ,SCREEN_CATEGORY , SCREEN_NAME);

    console.log(FILE_NAME + "In componentWillUnmount");

  }


  renderListView({item}) {

    console.log("item receive is ", item);

    return (

      <View>

        { this.renderListItemView(item) }

        {
        //   this.renderSubItems(item)
          }
           

      </View>
    );

  }

  renderListItemView(data) {

    console.log("item receive is ", data);

    return(

      <ListItem button noBorder onPress = { () => this.onPressListItem(data) }>

          <Left>

            <Image style = {{ }} source = { data.icon } />

            <EwH2Text
              text = { data.name }
              customStyle = { styles.text }
            />

          </Left>

      </ListItem>

    );

  }



  onPressListItem = (data) => {
    console.log(FILE_NAME + "In onPressListItem method");
      drawer.close();
      this.setState({
        activeToggleItem: null
      });
  }

}

function mapStateToProps(state) {

  console.log(FILE_NAME + "In mapStateToProps method");
  console.log("State Updated state is -");
  console.log(state);

  return {
//    currentImageTimestamp: state.common.currentImageTimestamp,
  };
}

export default connect(mapStateToProps)(DrawerSiderBarView);
