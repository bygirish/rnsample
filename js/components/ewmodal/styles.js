import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { DEVICE_WIDTH, getMobileOS, PLATFORM_ANDROID, } from '../../utils';

export default {

  backdrop: {
     position: (getMobileOS() == PLATFORM_ANDROID) ? 'absolute' : 'absolute',
     top: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 0,
     bottom: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 0,
     left: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 0,
     right: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 0,
     opacity: (getMobileOS() == PLATFORM_ANDROID) ? 0 : 0,
     backgroundColor: (getMobileOS() == PLATFORM_ANDROID) ? appstyleguide.APP_BLACK : appstyleguide.APP_BLACK,
     opacity: (getMobileOS() == PLATFORM_ANDROID) ? 0.7 : 0.7
   },

   content: {
    flex: (getMobileOS() == PLATFORM_ANDROID) ? 1 : 1,
    justifyContent: (getMobileOS() == PLATFORM_ANDROID) ? 'center' : 'center',
  
  //  backgroundColor: appstyleguide.APP_BLACK

  },

  contentStyle: {

    //flexDirection: 'column',
    //justifyContent: 'center',
    alignSelf: "stretch",
    backgroundColor: (getMobileOS() == PLATFORM_ANDROID) ? appstyleguide.APP_WHITE : appstyleguide.APP_WHITE,
    borderRadius: (getMobileOS() == PLATFORM_ANDROID) ? 4 : 4,
    borderColor: (getMobileOS() == PLATFORM_ANDROID) ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',

  },
};
