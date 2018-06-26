const React = require('react-native');
const { StyleSheet, Platform } = React;

export const APP_WHITE = "#FFFFFF";
export const APP_BLACK = "#231F20";
//export const APP_BLUE =  "#223E80";
export const APP_BLUE =  "#32CD32";
export const APP_LIGHT_BLUE =  "#89b5E1";
export const APP_GRAY =  "#616161";
export const APP_LIGHT_GRAY =  "#F2F4F7";
export const DASHBOARD_COLOR = '#3F51B5';

export const APP_ORANGE = "orange";
export const APP_GREEN = "#41AD49";
export const APP_RED = "red";

export const APP_COLOR_BLACK = "#000000";
export const APP_COLOR_GREEN = "#32CD32";
export const APP_COLOR_RED = "#ff0000";
export const APP_COLOR_BROWN = "#963C00";

// export const APP_WHITE = "#FFFFFF";
// export const APP_BLACK = "#231F20";
// export const APP_BLUE =  "green";
// export const APP_LIGHT_BLUE = "#89b5E1";
// export const APP_GRAY =  "#F9690E";
// export const APP_LIGHT_GRAY =  "#F2F4F7";
// export const DASHBOARD_COLOR = '#3FC380';

// margins

export const DEFAULT_MARGIN = 10;
export const DEFAULT_TOP_MARGIN = 10;
export const DEFAULT_BOTTOM_MARGIN = 10;
export const DEFAULT_LEFT_MARGIN = 10;
export const DEFAULT_RIGHT_MARGIN = 10;


export const H1_FONT_SIZE = 15;
export const H2_FONT_SIZE = 12;
export const H3_FONT_SIZE = 8;

// Text

  export const TEXT_SIZE = 17;
  export const TEXT_COLOR = '#000';
  //Markin Markout text
  export const NOTE_TEXT_SIZE = 14;
  export const NOTE_FONT_COLOR = "#a7a7a7";


//Font

  export const FONT_FAMILY_IOS = 'System';
  export const FONT_FAMILY_ANDROID = 'Roboto';

// Badge

export const BADGE_BACKGROUND_COLOR = "#ED1727";
export const BADGE_COLOR = '#fff';
export const BADGE_PADDING_IOS = 0;
export const BADGE_PADDING_ANDROID = 0;
export const FONT_SIZE_BASE = 15;

// Card

export const CARD_BACKGROUND_COLOR = '#fff';


// Button / Brand

  // For iOS
  export const BUTTON_FONT_STYLE_IOS = 'System';
  export const BUTTON_PRIMARY_IOS = APP_BLUE;
  export const BUTTON_INFO_IOS = '#62B1F6';
  export const BUTTON_SUCCESS_IOS = '#5cb85c';
  export const BUTTON_DANGER_IOS = '#d9534f';
  export const BUTTON_WARNING_IOS = '#f0ad4e';
  export const BUTTON_SIDEBAR_IOS = '#252932';
  export const BUTTON_RADIUS_IOS = 5;

  // For Android
  export const BUTTON_FONT_STYLE_ANDROID = 'Roboto_medium';
  export const BUTTON_PRIMARY_ANDROID = APP_BLUE;
  export const BUTTON_INFO_ANDROID = '#62B1F6';
  export const BUTTON_SUCCESS_ANDROID = '#5cb85c';
  export const BUTTON_DANGER_ANDROID = '#d9534f';
  export const BUTTON_WARNING_ANDROID = '#f0ad4e';
  export const BUTTON_SIDEBAR_ANDROID = '#252932';
  export const BUTTON_RADIUS_ANDROID = 2;

  // common
  export const BUTTON_DISABLED_BACKGROUND = APP_LIGHT_BLUE;
  export const BUTTON_DISABLED_CLEAR = APP_GRAY;

