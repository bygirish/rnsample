import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS , PLATFORM_IOS } from '../../utils';

export default {

  bar: {
    borderBottomWidth: (getMobileOS() === PLATFORM_IOS) ? 1 : 1,
    width: (getMobileOS() === PLATFORM_IOS) ? DEVICE_WIDTH * 0.95 : DEVICE_WIDTH * 0.95,
    borderColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_LIGHT_GRAY : appstyleguide.APP_LIGHT_GRAY,
    alignSelf: (getMobileOS() === PLATFORM_IOS) ? 'center' : 'center'
  },


};
