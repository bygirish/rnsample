import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH , getMobileOS , PLATFORM_IOS } from '../../utils';

export default {

  listStyle: {
    height: (getMobileOS() === PLATFORM_IOS) ? 100 : 100,
    position: (getMobileOS() === PLATFORM_IOS) ? 'relative' : 'relative',
    zIndex: (getMobileOS() === PLATFORM_IOS) ? 5 : 5 ,
    flex: (getMobileOS() === PLATFORM_IOS) ? 1 : 1,
    left: (getMobileOS() === PLATFORM_IOS) ? 0 : 0,
    right: (getMobileOS() === PLATFORM_IOS) ? 0 : 0,
    elevation: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
    overflow: (getMobileOS() === PLATFORM_IOS) ? 'hidden' : 'visible',
  },


};
