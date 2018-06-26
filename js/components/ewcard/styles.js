import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH , getMobileOS , PLATFORM_IOS } from '../../utils';

export default {

  cardStyle: {
    borderWidth: (getMobileOS() === PLATFORM_IOS) ? 0.5 : 0.5,
    borderColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_LIGHT_GRAY : appstyleguide.APP_LIGHT_GRAY

  },


};
