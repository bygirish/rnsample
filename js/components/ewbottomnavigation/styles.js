import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS , PLATFORM_IOS } from '../../utils';

export default {
  buttonTextStyle: {
    color: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_BLUE : appstyleguide.APP_BLUE,
    marginLeft: (getMobileOS() === PLATFORM_IOS) ? -9 : -9,
    marginRight: (getMobileOS() === PLATFORM_IOS) ? -9 : -9,
  },

  buttonStyle: {
    backgroundColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_WHITE : appstyleguide.APP_WHITE,
    borderWidth: (getMobileOS() === PLATFORM_IOS) ? 0.5 : 1,
    borderColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_BLUE : appstyleguide.APP_BLUE,
    height: (getMobileOS() === PLATFORM_IOS) ? 30 : 30,
    borderRadius: (getMobileOS() === PLATFORM_IOS) ? 30 : 20,
    paddingTop: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
    paddingBottom: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
    paddingLeft: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
    paddingRight: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
    zIndex: -1,
  },

  textStyle: {

  //  paddingTop: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
  //  paddingBottom: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
  //  paddingLeft: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
  //  paddingRight: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
  //  zIndex: (getMobileOS() === PLATFORM_IOS) ? 100 : 0,
  //  zIndex:3,
    color: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_BLUE : appstyleguide.APP_BLUE,
    fontWeight: (getMobileOS() === PLATFORM_IOS) ? "bold" : "bold"
  }


};
