import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS , PLATFORM_IOS } from '../../utils';

export default {
  textStyle: {
    color: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_WHITE : appstyleguide.APP_WHITE,

  },

  buttonStyle: {

  }


};
