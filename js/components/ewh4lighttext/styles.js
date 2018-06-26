import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH , getMobileOS, PLATFORM_ANDROID, } from '../../utils';

import styles from '../ewh4text/styles';

export default {

  textStyle: {

      fontSize: (getMobileOS() == PLATFORM_ANDROID) ? styles.textStyle.fontSize : styles.textStyle.fontSize,
      color: (getMobileOS() == PLATFORM_ANDROID) ? appstyleguide.APP_GRAY : appstyleguide.APP_GRAY
  }

};
