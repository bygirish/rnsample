import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

class EwCard extends Component{

  render() {

    var { customStyle } = this.props;

    return (
        <View style = {[ styles.cardStyle, customStyle]} >
          { this.props.children }
        </View>
    );
  }
};

export default EwCard;
