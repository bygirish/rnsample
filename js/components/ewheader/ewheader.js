import { Image, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Header,Left, Body, Right, Button, Icon } from 'native-base';

import { EwReportIssue, EwButton, EwScreenTitle } from '../../utils/ewcomponents';

import styles from './styles';

export default class EwHeader extends Component {

  render() {

    var { screenTitle, onBackButtonPress, screenReportId } = this.props;

    return (

      <Header>
        <Left>
          <Button transparent onPress = { () => onBackButtonPress() }>
            <Icon name = "arrow-back" />
          </Button>
        </Left>
        <Body style = {{ flex: 3 }}>

          <EwScreenTitle
              text = { screenTitle }
          />

        </Body>
        <Right >
          <EwReportIssue
            screenId = { screenReportId }
          />
        </Right>
      </Header>


    );

  }

}
