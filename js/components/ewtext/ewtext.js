import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import styles from './styles';

class EwText extends Component{

  render() {

    var { text, customStyle, ...props } = this.props;

    return (
        <Text style = { [ styles.textStyle, customStyle ] } >
          { text }
          { props.children }
        </Text>
    );
  }
}
export default EwText;
