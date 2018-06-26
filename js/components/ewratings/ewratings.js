import { Image, View, TextInput,Animated,Linking } from 'react-native';

import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import Stars from 'react-native-stars-rating';

import { Button,Text } from 'native-base';

import React, { Component } from 'react';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import EwFloatingLabel from '../ewfloatinglabel/ewfloatinglabel';

import EwButton from '../ewbutton/ewbutton';

import EwH2Text from '../ewh2text/ewh2text';


import { DEFAULT_RATING ,MAX_RATING } from '../../ewscreens/dashboard/dashboardutils';
//import styles from './styles';
//var Rating = require('react-native-ratings');

const STARS_SIZE = 30 ;

const FILE_NAME = "EwRating.js : ";

export default class EwRating extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        rating : DEFAULT_RATING,
      };


      this.state = this.initialState;
  }

  /*
  Tasks to do before initial Rendering
  */
  componentWillMount() {

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

  /*
  Tasks to do before Re-rendering
  */
  componentWillUpdate(nextProps, nextState) {

    console.log(FILE_NAME + "In componentWillUpdate");

  }


  render() {

    var { rating, onRatingChanged, isRatingActive  } = this.props;

    return (

        <View>

          <Stars
            isActive = { isRatingActive }
            rateMax = { MAX_RATING }
            isHalfStarEnabled = { false }
            color = { appstyleguide.APP_BLUE }
            onStarPress = { onRatingChanged }
            rate = { rating }
            size = { STARS_SIZE }
          />


        {/*<View style = {{ flexDirection: "row", justifyContent : "space-between"  }}>

            <EwH2Text
              text = "Never"
            />
            <EwH2Text
              text = "Very Likely"
              customStyle = {{ marginLeft: 10 }}
            />
          </View>*/}

        </View>


    );

  }

  /*
  Tasks to do after initial Rendering
  */
  componentDidMount(){

    console.log(FILE_NAME + "In componentDidMount");
    /* Write Code to Load any element-data here */

  }

  /*
  Tasks to do after Re-rendering
  */
  componentDidUpdate(prevProps, prevState){

    console.log(FILE_NAME + "In componentDidUpdate");

  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount(){

    console.log(FILE_NAME + "In componentWillUnmount");

  }

}
