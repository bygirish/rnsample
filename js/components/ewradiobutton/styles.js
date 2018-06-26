import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { getMobileOS, PLATFORM_ANDROID, PLATFORM_IOS } from  '../../utils';

export default {
  textStyle: {
    marginLeft:  (getMobileOS() == PLATFORM_ANDROID) ? 10 : 10,
    alignItems: (getMobileOS() == PLATFORM_ANDROID) ? "center" : "center",
    alignSelf: (getMobileOS() == PLATFORM_ANDROID) ? "center" : "center"
  },

  radioButtonViewstyle: {

    flexDirection: (getMobileOS() == PLATFORM_ANDROID) ? "row" : "row"
  }

};
