import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH , getMobileOS, PLATFORM_ANDROID, } from '../../utils';

export default {

  textStyle: {

      fontSize: (getMobileOS() == PLATFORM_ANDROID) ? 14 : 14,
  }

};
