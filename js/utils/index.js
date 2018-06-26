import { Dimensions, LayoutAnimation, Platform, Linking } from 'react-native';


// constants
const PRODUCTION_MODE = true;

if(PRODUCTION_MODE) {
  console.log = () => {};
}

import { NetInfo } from 'react-native';

// export const BASIC_URL = "http://192.168.1.121:9080/ermWeb/services";
// export const IMAGE_URL = "http://192.168.1.121:9080/ermWeb/servlet/ggs.erm.android.ImageS?mode=employee_imageImport";
// export const PAYSLIP_DOWNLOAD_URL = "http://192.168.1.121:9080/ermWeb/services/payslipdownload";
/*
export const BASIC_URL = "http://192.168.1.26:9080/ermWeb/services";
export const IMAGE_URL = "http://192.168.1.26:9080/ermWeb/servlet/ggs.erm.android.ImageS?mode=employee_imageImport";
export const PAYSLIP_DOWNLOAD_URL = "http://192.168.1.26:9080/ermWeb/services/payslipdownload";
export const NODE_JS_BASIC_URL = "http://192.168.1.36:8083" ;
*/
//export const BASIC_URL = " https://chipsoft.in/asperm/services";
//export const IMAGE_URL = "https://www.myemploywise.com/asperm/servlet/ggs.erm.android.ImageS?mode=employee_imageImport";
//export const PAYSLIP_DOWNLOAD_URL = " https://chipsoft.in/asperm/services/payslipdownload";

  export const BASIC_URL = "https://www.myemploywise.com/asperm/services";
  export const IMAGE_URL = "https://www.myemploywise.com/asperm/servlet/ggs.erm.android.ImageS?mode=employee_imageImport";
  export const SELF_IMAGE_URL = "https://www.myemploywise.com/asperm/servlet/ggs.erm.android.ImageS?mode=imageImport";
  export const PAYSLIP_DOWNLOAD_URL = BASIC_URL + "/payslipdownload";
  export const NODE_JS_BASIC_URL = "https://www.myemploywise.com:3000" ;
  //export const NODE_JS_BASIC_URL = "http://localhost:3000" ;
  export const FRESHDESK_URL = "https://employwise.freshdesk.com/api/v2" ;

var DeviceInfo = require('react-native-device-info');

console.log("Device Info", DeviceInfo);
console.log("Device Unique ID", DeviceInfo.getUniqueID());
// Functions

export const DEVICE_ID = DeviceInfo.getUniqueID();
export const DEVICE_APP_VERSION = DeviceInfo.getVersion();
//export const DEVICE_BUILD_NUMBER = DeviceInfo.getBuildNumber();

export const DEVICE_HEIGHT = parseInt(Dimensions.get('window').height);

export const DEVICE_WIDTH = parseInt(Dimensions.get('window').width);

export const SUCCESS_MESSAGE = 'success';

export const WARNING_MESSAGE = 'warn';

export const ERROR_MESSAGE = 'error';

export const INFO_MESSAGE = 'info';

export const VERSION = "null";

export const VERSION_CODE = "";

export const VERSION_NAME = "";

export const REHYDRATE = "persist/REHYDRATE";

export const TOAST_SHORT_LENGTH = 2500 ;

export const TOAST_LONG_LENGTH = 5000 ;

export const REQUEST_SUCCESSFULL = 'Request Successfull' ;

export const REQUEST_FAILED = 'Request Failed' ;

export const REQUEST_SERVER_ERROR = 'Request SErver Error' ;

export const SESSION_EXPIRED_LOGOUT_SUCCESSFULL = 'session expired logout successfull' ;

export const PLATFORM_ANDROID = 'android' ;
export const ANDROID_PLAYSTORE_LINK = 'https://play.google.com/store/apps/details?id=com.employwise.ggs.employwise' ;

export const PLATFORM_IOS = 'ios' ;
export const IOS_APPSTORE_LINK = 'https://itunes.apple.com/in/app/employwise/id1191418553' ;


export const LOCATION_NOT_AVAILABLE_ERROR = "Location not available";

