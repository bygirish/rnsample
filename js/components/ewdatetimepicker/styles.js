import { DEVICE_WIDTH, DEVICE_HEIGHT , getMobileOS , PLATFORM_IOS } from '../../utils';

const React = require('react-native');

const { StyleSheet, Platform } = React;

const deviceHeight = DEVICE_HEIGHT;

export default {
  imageContainer: {
    flex: (getMobileOS() === PLATFORM_IOS) ? 1 : 1,
    width: (getMobileOS() === PLATFORM_IOS) ? null : null,
    height: (getMobileOS() === PLATFORM_IOS) ? null : null,
  },
  logoContainer: {
    flex: (getMobileOS() === PLATFORM_IOS) ? 1 : 1,
    marginTop: (getMobileOS() === PLATFORM_IOS) ? deviceHeight / 8 : deviceHeight / 8,
    marginBottom: (getMobileOS() === PLATFORM_IOS) ? 30 : 30,
  },
  logo: {
    position: (getMobileOS() === PLATFORM_IOS) ? 'absolute' : 'absolute',
    left: (getMobileOS() === PLATFORM_IOS) ? 50 : 40,
    top: (getMobileOS() === PLATFORM_IOS) ? 60 : 35,
    width: (getMobileOS() === PLATFORM_IOS) ? 280 : 280,
    height: (getMobileOS() === PLATFORM_IOS) ? 100 : 100,
  },
  text: {
    color: (getMobileOS() === PLATFORM_IOS) ? '#D8D8D8' : '#D8D8D8',
    bottom: (getMobileOS() === PLATFORM_IOS) ? 6 : '#D8D8D8',
  },
};
