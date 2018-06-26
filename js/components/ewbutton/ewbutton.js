

import { Image, View } from 'react-native';
import React, { Component } from 'react';

import { Button, Text } from 'native-base';

import styles from './styles';

import EwText from '../ewtext/ewtext';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

export default class EwButton extends Component{

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

    const { label,customStyle, ...props } = this.props;

    textStyle = styles.textStyle;

    if(this.props.textStyle)
      textStyle = this.props.textStyle;

    return (
      <Button

        { ...props }
        style = {[ styles.buttonStyle, customStyle]}
        onPress = { this.props.onButonClicked }
      >

        <EwText
          text = { this.props.label }
          customStyle = { textStyle }
        />

      </Button>
    );

  }


}
