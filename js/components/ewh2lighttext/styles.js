import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS, PLATFORM_ANDROID, } from '../../utils';

import * as styles from '../ewh2text/styles';

export default {

  textStyle: {

      fontSize: (getMobileOS() == PLATFORM_ANDROID) ? styles.default.textStyle.fontSize : styles.default.textStyle.fontSize,
      color: (getMobileOS() == PLATFORM_ANDROID) ? appstyleguide.APP_GRAY : appstyleguide.APP_GRAY
  }

};
