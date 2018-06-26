import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

class EwH3LightText extends Component{


  render() {

    var { text, customStyle } = this.props;

    return (
        <Text style = {[ styles.textStyle, customStyle ]} >{ text }</Text>
    );
  }
}
export default EwH3LightText;
