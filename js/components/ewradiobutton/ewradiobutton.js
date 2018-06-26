import { Image, View } from 'react-native';
import React, { Component } from 'react';

import { Button, Text,Radio } from 'native-base';

import styles from './styles';

import EwH3Text from '../ewh3text/ewh3text';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

export default class EwRadioButton extends Component{

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

    const { label,customViewStyle,customTextStyle,...props } = this.props;

    textStyle = styles.textStyle;

    if(this.props.textStyle)
      textStyle = this.props.textStyle;

    return (
      <View style = {[ styles.radioButtonViewstyle, customViewStyle]}>
        <Radio
          { ...props }
          selected = { this.props.isSelected }
          onPress = { this.props.onRadioButtonClick }
        />

        <EwH3Text
          text= { this.props.label }
          customStyle = { [textStyle,customTextStyle] }
        />

      </View>

    );

  }


}
