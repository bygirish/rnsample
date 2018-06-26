

import { Image, View, ScrollView, Animated } from 'react-native';
import React, { Component } from 'react';

import { Content } from 'native-base';

import styles from './styles';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import EwTabView from './ewtabview';

import {  EwH1Text,EwH2Text,EwH2LightText,EwIcon,
          EwH3Text, EwButton
         } from '../../utils/ewcomponents';

VIEW_HEIGHT = 83;

export default class EwBottomNavigation extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {
        springValue : new Animated.Value(0.3),

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

    const { tabList, onTabClick , ...props } = this.props;

    if(tabList.length != 0) {

      return(

        <View style = {{ height: VIEW_HEIGHT, borderTopWidth: 3, borderTopColor: appstyleguide.APP_LIGHT_GRAY }}>

          <View style = {{ marginLeft: 15, marginBottom: 10, marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}>
            <EwH1Text
              text = "Apply"
              customStyle = {{ color: appstyleguide.APP_BLUE }}
            />
          </View>

          <Animated.View style = {{ transform: [{scale: this.state.springValue}] }}>


            <ScrollView
              horizontal
              contentContainerStyle = {{ marginBottom: 5 }}
            >

                {
                  Object.keys(tabList).map( (key) =>

                    <EwTabView
                      tabData = { tabList[key] }
                      key = { key }
                      onTabClick = { (tabKey) => onTabClick(tabKey) }
                    />

                  )

                }

            </ScrollView>
          </Animated.View>

        </View>

      );

    }

    return null;
  }

  componentDidMount() {

    Animated.spring(
      this.state.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();

  }

  componentDidUpdate(prevProps, prevState) {

    console.log("In componentDidUpdate");

  }

  componentWillUnmount() {

    console.log("In componentWillUnmount");

  }

}
