import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH,  getMobileOS, PLATFORM_ANDROID, PLATFORM_IOS } from '../../utils';

export default {

  textStyle: {

      fontSize: (getMobileOS() == PLATFORM_ANDROID) ? 20 : 20,
      fontWeight:(getMobileOS() == PLATFORM_ANDROID) ? "bold" : "bold",
      color: (getMobileOS() == PLATFORM_ANDROID) ? appstyleguide.APP_WHITE : appstyleguide.APP_WHITE,
  }

};