export const SREI_CUSTOMER_CODE = 1665 ;
/*
To generate the url to fetch image from the server
*/
export function getImageUrl(sessionToken, genId, source = 'abc', currentImageTimestamp = null, isSelfImage = false) {

  console.log("Inside getImageUrl" + currentImageTimestamp);

  if(isSelfImage)
    thumbnailImage = SELF_IMAGE_URL + "&tokenid=" + sessionToken + "&deviceid=" + DEVICE_ID ;
  else
    thumbnailImage = IMAGE_URL + "&tokenid=" + sessionToken + "&deviceid=" + DEVICE_ID + "&emp_code=" + genId;

  if(currentImageTimestamp != null) {

    thumbnailImage += "&updatedTimeStamp=" + currentImageTimestamp;

     console.log("Source - " + source + "Inside getImageUrl utils", thumbnailImage);

  }
  else {

      console.log("Source - " + source + "Inside getImageUrl utils", thumbnailImage);

  }

    return thumbnailImage;
}


/*
To format date based on the server requirement
*/
export function convertMillisecondsToServerDate(milliseconds) {

  var date = new Date(milliseconds) ;
  var month = '' + (date.getMonth() + 1) ;
  var day = '' + date.getDate() ;
  var year = date.getFullYear() ;

  if (month.length < 2)
   month = '0' + month;

  if (day.length < 2)
   day = '0' + day;

  formattedDate = [year, month, day].join('-') + " 00:00:00" ;

  return formattedDate;
}


