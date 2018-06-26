import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { getMobileOS, PLATFORM_ANDROID, PLATFORM_IOS } from '../../utils';

export default {
  outerViewStyle : {
    paddingTop: (getMobileOS() == PLATFORM_ANDROID) ? 18 : 18,
    //borderWidth: 1,
  //  borderColor: appstyleguide.DASHBOARD_COLOR,
    borderBottomWidth: (getMobileOS() == PLATFORM_ANDROID) ? 1 : 1,

  },

  textinputStyle : {

    fontSize: (getMobileOS() == PLATFORM_ANDROID) ? 16 : 16,
    marginBottom: (getMobileOS() == PLATFORM_ANDROID) ? -5 : -5
  }
};
