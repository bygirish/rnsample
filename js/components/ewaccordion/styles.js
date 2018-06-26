import * as appstyleguide from '../../../appstyleguide/appstyleguide';
import { DEVICE_WIDTH, getMobileOS , PLATFORM_IOS } from '../../utils';

export default {

  accordionStyle: {

    //borderWidth:1, borderColor:'black',
     margin: (getMobileOS() === PLATFORM_IOS) ? 5 : 5,
     padding: (getMobileOS() === PLATFORM_IOS) ? 8 : 5,
     backgroundColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_LIGHT_GRAY : appstyleguide.APP_LIGHT_GRAY ,
     //borderW idth: 0.1
  },

  accordionHeadingTextStyle: {
    color: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_BLACK : appstyleguide.APP_BLACK ,
    fontSize: (getMobileOS() === PLATFORM_IOS) ? 14 : 14
  },

  hiddenAccordionStyle: {
     marginLeft: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
     marginRight: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
     padding: (getMobileOS() === PLATFORM_IOS) ? 10 : 10,
     borderWidth: (getMobileOS() === PLATFORM_IOS) ? 0.5 : 0.5,
     backgroundColor: (getMobileOS() === PLATFORM_IOS) ? 'white' : 'white',
     borderColor: (getMobileOS() === PLATFORM_IOS) ? appstyleguide.APP_LIGHT_GRAY : appstyleguide.APP_LIGHT_GRAY,
     marginTop: (getMobileOS() === PLATFORM_IOS) ? -10 : -10 ,
     paddingBottom: (getMobileOS() === PLATFORM_IOS) ? 0 : 0
  },

  iconViewStyle : {

    position: (getMobileOS() === PLATFORM_IOS) ? 'absolute' : 'absolute',
    right: (getMobileOS() === PLATFORM_IOS) ? 10 : 10
  }


};
