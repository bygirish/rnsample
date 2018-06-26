
import React, { Component } from 'react';
import { View, Image, RefreshControl, Alert ,Linking, NetInfo,TouchableOpacity, PermissionsAndroid, Platform,Modal, Animated  } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Spinner, Badge, Header, Thumbnail, Title, Footer, Content, Fab, Button, List,Icon, ListItem, Text, Left, Right, Body, Item, Input, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { closeDrawer, openDrawer, disableDrawer, enableDrawer } from '../../services/drawer/draweractions';






/*
components
*/

import {  EwH1Text,EwH2Text,EwH2LightText,EwIcon,
          EwH3Text,EwH4Text, EwScreenTitle,EwLoadingIndicator, EwModal, EwFloatingLabel,
          EwReportIssue, EwButton, EwBottomNavigation
         } from '../../utils/ewcomponents';




/*
Styles
*/
import styles from './styles/ewdashboardstyle';
import * as appstyleguide from '../../../appstyleguide/appstyleguide';

const FILE_NAME = "cartscreen.js : ";


export class MainScreen extends Component {

  static propTypes = {
  }

  
  
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



  }

  /*
  Tasks to do on changing of props
  */
  componentWillReceiveProps(nextProps) {

    console.log(FILE_NAME + "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

  }

  /*
  Re-rendering is required or not
  */
  shouldComponentUpdate(nextProps, nextStat) {

    console.log(FILE_NAME + "In shouldComponentUpdate");
    console.log("New Props are - ", nextProps);
    console.log("New State is - ", nextStat);

    return true;
  }



  render() {

        return (this.renderScreen());

  }





  renderScreen = ()=> {

    console.log(FILE_NAME + "In renderScreen method");

    var products = this.props.productsInTruck ;

    return (

      <Container >
          <Header>
            <Left>
            <Button transparent onPress = { () => Actions.pop() }>
              <Icon name = "arrow-back" />
            </Button>
            </Left>
            <Body style = {{ flex: 3,marginRight: 30 }}>

              <EwScreenTitle
                text = "Truck Cart"
              />

            </Body>
            <Right>
  
            </Right>
          </Header>

          <Content >
          
        
          <List >
            { products.map((data, key) =>
                 <ListItem key = { key } style = { {} }>

                    <EwH2Text
                      text = { products[key].title }
                      customStyle = {{ flex: 1, alignSelf: 'flex-start' }}
                    />

                    <EwH2Text
                      text = { products[key].price }
                      customStyle = {{ flex: 1, alignSelf: 'flex-start', marginLeft: 10 }}
                    />

                </ListItem>
            )}
          </List>



          </Content>


      </Container>
    );
  }
  

  onAddToTruckButtonPress = ()=>{
    
    var param = {
      product: product,
    };
    
    this.props.addToTruck(param);
  }
  
}


function bindAction(dispatch) {

  console.log(FILE_NAME + "In bindAction method");

  return {
    
    addToTruck: (params) => dispatch(addToTruck(params)),
    
  };
}



const mapStateToProps = state => ({
  productsInTruck: state.product.productsInTruck,

});


export default connect(mapStateToProps, bindAction)(MainScreen);
