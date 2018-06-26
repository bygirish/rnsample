import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { getMobileOS, PLATFORM_ANDROID, PLATFORM_IOS } from  '../../utils';

export default {
  iconStyle: {
    marginRight: (getMobileOS() == PLATFORM_ANDROID) ? 20 : 10
  },

};
