import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH,  getMobileOS, PLATFORM_ANDROID, PLATFORM_IOS } from '../../utils';

export default {

  textStyle : {

    fontSize: (getMobileOS() == PLATFORM_ANDROID) ? 15 : 15,

  }

};
