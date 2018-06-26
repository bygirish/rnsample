import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

class EwH1Text extends Component{



  render() {

    var { text, customStyle,...props } = this.props;

    return (
        <Text style = {[ styles.textStyle, customStyle ]} >
          { text }
        </Text>
    );
  }
}
export default EwH1Text;
