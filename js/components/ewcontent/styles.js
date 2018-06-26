import { DEVICE_WIDTH , getMobileOS , PLATFORM_IOS } from '../../utils';

export default {

  content: {
    marginLeft: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
    marginRight: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
    alignSelf: (getMobileOS() === PLATFORM_IOS) ? 'stretch' : 'stretch'
  },

};
