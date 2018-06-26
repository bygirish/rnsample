import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList } from 'react-native';

import React, { Component } from 'react';

import { Spinner } from 'native-base';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS  } from '../../utils';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import EwH4Text from '../ewh4text/ewh4text';

import EwH3Text from '../ewh3text/ewh3text';
import EwH3LightText from '../ewh3lighttext/ewh3lighttext';

import styles from './reveiwstyles';

export default class Reveiw extends Component{

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

    var { heading,value, customViewStyle, customValueStyle } = this.props;

    console.log("Key received is ", heading);

    return (

      <View style = { [customViewStyle, { flexDirection: "row" }] }>

        <View style = {{ flex: 0.3, }}>

          <EwH3LightText
            text = { heading }
          />
        </View>


        <EwH3Text
          text = { value }
          customStyle = {[customValueStyle, { marginLeft: appstyleguide.DEFAULT_LEFT_MARGIN, flex: 0.7 }] }
        />

      </View>

    );

  }

}
