const React = require('react-native');
const { StyleSheet, Platform } = React;

import * as appStyle from './appStyle';

export default {

  pickerStyle: {
    marginTop: 5,
    marginBottom: 5,
    borderColor: appStyle.APP_LIGHT_GRAY,
    borderWidth: 0.5,
  },

  labelStyle: {
    marginTop: 5,
    marginBottom: 5,
    color: appStyle.APP_GRAY,
  },

};
