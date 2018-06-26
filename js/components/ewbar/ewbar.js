import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

class EwBar extends Component{

  render() {

    var { customStyle } = this.props;
    
    return (
        <View style = {[ styles.bar, customStyle]} />
    );
  }
};

export default EwBar;