export function convertMillisecondsToServerDateTime(milliseconds) {

  var date = new Date(milliseconds) ;
  var month = '' + (date.getMonth() + 1) ;
  var day = '' + date.getDate() ;
  var year = date.getFullYear() ;

  if (month.length < 2)
   month = '0' + month;

  if (day.length < 2)
   day = '0' + day;

  formattedDate = [year, month, day].join('-') + " " + (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":00" ;

  return formattedDate;
}



export function convertMillisecondsToServerTime( milliseconds ) {

  var date = new Date(milliseconds) ;

  formattedTime = (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() ;

  return formattedTime ;
}

export function convertServerDateToMilliseconds( dateToFormat ) {

  var milliseconds = 0 ;
  var formattedDate = new Date();

  if(dateToFormat != null) {

    formattedDate =  new Date(dateToFormat.replace(/-/g, "/").substr(0, 19));

    formattedDate.setHours(0);
    formattedDate.setMinutes(0);
    formattedDate.setSeconds(0);
    formattedDate.setMilliseconds(0);

  }

  milliseconds = formattedDate.getTime();

  return milliseconds ;
}

export function convertServerDateTimeToMilliseconds( dateToFormat ) {

  var milliseconds = 0 ;

  if(dateToFormat != null)
    milliseconds = new Date(dateToFormat.replace(/-/g, "/").substr(0, 19)).getTime();

  return milliseconds ;
}

export function convertServerTimeToMilliseconds( milliseconds, timeToFormat ) {

  var date = new Date(milliseconds);

  date.setHours(timeToFormat.substr(0, 2));
  date.setMinutes(timeToFormat.substr(3, 5));

  if(date != null)
    milliseconds = new Date(date).getTime();

  console.log("milliseconds", milliseconds);

  return milliseconds ;
}


export function changeTimeDateAndConvertToMilliseconds(selectedDateMilliseconds,appliedDateMilliseconds) {

  var selectedDate = new Date(selectedDateMilliseconds);

  var appliedDate = new Date(appliedDateMilliseconds);

  console.log("selectedDate",selectedDate);
  console.log("appliedDate",appliedDate);

  selectedDate.setDate(appliedDate.getDate());
  selectedDate.setMonth(appliedDate.getMonth());
  selectedDate.setYear(appliedDate.getFullYear());

  console.log("selectedDate",selectedDate);

  newmilliseconds = selectedDate.getTime();

  return newmilliseconds;

}
export function showDeviceDateFormat( milliseconds ) {

  console.log("milliseconds",milliseconds);

  var formattedDate = "";

  formattedDate = new Date(milliseconds).toDateString();

  return formattedDate ;
}

export function showDeviceDateTimeFormat( milliseconds ) {
  //console.log("currenDate is ", currentDate);

  currentDate = new Date(milliseconds);


  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var date = currentDate.getDate();
  var dayName = days[currentDate.getDay()];
  var monthName = monthNames[currentDate.getMonth()];
  var year = currentDate.getFullYear();

  formattedDate = dayName + ', ' + date + " " + monthName + " " + year + " - " + fomartTime12Hour(currentDate);
  return formattedDate ;
}

function fomartTime12Hour(time_24) {

    console.log( "In fomartTime12Hour method");

    var hours = time_24.getHours() % 12;
    var minutes = time_24.getMinutes();


    if (hours === 0) hours = 12;
    return (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + (time_24.getHours() < 12 ? 'am' : 'pm');
}

export function showDeviceTimeFormat( milliseconds ) {


  var formattedTime = "";

  var date = new Date(milliseconds);

  formattedTime = (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() ;

  return formattedTime ;
}

export function checkIfNullOrEmptyString(data) {

  if( data === "" || data === null || data === "null" || data === '')
    return true;

  return false;

}

export function getDayDifference(date1, date2) {

  date1Milliseconds = date1.getTime();

  date2Milliseconds = date2.getTime();

  numberOfDays = Math.round((date2Milliseconds - date1Milliseconds) / (1000 * 60 * 60 * 24));

  return numberOfDays;
}

export function areDatesEqual(millisecondsDate1,millisecondsDate2) {

  var date1 = new Date(millisecondsDate1);
  var date2 = new Date(millisecondsDate2);

  if((date1.getDay() != date2.getDay()) || (date1.getMonth() != date2.getMonth()) || (date1.getYear() != date2.getYear()))
    return false;
  else
    return true;

}


export function getCurrentDate() {

  var milliseconds = 0 ;
  var formattedDate = new Date();

  formattedDate.setHours(0);
  formattedDate.setMinutes(0);
  formattedDate.setSeconds(0);
  formattedDate.setMilliseconds(0);

  milliseconds = formattedDate.getTime();

  return milliseconds ;

}

export function getCurrentTime() {

  return new Date().getTime();
}

export function trackServerRequestTimings(requestStartTime,requestCategory, requestName, requestStatus) {

  requestEndTime = getCurrentTime();

  totalRequestTime = getTimeDifferenceInMilliseconds(requestStartTime, requestEndTime) ;

  console.log("requestDataReceived", totalRequestTime, requestCategory, requestStatus, requestName);

  tracker.trackTiming(requestCategory, totalRequestTime, { name: requestName, label: requestStatus  });


}

export function trackComponentVisibleTimings(componentInitializeTime,componentCategory,componentName) {

  componentUnmountedTime = getCurrentTime();

  totalComponentTime = getTimeDifferenceInMilliseconds(componentInitializeTime,componentUnmountedTime) ;

  console.log("trackComponentVisibleTimings",totalComponentTime,componentInitializeTime,componentCategory,componentName);

  tracker.trackTiming(componentCategory,totalComponentTime,{ name: componentName });


}



function getTimeDifferenceInMilliseconds(beginTime,endTime) {

  difference = endTime - beginTime;
  return difference;
}


export function isNetworkAvailable() {

   var isNetworkConnected = false;

   NetInfo.isConnected.fetch().then(isConnected => {

     console.log('isConnected ', isConnected );

      isNetworkConnected = isConnected;
     });

    console.log('isConnected ', isNetworkConnected );

   return isNetworkConnected;

}

export function showAnimation(animationType) {

  LayoutAnimation.configureNext(animationType);

}

export function isNumber(text) {

  var numbersRegex = /^[0-9]+$/;

  if(text.match(numbersRegex))
    return true;

  return false;

}

export function isEmailId(text) {

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(text.match(emailRegex))
    return true;

  return false;

}

export function getCurrencySymbol(currency) {

    switch (currency) {
      case 'INR':
        return '\u20b9';
      case 'USD':
        return '\u0024';
    }

}

export function formatCurrencyIndianFormat(num) {
  var n1, n2;
  num = num + '' || '';
  // works for integer and floating as well
  n1 = num.split('.');
  n2 = n1[1] || null;
  n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  num = n2 ? n1 + '.' + n2 : n1;

  return num;
}

export function getMobileOS() {

  if(Platform.OS == 'android')
    return PLATFORM_ANDROID;

  return PLATFORM_IOS;

}

export function getJsonArray(serverData) {

  jsonArray = [];

  if(serverData instanceof Array) {
    jsonArray = serverData;
  }

  else {
    jsonArray.push(serverData);

  }

  return jsonArray;
}

export function sendEmail(data) {

  urlString = "";

  if(data.email != null)
    urlString = urlString + 'mailto:' + data.email;

  if(data.subject != null)
    urlString = urlString + '?subject=' + data.subject;

  if(data.body != null)
    urlString = urlString + '&body=' + data.body;

  url = Linking.openURL(urlString);

}

/* To redirect the user to app store for the rating*/

export function redirectToAppStore() {

  console.log("Inside redirectToAppStore");

  if(getMobileOS() == PLATFORM_ANDROID)
    Linking.openURL(ANDROID_PLAYSTORE_LINK).catch(err => console.error('An error occurred', err));

  else
    Linking.openURL(IOS_APPSTORE_LINK).catch(err => console.error('An error occurred', err));

}
