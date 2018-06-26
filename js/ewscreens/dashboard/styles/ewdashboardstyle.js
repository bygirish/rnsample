/*
-------------------------------------------------------------------------------
FILE_NAME: dashboardscreenstyle.js
Objective: Styling Dashboard Screen
Tech Used: React-Native 0.45

Author:
- Girish Kumar Gupta
- Simerdeep Singh
- Anshu Goyal

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
*/
const React = require('react-native');

const { StyleSheet, Platform } = React;

import * as appstyleguide from '../../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS, PLATFORM_ANDROID, } from '../../../utils';

export default {

  pendingNotificationsBadge: {
    borderWidth:1,
    borderColor: appstyleguide.APP_GRAY,
    backgroundColor:"transparent",
    paddingTop: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 2,
  },

  pendingNotificationsText: {
    color: appstyleguide.APP_GRAY,
  },


  container: {
    backgroundColor: '#FFF',
  },

  text: {
    alignSelf: 'center',
    marginBottom: 7,
  },

  fabTextContainerStyle:{
    backgroundColor: 'black',
  },

  fabTextStyle:{
    color:'white',
  },

  spinnerElement: {
    marginLeft: 5,
    marginRight: 5
  },

  spinnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadAgainButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  },

  iconStyle : {

    height : (getMobileOS() == PLATFORM_ANDROID) ? 30 : 30,
    width: (getMobileOS() == PLATFORM_ANDROID) ? 30 : 30,
  },


};
