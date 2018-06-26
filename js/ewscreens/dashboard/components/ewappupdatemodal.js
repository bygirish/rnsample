import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList, AppState } from 'react-native';
import { connect } from 'react-redux';

import React, { Component } from 'react';

import { Spinner } from 'native-base';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS, getCurrentDate, getCurrentTime, getDayDifference, redirectToAppStore  } from '../../../utils';

import * as appstyleguide from '../../../../appstyleguide/appstyleguide';

import { EwH4Text,EwH3Text,EwCard,EwAutocompleteInput,
   EwFloatingLabel, Reveiw, EwModal, EwBar, EwH1Text, EwButton } from '../../../utils/ewcomponents';

import { getAppUpdateConfiguration, updateAppUpdateApiConfigurationTimestamp, updateLastPromptTimestamp, clearCommonStateData } from '../../../services/common/commonactions';

//import * as expenseConstants from '../../expenseutils';

const FILE_NAME = "appupdatemodal.js";

class AppUpdateModal extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        appUpdateConfiguartion: null,
        isAppUpdateModalVisible: false,

      };

      this.state = this.initialState;

  }

  componentWillMount() {

     console.log("Inside componentWillMount");

  }

  componentWillReceiveProps(nextProps) {

    console.log( "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    /* Screen Pre-loading Data */

    //To get app update configuration from server
    if(nextProps.appUpdateConfigurationData != null && nextProps.appUpdateConfigurationError == null ) {

      var { isNewUpdateAvailable } = nextProps.appUpdateConfigurationData;

      var updatedModalVisibility = this.state.isAppUpdateModalVisible;

      if(isNewUpdateAvailable)
        updatedModalVisibility = true;

      if(updatedModalVisibility)
        this.props.updateLastPromptTimestamp(null);

      this.setState({

        appUpdateConfiguartion : nextProps.appUpdateConfigurationData,
        isAppUpdateModalVisible: updatedModalVisibility
      });

      this.clearAppUpdateReduxData();

    }

    if(nextProps.appUpdateConfigurationData == null && nextProps.appUpdateConfigurationError != null ) {

    }

  }

  /*
  Re-rendering is required or not
  */
  shouldComponentUpdate(nextProps, nextStat) {

    console.log("In shouldComponentUpdate");
    console.log("New Props are - ", nextProps);
    console.log("New State is - ", nextStat);

    return true;
  }

  componentWillUpdate() {

      console.log("In componentWillUpdate Method");

  }

  render() {

    return (

      <View>
        { this.renderAppUpdateModal() }
      </View>

    );

  }

  /*
  Tasks to do after initial Rendering
  */
  componentDidMount() {

    console.log( "In componentDidMount");

    AppState.addEventListener('change', this._handleAppStateChange);

  }

  componentDidUpdate() {

    console.log("Inside componentDidUpdate");

    if(this.props.pendingNeedToActData != null)
      this.getAppUpdateConfigurationFromServer(this.props.pendingNeedToActData.moduleSubscribed.moduleId);


  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    console.log("In componentWillUnmount");

    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  clearAppUpdateReduxData() {

    var params = {

      0: 'CLEAR_STATE_APP_UPDATE_CONFIGURATION_DATA'
    };

    this.props.clearCommonStateData(params);
  }

  getAppUpdateConfigurationFromServer(modulesSubscribed) {

    //this.props.updateAppUpdateApiConfigurationTimestamp(null);

    if(this.isAppUpdateConfigurationRequired() ) {

      var params = {

        "modulesSubscribed" : modulesSubscribed
      };

      this.props.getAppUpdateConfiguration(params);
      this.props.updateAppUpdateApiConfigurationTimestamp(null);
    }


  }

  isAppUpdateConfigurationRequired() {

    var { appUpdateConfigurationApiTimestamp } = this.props;

    currentTime = new Date(getCurrentTime());

    console.log("appUpdateConfigurationApiTimestamp", appUpdateConfigurationApiTimestamp);

    // If first time
    if(appUpdateConfigurationApiTimestamp == null)
      return true;
    else {

      appUpdateConfigurationApiDate = new Date(appUpdateConfigurationApiTimestamp);

      var  days = getDayDifference(currentTime,appUpdateConfigurationApiDate);

      if(days >= 1)
        return true;

    }

    return false;
  }

  _handleAppStateChange = (nextAppState) => {

    /*if(nextAppState == "background") {

      if(this.state.isAppUpdateModalVisible) {

        this.changeModalState(false);
      }
    }

    if(nextAppState == "active") {
      console.log("Appstateis -",nextAppState, this.props);

      if(this.props.pendingNeedToActData != null)
        this.getAppUpdateConfigurationFromServer(this.props.pendingNeedToActData.moduleSubscribed.moduleId, true);

    }*/

   console.log("Appstateis -",nextAppState);
 }


  renderAppUpdateModal() {

    var { appUpdateConfiguartion, isAppUpdateModalVisible } = this.state;

    // If appUpdateConfiguartion webservice is not called then its value will be null
    // If update is available

    if(isAppUpdateModalVisible) {

      var { newUpdateDetails,isForceUpdateRequired } = appUpdateConfiguartion;

      return (

          <EwModal
            onBackButtonPress = { () => this.changeModalState(isForceUpdateRequired) }
            isModalVisible = { isAppUpdateModalVisible }
            onBackdropPress = { () => this.changeModalState(isForceUpdateRequired) }
            >

            <View style = {{ margin: appstyleguide.DEFAULT_MARGIN }}>

              <EwH1Text
                text = "Latest App Updates "
                customStyle = {{ alignSelf: "center", fontWeight: "bold" }}
              />

              <EwBar
                customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginBottom: appstyleguide.DEFAULT_BOTTOM_MARGIN }}
              />

            </View>

            <View style = {{ margin: appstyleguide.DEFAULT_MARGIN }}>
              {
                Object.keys(newUpdateDetails).map((key) =>

                  <EwH1Text
                    text = { newUpdateDetails[key] }
                  />
                )
              }

            </View>


            <View style = {{ flexDirection: "row", justifyContent: "space-around" }}>

              {
                !isForceUpdateRequired ? <EwButton
                  label = "Skip"
                  onButonClicked = { () => this.changeModalState(isForceUpdateRequired) }
                  customStyle = {{ margin: appstyleguide.DEFAULT_MARGIN }}
                /> : null

              }

              <EwButton
                label = "Update App"
                onButonClicked = { () => redirectToAppStore() }
                customStyle = {{ margin: appstyleguide.DEFAULT_MARGIN }}
              />

            </View>

          </EwModal>

      );

    }

  }

  changeModalState(isForceUpdateRequired) {

    if(isForceUpdateRequired !=null && !isForceUpdateRequired) {

      this.setState ({

        isAppUpdateModalVisible: !this.state.isAppUpdateModalVisible
      });

    }

  }

}

function bindActions(dispatch) {

  console.log(FILE_NAME, "In bindActions Method");

  return {

    getAppUpdateConfiguration: (params)=> dispatch(getAppUpdateConfiguration(params)),
    updateAppUpdateApiConfigurationTimestamp: (params)=> dispatch(updateAppUpdateApiConfigurationTimestamp(params)),
    updateLastPromptTimestamp: (params)=> dispatch(updateLastPromptTimestamp(params)),
    clearCommonStateData: (params) => dispatch(clearCommonStateData(params)),

  };
}

function mapStateToProps(state){

  console.log("State Updated state is -");

  console.log(state);

  return {
    sessionToken: state.auth.sessionToken,
    isLoggedIn: state.auth.isLoggedIn,

    appUpdateConfigurationData: state.common.appUpdateConfigurationData,
    appUpdateConfigurationError: state.common.appUpdateConfigurationError,

    pendingNeedToActData: state.needtoact.needToActData,

    appUpdateConfigurationApiTimestamp: state.common.appUpdateConfigurationApiTimestamp,

  };
}

export default connect(mapStateToProps, bindActions) (AppUpdateModal);
