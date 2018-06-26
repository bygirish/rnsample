import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS, PLATFORM_ANDROID, } from '../../utils';

export default {

  iconStyle: {
   height : (getMobileOS() == PLATFORM_ANDROID) ? 20 : 20,
   width: (getMobileOS() == PLATFORM_ANDROID) ? 20 : 20, 
  },

};
