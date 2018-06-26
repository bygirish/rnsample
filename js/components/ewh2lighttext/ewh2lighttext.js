import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

class EwH2LightText extends Component{


  render() {

    var { text, customStyle, ...props } = this.props;

    return (
        <Text style = {[ styles.textStyle, customStyle ]}  { ...props }>{ text }</Text>
    );
  }
}
export default EwH2LightText;
