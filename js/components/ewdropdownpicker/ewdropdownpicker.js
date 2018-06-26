

import { Image, View, TextInput,Text,Animated } from 'react-native';
import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import React, { Component } from 'react';

import styles from './styles';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS  } from '../../utils';

import { Picker, Item } from 'native-base';

import EwText from '../ewtext/ewtext';

import EwH4Text from '../ewh4text/ewh4text';

import h4Styles from '../ewh4text/styles';

const defaultHeight = 40;

export default class EwDropdownPicker extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

      };


      this.state = this.initialState;
  }

  componentWillMount() {

     console.log("Inside componentWillMount");

     this._animatedIsFocused = new Animated.Value(0);

     if(!this.props.isDefaultPickerValueSelected ) {

       this.animatePickerLabel();

     }

  }

  componentDidUpdate() {

    console.log("Inside componentDidUpdate");

    this.animatePickerLabel();
  }

  render() {

    var { dataArray,customPickerView, isDefaultPickerValueSelected, pickerPlaceholderLabel, pickerLabel,customViewStyle,  ...props } = this.props;

    console.log("dataArray",dataArray);

    const labelStyle = {
      position: 'absolute',
      marginLeft: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
      }),
      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [6, -20],
      }),

      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, h4Styles.textStyle.fontSize],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [appstyleguide.APP_WHITE, appstyleguide.APP_BLACK],
      }),
    };

    displayLabel =  "";

    if(!isDefaultPickerValueSelected)
      displayLabel =  pickerLabel;

    console.log("display label is - ", displayLabel);

    return (

      <View style = {[ styles.outerViewStyle, customViewStyle ] }>

        <EwH4Text

          text = { displayLabel }

        />

        { /*<Animated.Text style = { labelStyle }>
          { displayLabel }
          </Animated.Text> */ }

        <View style = { styles.spinnerContainer }>

            <Picker
              { ...props }
              style  =  { styles.spinnerElement }
              supportedOrientations = {['portrait','landscape']}
              iosHeader = "Select one"
              mode = "dropdown"
              selectedValue = { this.props.selectedValue }
              onValueChange = { this.props.onPickerValueChange }
            >

              {
                customPickerView != null ? customPickerView : dataArray.map((item, key) => <Item key = { key } label = { item.label } value = { item.value } />)
              }
            </Picker>
        </View>
      </View>

    );

  }

  animatePickerLabel() {

    Animated.timing(this._animatedIsFocused, {
      toValue: ( !this.props.isDefaultPickerValueSelected ) ? 1 : 0,
      duration: 200,
    }).start();

  }


}
