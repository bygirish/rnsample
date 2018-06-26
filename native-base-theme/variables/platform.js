import color from 'color';
//import * as appStyle from '../../appStyle/appStyle';
import * as appStyle from '../../appstyleguide/appstyleguide';

import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;

export default {
  platformStyle,
  platform,
    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: appStyle.BADGE_BACKGROUND_COLOR,
  badgeColor: appStyle.BADGE_COLOR,
    // New Variable
  badgePadding: (platform === 'ios') ? appStyle.BADGE_PADDING_IOS : appStyle.BADGE_PADDING_ANDROID,

    // Button
  btnFontFamily: (platform === 'ios') ? appStyle.BUTTON_FONT_STYLE_IOS : appStyle.BUTTON_FONT_STYLE_ANDROID,
  btnDisabledBg: appStyle.BUTTON_DISABLED_BACKGROUND, //'#d5b5b5',
  btnDisabledClr: appStyle.BUTTON_DISABLED_CLEAR,
  borderRadiusBase: (platform === 'ios') ? appStyle.BUTTON_RADIUS_IOS : appStyle.BUTTON_RADIUS_ANDROID,

  // CheckBox
  CheckboxRadius: (platform === 'ios') ? appStyle.CHECKBOX_RADIUS_IOS : appStyle.CHECKBOX_RADIUS_ANDROID,
  CheckboxBorderWidth: (platform === 'ios') ? appStyle.CHECKBOX_BORDER_WIDTH_IOS : appStyle.CHECKBOX_BORDER_WIDTH_ANDROID,
  CheckboxPaddingLeft: (platform === 'ios') ? appStyle.CHECKBOX_PADDING_LEFT_IOS : appStyle.CHECKBOX_PADDING_LEFT_ANDROID,
  CheckboxPaddingBottom: (platform === 'ios') ? appStyle.CHECKBOX_PADDING_BOTTOM_IOS : appStyle.CHECKBOX_PADDING_BOTTOM_ANDROID,
  CheckboxIconSize: (platform === 'ios') ? appStyle.CHECKBOX_ICON_SIZE_IOS : appStyle.CHECKBOX_ICON_SIZE_ANDROID,
  CheckboxIconMarginTop: (platform === 'ios') ? appStyle.CHECKBOX_ICON_MARGIN_TOP_IOS : appStyle.CHECKBOX_ICON_MARGIN_TOP_ANDROID,
  CheckboxFontSize: (platform === 'ios') ? appStyle.CHECKBOX_FONT_SIZE_IOS : appStyle.CHECKBOX_FONT_SIZE_ANDROID,
  DefaultFontSize: appStyle.TEXT_SIZE,
  //  checkboxBgColor: '#039BE5',
  checkboxBgColor: appStyle.CHECKBOX_BACKGROUND_COLOR,
  checkboxBorderColor: appStyle.CHECKBOX_BORDER_COLOR,
  checkboxSize: appStyle.CHECKBOX_SIZE,
  checkboxTickColor: appStyle.CHECKBOX_TICK_COLOR,


  // Segment
  segmentBackgroundColor: (platform === 'ios') ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: (platform === 'ios') ? '#007aff' : '#fff',
  segmentTextColor: (platform === 'ios') ? '#007aff' : '#fff',
  segmentActiveTextColor: (platform === 'ios') ? '#fff' : '#3F51B5',
  segmentBorderColor: (platform === 'ios') ? '#007aff' : '#fff',
  segmentBorderColorMain: (platform === 'ios') ? '#a7a6ab' : '#3F51B5',

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (platform === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: appStyle.CARD_BACKGROUND_COLOR,


      // Color
//  brandPrimary: (platform === 'ios') ? '#007aff' : '#3F51B5',
  brandPrimary: (platform === 'ios') ? appStyle.BUTTON_PRIMARY_IOS : appStyle.BUTTON_PRIMARY_ANDROID,   // For App Wide Button Colors
  brandInfo: (platform === 'ios') ? appStyle.BUTTON_INFO_IOS : appStyle.BUTTON_INFO_ANDROID,
  brandSuccess: (platform === 'ios') ? appStyle.BUTTON_SUCCESS_IOS : appStyle.BUTTON_SUCCESS_ANDROID,
  brandDanger: (platform === 'ios') ? appStyle.BUTTON_DANGER_IOS : appStyle.BUTTON_DANGER_ANDROID,
  brandWarning: (platform === 'ios') ? appStyle.BUTTON_WARNING_IOS : appStyle.BUTTON_WARNING_ANDROID,
  brandSidebar: (platform === 'ios') ? appStyle.BUTTON_SIDEBAR_IOS : appStyle.BUTTON_SIDEBAR_ANDROID,


    // Font
  fontFamily: (platform === 'ios') ?  appStyle.FONT_FAMILY_IOS : appStyle.FONT_FAMILY_ANDROID,
  fontSizeBase: appStyle.FONT_SIZE_BASE,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


  // Footer
  footerHeight: (platform === 'ios') ? appStyle.FOOTER_HEIGHT_IOS : appStyle.FOOTER_HEIGHT_ANDROID ,
  // footerDefaultBg: (platform === 'ios') ? '#F8F8F8' : '#4179F7',
  footerDefaultBg: (platform === 'ios') ? appStyle.FOOTER_DEFAULT_BACKGROUND_IOS : appStyle.FOOTER_DEFAULT_BACKGROUND_ANDROID ,  // Manage Footer Backgrounf color here


    // FooterTab
//  tabBarTextColor: (platform === 'ios') ? '#6b6b6b' : '#b3c7f9',
  tabBarTextColor: (platform === 'ios') ? appStyle.TAB_TEXT_COLOR_IOS : appStyle.TAB_TEXT_COLOR_ANDROID,
  tabBarTextSize: (platform === 'ios') ? appStyle.TAB_TEXT_SIZE_IOS : appStyle.TAB_TEXT_SIZE_ANDROID,
//  activeTab: (platform === 'ios') ? '#007aff' : '#fff',
  activeTab: (platform === 'ios') ? appStyle.TAB_ACTIVE_IOS : appStyle.TAB_ACTIVE_ANDROID,
  sTabBarActiveTextColor: (platform === 'ios') ? appStyle.STAB_ACTIVE_TEXT_COLOR_IOS : appStyle.STAB_ACTIVE_TEXT_COLOR_ANDROID,
//  tabBarActiveTextColor: (platform === 'ios') ? '#007aff' : '#fff',
  tabBarActiveTextColor: (platform === 'ios') ? appStyle.TAB_ACTIVE_TEXT_COLOR_IOS : appStyle.TAB_ACTIVE_TEXT_COLOR_ANDROID,
//  tabActiveBgColor: (platform === 'ios') ? '#cde1f9' : '#3F51B5',
  tabActiveBgColor: (platform === 'ios') ? appStyle.TAB_ACTIVE_BACKGROUND_COLOR_IOS : appStyle.TAB_ACTIVE_BACKGROUND_COLOR_ANDROID,



    // Tab
  tabDefaultBg: (platform === 'ios') ? appStyle.TAB_DEFAULT_BACKGROUND_IOS : appStyle.TAB_DEFAULT_BACKGROUND_ANDROID,
  topTabBarTextColor: (platform === 'ios') ? '#b3c7f9' : '#b3c7f9',
  topTabBarActiveTextColor: (platform === 'ios') ? '#fff' : '#fff',
  topTabActiveBgColor: (platform === 'ios') ? '#cde1f9' : undefined,
  topTabBarBorderColor: (platform === 'ios') ? '#fff' : '#fff',
  topTabBarActiveBorderColor: (platform === 'ios') ? '#fff' : '#fff',


    // Header
//  toolbarBtnColor: (platform === 'ios') ? '#007aff' : '#fff',
  toolbarBtnColor: (platform === 'ios') ? appStyle.TOOLBAR_BUTTON_COLOR_IOS : appStyle.TOOLBAR_BUTTON_COLOR_ANDROID,
//  toolbarDefaultBg: (platform === 'ios') ? '#F8F8F8' : '#3F51B5',
  toolbarDefaultBg: (platform === 'ios') ? appStyle.TOOLBAR_DEFAULT_BACKGROUND_IOS : appStyle.TOOLBAR_DEFAULT_BACKGROUND_ANDROID,
  toolbarHeight: (platform === 'ios') ? appStyle.TOOLBAR_HEIGHT_IOS : appStyle.TOOLBAR_HEIGHT_ANDROID,
  toolbarIconSize: (platform === 'ios') ? appStyle.TOOLBAR_ICON_SIZE_IOS : appStyle.TOOLBAR_ICON_SIZE_ANDROID,
  toolbarSearchIconSize: (platform === 'ios') ? appStyle.TOOLBAR_SEARCH_ICONSIZE_IOS : appStyle.TOOLBAR_SEARCH_ICONSIZE_ANDROID,
//  toolbarInputColor: (platform === 'ios') ? '#CECDD2' : '#fff',
  toolbarInputColor: (platform === 'ios') ? appStyle.TOOLBAR_INPUT_COLOR_IOS : appStyle.TOOLBAR_INPUT_COLOR_ANDROID,
  searchBarHeight: (platform === 'ios') ? appStyle.TOOLBAR_SEARCH_BAR_HEIGHT_IOS : appStyle.TOOLBAR_SEARCH_BAR_HEIGHT_ANDROID,
  toolbarInverseBg: '#222',
//  toolbarTextColor: (platform === 'ios') ? '#000' : '#fff',
  toolbarTextColor: (platform === 'ios') ? appStyle.TOOLBAR_TEXT_COLOR_IOS : appStyle.TOOLBAR_TEXT_COLOR_ANDROID,
  toolbarDefaultBorder: (platform === 'ios') ? appStyle.TOOLBAR_BORDER_IOS : appStyle.TOOLBAR_BORDER_ANDROID,
//  iosStatusbar: (platform === 'ios') ? 'dark-content' : 'light-content',
  iosStatusbar: (platform === 'ios') ? appStyle.STATUS_BAR_IOS : appStyle.STATUS_BAR_ANDROID,
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: appStyle.ICON_FAMILY,
  iconFontSize: (platform === 'ios') ? appStyle.ICON_FONT_SIZE_IOS : appStyle.ICON_FONT_SIZE_ANDROID,
  iconMargin: appStyle.ICON_MARGIN,
  iconHeaderSize: (platform === 'ios') ? appStyle.ICON_HEADER_SIZE_IOS : appStyle.ICON_HEADER_SIZE_ANDROID,


    // InputGroup
  inputFontSize: appStyle.INPUT_FONT_SIZE,
  //inputBorderColor: '#D9D5DC',
  inputBorderColor: appStyle.INPUT_BORDER_COLOR,
  inputSuccessBorderColor: appStyle.INPUT_SUCCESS_BORDER_COLOR,
  inputErrorBorderColor: appStyle.INPUT_ERROR_BORDER_COLOR,

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: appStyle.TEXT_INPUT_MARGIN_BOTTOM,
  inputHeightBase: appStyle.TEXT_INPUT_HEIGHT,
  inputPaddingLeft: appStyle.TEXT_INPUT_PADDING_LEFT,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (platform === 'ios') ? 37 : 30,
  lineHeight: (platform === 'ios') ? 20 : 24,


    // List
//  listBorderColor: '#c9c9c9',
  listBorderColor: appStyle.LIST_BORDER_COLOR,
//  listDividerBg: '#f4f4f4',
  listDividerBg: appStyle.LIST_DIVIDER_BACKGROUND,
  listItemHeight: appStyle.LIST_ITEM_HEIGHT,
  listBtnUnderlayColor: appStyle.LIST_BUTTON_UNDERLAY_COLOR,

    // Card
  cardBorderColor: '#ccc',

    // Changed Variable
  listItemPadding: (platform === 'ios') ? appStyle.LIST_ITEM_PADDING_IOS : appStyle.LIST_ITEM_PADDING_ANDROID,

  listNoteColor: appStyle.LIST_NOTE_COLOR,
  listNoteSize: appStyle.LIST_NOTE_SIZE,


    // Progress Bar
  defaultProgressColor: appStyle.DEFAULT_PROGRESS_COLOR,
  inverseProgressColor: appStyle.INVERSE_PROGRESS_COLOR,


    // Radio Button
  radioBtnSize: (platform === 'ios') ? appStyle.RADIO_SIZE_IOS : appStyle.RADIO_SIZE_ANDROID,
  radioSelectedColorAndroid: appStyle.RADIO_SELECTED_COLOR,

    // New Variable
  radioBtnLineHeight: (platform === 'ios') ? appStyle.RADIO_LINE_HEIGHT_IOS : appStyle.RADIO_LINE_HEIGHT_ANDROID,

  radioColor: appStyle.RADIO_COLOR,

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: appStyle.DEFAULT_SPINNER_COLOR,
  inverseSpinnerColor: appStyle.INVERSE_SPINNER_COLOR,


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: appStyle.TEXT_COLOR,
  inverseTextColor: '#fff',
  noteFontSize: appStyle.NOTE_TEXT_SIZE,
  noteFontColor: appStyle.NOTE_FONT_COLOR,


    // Title
  titleFontfamily: (platform === 'ios') ? appStyle.TITLE_FONT_FAMILY_IOS: appStyle.TITLE_FONT_FAMILY_ANDROID,
  titleFontSize: (platform === 'ios') ? appStyle.TITLE_FONT_SIZE_IOS : appStyle.TITLE_FONT_SIZE_ANDROID,
  subTitleFontSize: (platform === 'ios') ? appStyle.SUBTITLE_FONT_SIZE_IOS : appStyle.SUBTITLE_FONT_SIZE_ANDROID,
  subtitleColor: (platform === 'ios') ? appStyle.SUBTITLE_COLOR_IOS : appStyle.SUBTITLE_COLOR_ANDROID,

    // New Variable
//  titleFontColor: (platform === 'ios') ? '#000' : '#FFF',
  titleFontColor: (platform === 'ios') ? appStyle.TITLE_FONT_COLOR_IOS : appStyle.TITLE_FONT_COLOR_ANDROID,


    // Other

  borderWidth: (1/PixelRatio.getPixelSizeForLayoutSize(1)),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: appStyle.INPUT_GROUP_ROUNDED_BORDER,
};
