
import React, { Component } from 'react';
import { View, Image, RefreshControl, Alert ,Linking, NetInfo,TouchableOpacity, PermissionsAndroid, Platform,Modal, Animated  } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Spinner, Badge, Header, Thumbnail, Title, Footer, Content, Fab, Button, List,Icon, ListItem, Text, Left, Right, Body, Item, Input, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';


import { addToTruck } from '../../services/product/productactions';


const homeIcon = require('../../../img/elementicons/home.png');
const locationIcon = require('../../../img/elementicons/location.png');
const truckIcon = require('../../../img/elementicons/truck.png');
const userIcon = require('../../../img/elementicons/user.png');


//const settingIcon = require('../../../img/elementicons/setting.png');
//const issueIcon = require('../../../img/elementicons/reportIssueIcon.png');

imagesArray = ['../../../img/elementicons/home.png', 
        '../../../img/elementicons/location.png',
         '../../../img/elementicons/truck.png'];

/*
components
*/

import {  EwH1Text,EwH2Text,EwH2LightText,EwIcon,EwImageSlider,
          EwH3Text,EwH4Text, EwScreenTitle, EwLoadingIndicator, EwModal, EwFloatingLabel,
          EwReportIssue, EwButton, EwBottomNavigation, EwRatings
         } from '../../utils/ewcomponents';


/*
Styles
*/
import styles from './styles/ewdashboardstyle';
import * as appstyleguide from '../../../appstyleguide/appstyleguide';
const FILE_NAME = "mainscreen.js : ";

var  currentProduct = {
    title: 'Disposable Meal Tray Black with Lid | 3 compartment OT02',
    price: '9.16 per piece',
    
  };
export class MainScreen extends Component {

  static propTypes = {
  };


  
  
  /*
   To initialize state variables
  */
  constructor(props, context) {

    super(props, context);

    console.log(FILE_NAME + "In constructor");


    this.initialState = {
      
      currentProduct: currentProduct,
      
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

      /* If success */
      if(nextProps.pendingNeedToActData != null && nextProps.pendingNeedToActError == null ){
        this.setState({
          isLoading: false,
          refreshing: false,
          pendingNeedToActData: nextProps.pendingNeedToActData,
          attendanceData: nextProps.pendingNeedToActData.attendance,
        });


      }
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





  renderScreen() {

    console.log(FILE_NAME + "In renderScreen method");

   var specifications = [
     {value1: '5.00', value2: '3'},
     {value1: '6.00', value2: '4'},
     {value1: '7.00', value2: '6'},
     {value1: '8.00', value2: '6'},
     {value1: '9.00', value2: '7'},
   ];

    return (

      <Container >
          <Header>
            <Left>
              <Button transparent onPress = { () => this.onPressMenu() }>
                <Icon ios = "ios-menu" android = "md-menu" />
              </Button>

            </Left>
            <Image style = {{ marginTop:8}} source = { homeIcon} />
            
            <Body style = {{ flex: 3,marginRight: 30 }}>

              <EwScreenTitle
                text = ""
              />

            </Body>
            <Right>
              <Image style = {{ margin:5}} source = { locationIcon} />
              <Button onPress = { () => {Actions.cartscreen()} }>
                <Image style = {{ margin:5}} source = { truckIcon} />
              </Button>
              
              <Image style = {{margin:5 }} source = { userIcon} />
              
              
  
            </Right>
          </Header>

          <Content >
          
          <View style = {{ backgroundColor: appstyleguide.APP_LIGHT_GRAY, }}>
             <EwImageSlider

               initialState = { imagesArray }
               isAddButtonVisible = {false}
               isDeleteButtonVisible = {false}
               updateParentState = { (componentState) => this.updateMileageExpenseState(expenseConstant.IMAGE_SLIDER_ID,componentState) }
               sliderHeight = { 300 }
               imageWidth = { 200 }
             />
         </View>
          
          <EwH1Text
            text = {this.state.currentProduct.title}
            customStyle = {{ fontWeight: "bold", margin:10 }}
          />
          
          <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', marginLeft:10}}>
                  <EwH3Text
                    text = {this.state.currentProduct.price}
                    customStyle = {{ fontWeight: "bold" }}
                  />
{/*
                  <EwH4Text
                    text = "per piece"
                    customStyle = {{ }}
                  />
                  */
                }
              </View>
          
          
          <EwRatings onRatingChanged={()=>{}} isRatingActive = 'true' />

          </View>
          
          <EwH1Text
            text = "Redeem Discount"
            customStyle = {{ marginLeft:10, marginTop:20  }}
          />
          <EwH4Text
            text = "Now the more you buy more you save"
            customStyle = {{ marginLeft:10  }}
          />


          <List style = { {marginLeft:10, marginTop: 20} }>
            { 
              
              
              
              specifications.map((data, key) =>
                 <ListItem key = { key } style = { {} }>

                    <EwH2Text
                      text = { specifications[key].value1 }
                      customStyle = {{ flex: 1, alignSelf: 'flex-start' }}
                    />

                    <EwH2Text
                      text = { specifications[key].value2 }
                      customStyle = {{ flex: 1, alignSelf: 'flex-start', marginLeft: 10 }}
                    />

                </ListItem>
            )}
          </List>

          <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>

             <Button style = {{ marginRight: 10, }} onPress = {() => this.onAddToTruckButtonPress() }>
                 <Text>Add to Truck</Text>
             </Button>
             <Button  style = {{ marginLeft: 10, }}  onPress = {() => {} }>

                 <Text>Get Quatation</Text>
             </Button>

          </View>

          <Text>
          {this.props.productsInTruck}
          </Text>

          </Content>


      </Container>
    );
  }
  
  
  onPressMenu() {

    console.log(FILE_NAME + "onPressMenu Method");

    this.props.openDrawer();
  }

  onAddToTruckButtonPress = ()=>{
    
    var param = {
      product: currentProduct,
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
  //currentproduct: state.product.currentproduct,
    productsInTruck: state.product.productsInTruck,
});


export default connect(mapStateToProps, bindAction)(MainScreen);
