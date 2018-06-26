import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { DEVICE_WIDTH , getMobileOS , PLATFORM_IOS } from '../../utils';

export default {
  textStyle: {
    marginLeft: (getMobileOS() === PLATFORM_IOS) ? 20 : 20,
    marginBottom: (getMobileOS() === PLATFORM_IOS) ? 10 : 10
  },

  checkboxViewStyle : {

    flexDirection: (getMobileOS() === PLATFORM_IOS) ? "row" :  "row"
  }

};
