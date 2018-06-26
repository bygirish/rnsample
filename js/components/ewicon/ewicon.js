import { Image, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

export default class EwIcon extends Component {

  render() {

    var { iconSource, onIconPressed, customIconStyle } = this.props;

    if(onIconPressed == null) {

      return (

        <Image style = { [styles.iconStyle, customIconStyle] } source = { iconSource } />

      );
    }

    else {

      return (
        <TouchableOpacity onPress = { onIconPressed }>
          <Image style = { [styles.iconStyle, customIconStyle] } source = { iconSource } />
        </TouchableOpacity>
      );
    }

  }

}
