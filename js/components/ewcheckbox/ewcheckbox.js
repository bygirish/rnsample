import { Image, View } from 'react-native';
import React, { Component } from 'react';

import { Text,CheckBox } from 'native-base';

import EwH3Text from '../ewh3text/ewh3text';

import styles from './styles';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

export default class EwCheckbox extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

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

    const { label, customViewStyle,...props } = this.props;

    textStyle = styles.textStyle;

    if(this.props.textStyle)
      textStyle = this.props.textStyle;

    return (
      <View style = {[ styles.checkboxViewStyle, customViewStyle ]}>
        <CheckBox
          { ...props }
          checked = { this.props.isChecked }
          onPress = { this.props.onCheckboxClick }
        />

        <EwH3Text
          text = { this.props.label }
          customStyle = { textStyle }
        />

      </View>

    );

  }


}