// CheckboxRadius

  // For iOS
  export const CHECKBOX_RADIUS_IOS = 13;
  export const CHECKBOX_BORDER_WIDTH_IOS = 1;
  export const CHECKBOX_PADDING_LEFT_IOS = 4;
  export const CHECKBOX_PADDING_BOTTOM_IOS = 0;
  export const CHECKBOX_ICON_SIZE_IOS = 21;
  export const CHECKBOX_FONT_SIZE_IOS = (23 / 0.9);
  export const CHECKBOX_ICON_MARGIN_TOP_IOS = undefined;

  // for Android
  export const CHECKBOX_RADIUS_ANDROID = 0;
  export const CHECKBOX_BORDER_WIDTH_ANDROID = 2;
  export const CHECKBOX_PADDING_LEFT_ANDROID = 2;
  export const CHECKBOX_PADDING_BOTTOM_ANDROID = 5;
  export const CHECKBOX_ICON_SIZE_ANDROID = 14;
  export const CHECKBOX_FONT_SIZE_ANDROID = 18;
  export const CHECKBOX_ICON_MARGIN_TOP_ANDROID = 1;

  // common
  export const CHECKBOX_BACKGROUND_COLOR = APP_BLUE;
  export const CHECKBOX_BORDER_COLOR = APP_BLUE;
  export const CHECKBOX_SIZE = 20;
  export const CHECKBOX_TICK_COLOR = '#fff';


// Footer

  // for iOS
  export const FOOTER_HEIGHT_IOS = 55;
  export const FOOTER_DEFAULT_BACKGROUND_IOS = APP_BLUE;

  // for Android
  export const FOOTER_HEIGHT_ANDROID = 55;
  export const FOOTER_DEFAULT_BACKGROUND_ANDROID = APP_BLUE;

// FooterTab

  // for iOS

  export const TAB_TEXT_COLOR_IOS = APP_WHITE;
  export const TAB_TEXT_SIZE_IOS = 14;
  export const TAB_ACTIVE_IOS = '#fff';
  export const STAB_ACTIVE_TEXT_COLOR_IOS = '#007aff';
  export const TAB_ACTIVE_TEXT_COLOR_IOS = '#fff';
  export const TAB_ACTIVE_BACKGROUND_COLOR_IOS = APP_BLUE;

  // for Android

  export const TAB_TEXT_COLOR_ANDROID = APP_WHITE;
  export const TAB_TEXT_SIZE_ANDROID = 11;
  export const TAB_ACTIVE_ANDROID = '#fff';
  export const STAB_ACTIVE_TEXT_COLOR_ANDROID = '#007aff';
  export const TAB_ACTIVE_TEXT_COLOR_ANDROID = '#fff';
  export const TAB_ACTIVE_BACKGROUND_COLOR_ANDROID = APP_BLUE;

// Tab

  // for iOS
  export const TAB_DEFAULT_BACKGROUND_IOS = APP_BLUE;

  // for Android
  export const TAB_DEFAULT_BACKGROUND_ANDROID = APP_BLUE;


// Header

  // for iOS
  export const TOOLBAR_BUTTON_COLOR_IOS = APP_WHITE;
  export const TOOLBAR_DEFAULT_BACKGROUND_IOS = APP_BLUE;
  export const TOOLBAR_HEIGHT_IOS = 64;
  export const TOOLBAR_ICON_SIZE_IOS = 20;
  export const TOOLBAR_SEARCH_ICONSIZE_IOS = 20;
  export const TOOLBAR_INPUT_COLOR_IOS = APP_WHITE;
  export const TOOLBAR_SEARCH_BAR_HEIGHT_IOS = 30;
  export const TOOLBAR_TEXT_COLOR_IOS = APP_WHITE;
  export const TOOLBAR_BORDER_IOS = '#a7a6ab';
  export const STATUS_BAR_IOS = 'light-content';

  // for Android
  export const TOOLBAR_BUTTON_COLOR_ANDROID = APP_WHITE;
  export const TOOLBAR_DEFAULT_BACKGROUND_ANDROID = APP_BLUE;
  export const TOOLBAR_HEIGHT_ANDROID = 56;
  export const TOOLBAR_ICON_SIZE_ANDROID = 22;
  export const TOOLBAR_SEARCH_ICONSIZE_ANDROID = 23;
  export const TOOLBAR_INPUT_COLOR_ANDROID = APP_WHITE;
  export const TOOLBAR_SEARCH_BAR_HEIGHT_ANDROID = 40;
  export const TOOLBAR_TEXT_COLOR_ANDROID = APP_WHITE;
  export const TOOLBAR_BORDER_ANDROID = '#3F51B5';
  export const STATUS_BAR_ANDROID = 'light-content';


