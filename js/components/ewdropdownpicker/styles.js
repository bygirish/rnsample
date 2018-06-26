import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, DEVICE_HEIGHT , getMobileOS , PLATFORM_IOS } from '../../utils';

export default {
  spinnerElement: {
    alignSelf: (getMobileOS() === PLATFORM_IOS) ? 'stretch' : 'stretch',
    alignItems: (getMobileOS() === PLATFORM_IOS) ? 'center' : 'center',
    height: (getMobileOS() === PLATFORM_IOS) ? 40 : 40 ,
    marginLeft: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
    //  borderColor: appstyleguide.APP_LIGHT_GRAY,
    //  borderWidth: 0.5,
  },

  spinnerContainer: {

    borderColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_LIGHT_GRAY : appstyleguide.APP_LIGHT_GRAY,
    borderWidth: (getMobileOS() === PLATFORM_IOS) ? 0.5 : 0.5,
  //  backgroundColor: appstyleguide.APP_LIGHT_GRAY,
  },

  outerViewStyle: {


  },
};
