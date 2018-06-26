

import { Image, View, ScrollView } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

export default class EwContent extends Component{

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

    console.log("Inside render",this.props.ref);

    const { ...props } = this.props;

    return (
      <ScrollView
        { ...props }
        contentContainerStyle = { styles.content }
        keyboardShouldPersistTaps = "always"
      >

        { this.props.children }

      </ScrollView>
    );

  }


}