// Header Title

  // for iOS
  export const TITLE_FONT_FAMILY_IOS = 'System';
  export const TITLE_FONT_SIZE_IOS = 17;
  export const TITLE_FONT_COLOR_IOS = APP_WHITE;
  export const SUBTITLE_FONT_SIZE_IOS = 12;
  export const SUBTITLE_COLOR_IOS = '#8e8e93';

  // for Android
  export const TITLE_FONT_FAMILY_ANDROID = 'Roboto_medium';
  export const TITLE_FONT_SIZE_ANDROID = 19;
  export const TITLE_FONT_COLOR_ANDROID = APP_WHITE;
  export const SUBTITLE_FONT_SIZE_ANDROID = 14;
  export const SUBTITLE_COLOR_ANDROID = '#FFF';


// Icon

  // for iOS
  export const ICON_FONT_SIZE_IOS = 30;
  export const ICON_HEADER_SIZE_IOS = 33;

  // for Android
  export const ICON_FONT_SIZE_ANDROID = 28;
  export const ICON_HEADER_SIZE_ANDROID = 24;

  export const ICON_FAMILY = 'Ionicons';
  export const ICON_MARGIN = 7;


// TextInput

  export const TEXT_INPUT_MARGIN_BOTTOM = 10;
  export const TEXT_INPUT_HEIGHT = 50;
  export const TEXT_INPUT_PADDING_LEFT = 5;
  export const INPUT_FONT_SIZE = 17;

// TextInput Group

  export const INPUT_BORDER_COLOR = APP_LIGHT_GRAY;
  export const INPUT_SUCCESS_BORDER_COLOR = '#2b8339';
  export const INPUT_ERROR_BORDER_COLOR = '#ed2f2f';

// List

  export const LIST_BORDER_COLOR = APP_LIGHT_GRAY;
  export const LIST_DIVIDER_BACKGROUND = APP_BLUE;
  export const LIST_ITEM_HEIGHT = 45;
  export const LIST_BUTTON_UNDERLAY_COLOR = '#DDD';
  export const LIST_ITEM_PADDING_IOS = 10;
  export const LIST_ITEM_PADDING_ANDROID = 12;
  export const LIST_NOTE_COLOR =  '#808080';
  export const LIST_NOTE_SIZE =  13;


// Radio

  // for iOS
  export const RADIO_SIZE_IOS = 25;
  export const RADIO_LINE_HEIGHT_IOS = 29;

  // for Android
  export const RADIO_SIZE_ANDROID = 23;
  export const RADIO_LINE_HEIGHT_ANDROID = 24;

  //common
  export const RADIO_SELECTED_COLOR = '#3F51B5';
  export const RADIO_COLOR = '#7e7e7e';


// Fab

  export const FAB_TEXT_COLOR = APP_WHITE;
  export const FAB_TEXT_BACKGROUND_COLOR = APP_BLACK;

// Input Group Rounded

  export const INPUT_GROUP_ROUNDED_BORDER = 30;

// Spinner

  export const DEFAULT_SPINNER_COLOR = '#45D56E';
  export const INVERSE_SPINNER_COLOR = '#1A191B';

// ProgressBar

  export const DEFAULT_PROGRESS_COLOR = '#E4202D';
  export const INVERSE_PROGRESS_COLOR = '#1A191B';
