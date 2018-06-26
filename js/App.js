/*
-------------------------------------------------------------------------------
FILE_NAME: App.js
Objective: Root Component
Tech Used: React-Native 0.45 & Redux

Author:
- Girish Kumar Gupta
- Simerdeep Singh
- Anshu Goyal

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
*/

/*
Predefined libraries
*/
import React, { Component } from 'react';
import { Platform, StyleSheet, NetInfo,UIManager } from 'react-native';
import CodePush from 'react-native-code-push';
import { Container, Content, Text, View } from 'native-base';
import Modal from 'react-native-modalbox';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';

/*
components
*/
import EwAppNavigator from './EwAppNavigator';
import ProgressBar from './components/loaders/ProgressBar';
import theme from './themes/base-theme';

import { EwModal } from './utils/ewcomponents';

//var PushNotification = require('react-native-push-notification');

/*
Constants
*/
const FILE_NAME = "App.js : ";
const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: null,
    height: null,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal1: {
    height: 300,
  },

});

/*
Root Component
*/
class App extends Component {

  constructor(props) {
    super(props);

    console.log(FILE_NAME + "In constructor");

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0,
    };
  }

  componentDidMount() {

    console.log(FILE_NAME + "In componentDidMount method");

  
  }

  componentWillUnmount() {

      console.log(FILE_NAME + "In componentWillUnmount method");

  }

  render() {

    console.log(FILE_NAME + "In render method", this.state);

    return(
      <Container>
        <View style = {{ justifyContent: 'center', alignItems: 'stretch', flex: 1 }}>

          <EwAppNavigator />
        </View>
      </Container>
    );



  }

  
}

export default App;
