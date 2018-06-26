

import { Image, View, ScrollView, TouchableHighlight, Animated, Easing, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import {  EwH1Text,EwH2Text,EwH2LightText,EwIcon,
          EwH3Text, EwButton
         } from '../../utils/ewcomponents';

export default class EwTabView extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        maxOpacity: 0.12,
        scaleValue: new Animated.Value(0.01),
        opacityValue: new Animated.Value(0.12),

      };


      this.state = this.initialState;
  }

  componentWillMount() {

    console.log("Inside componentWillMount");

  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");

  }

  render() {

    console.log("Inside render");

    const { onTabClick, tabData, ...props } = this.props;

    let { key } = tabData;

    return (

      <View style = {{ marginLeft: 15, alignSelf: "center" }}>

    
       
     
        <TouchableWithoutFeedback
          underlayColor = { appstyleguide.APP_WHITE } onPress = { () => onTabClick(key) }
          onPressIn = { () => this.onPressedIn() }
          onPressOut = { () => this.onPressedOut() }
          
        >
          <View style = {[ styles.buttonStyle] }> 
        
        
            {<EwH3Text
              text = { tabData.label }
              customStyle = { styles.textStyle }

            /> }

            {/*<EwButton
              label = { tabData.label }
              onButonClicked = { () => onTabClick(key) }
              textStyle = { styles.buttonTextStyle }
              customStyle = { styles.buttonStyle }
              rounded
            />  */}

            {
              //this.renderRippleView()

            }

              </View>

        </TouchableWithoutFeedback>
        
      
    
      </View>


    );

  }

  renderRippleView() {
  //    const { size } = this.props;
      const { scaleValue, opacityValue } = this.state;

      const rippleSize = 60 * 2;

      return (
          <Animated.View
              style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: rippleSize,
                  height: rippleSize,
                  borderRadius: rippleSize / 2,
                  transform: [{ scale: scaleValue }],
                  opacity: opacityValue,
                  backgroundColor: 'black',
              }}
          />
      );
  }

  onPressedIn() {

    console.log("Onpressedin called");

        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();

    }

  onPressedOut() {
      Animated.timing(this.state.opacityValue, {
          toValue: 0,
          useNativeDriver: true,
      }).start(() => {

        this.state.scaleValue.setValue(0.01);
        this.state.opacityValue.setValue(this.state.maxOpacity);
      });
  }


}
