import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { DEVICE_WIDTH, getMobileOS, PLATFORM_ANDROID, } from '../../utils';

export default {

  imageStyle: {
   height : (getMobileOS() == PLATFORM_ANDROID) ? 50 : 50,
   width: (getMobileOS() == PLATFORM_ANDROID) ? 20 : 20,
  },

  arrowIconStyle: {

    height: (getMobileOS() == PLATFORM_ANDROID) ? 40 : 40,
    width: (getMobileOS() == PLATFORM_ANDROID) ? 40 : 40,
  },

  actionIconStyle : {

    height: (getMobileOS() == PLATFORM_ANDROID) ? 30 : 30,
    width: (getMobileOS() == PLATFORM_ANDROID) ? 30 : 30,
  }

};
