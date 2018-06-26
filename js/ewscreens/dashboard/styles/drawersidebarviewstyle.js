
const React = require('react-native');

const { StyleSheet, Platform } = React;

import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../../utils';

const deviceHeight = DEVICE_HEIGHT;
const deviceWidth = DEVICE_WIDTH;

import * as  appstyleguide from '../../../../appstyleguide/appstyleguide';

export default {

  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },

  drawerCover: {
    alignSelf: 'stretch',
    // resizeMode: 'cover',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
  },

  drawerImage: {
    position: 'absolute',
    // left: (Platform.OS === 'android') ? 30 : 40,
    left: (Platform.OS === 'android') ? deviceWidth / 10 : deviceWidth / 9,
    // top: (Platform.OS === 'android') ? 45 : 55,
    top: (Platform.OS === 'android') ? deviceHeight / 13 : deviceHeight / 12,
  //  width: '',
  //  height: 'auto',
    resizeMode: 'cover',
  },

  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: (Platform.OS === 'android') ? 7 : 5,
  },

  sidebarIcon: {
    fontSize: 21,
    color: '#fff',
    lineHeight: (Platform.OS === 'android') ? 21 : 25,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },

  text: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    marginLeft: 20,
  },

  badgeText: {
    fontSize: (Platform.OS === 'ios') ? 13 : 11,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: (Platform.OS === 'android') ? -3 : undefined,
  },

  containerStyle: {
    borderWidth: 0.5,
    borderColor: appstyleguide.APP_GRAY
  },

  contentStyle: {
    flex: 1,
    backgroundColor: '#fff',
    top: -1
  },

  userInfoContainer: {
    marginBottom: 20,
    marginTop: 0,
    backgroundColor: appstyleguide.DASHBOARD_COLOR,
    alignSelf: 'stretch',
    //flexDirection : "row"
  },

  networkImagePrimaryContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center"
  },

  networkImageSecondaryContainer: {
    //flex: 0.25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  userNameStyle: {
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    color: "#FFF",
    alignSelf: 'center',
  },

  userDesignationStyle: {
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    color: "#FFF",
  },
};
