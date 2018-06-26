import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import React, { Component } from 'react';

import { Spinner, Header, Body, Container } from 'native-base';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS, getCurrentDate, getCurrentTime, getDayDifference, redirectToAppStore  } from '../../../utils';

import * as appstyleguide from '../../../../appstyleguide/appstyleguide';

import { EwH4Text,EwH3Text,EwH2Text,EwCard,EwAutocompleteInput,EwRatings,
   EwFloatingLabel, Reveiw, EwModal, EwBar, EwH1Text, EwButton, EwScreenTitle,
   EwH2LightText, EwIcon } from '../../../utils/ewcomponents';

import EwNPSScore from './ewnpsscore';

import { SAD_SMILEY_ICON, THUMBS_UP_ICON } from '../../../utils/ewimages';

import { GoogleAnalyticController, googleAnalyticController } from '../../../GoogleAnalyticController';

import { getAppRatingConfiguration, updateUserRating, updatePromptTransactionDate, clearCommonStateData } from '../../../services/common/commonactions';

const FILE_NAME = "appratingmodal.js";

import * as dashboardConstants from '../dashboardutils';
import * as modules from '../../../utils/modulelist';

import styles from '../styles/ewdashboardstyle';

/*
Tracking Actions
*/
let tracker = googleAnalyticController.getGoogleAnlyticTracker();

const SCREEN_CATEGORY = modules.MODULE_RATING;

class AppRatingModal extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        isAppRatingModalVisible: true,
        rating: dashboardConstants.DEFAULT_RATING,
        reason: "",
        isReviewSubmitted: false,
        isSecondaryDialogueShown: false,
        npsRating: null

      };

      this.state = this.initialState;

  }

  componentWillMount() {

     console.log("Inside componentWillMount");

     if(this.props.firstPromptTransactionRange == null) {

       this.props.getAppRatingConfiguration(null);
     }

  }

  componentWillReceiveProps(nextProps) {

    console.log( "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    /* Screen Pre-loading Data */

    //To get app rating configuration from server
    if(nextProps.updateUserRatingStatusData != null && nextProps.updateUserRatingStatusError == null ) {

      updateReveiwSubmitted = this.state.isReviewSubmitted;
      updatedAppRatingModalVisible = this.state.isAppRatingModalVisible;

      if(nextProps.updateUserRatingStatusData.rating > 0 && !nextProps.updateUserRatingStatusData.app_store_redirected && !this.state.isSecondaryDialogueShown) {

        updatedAppRatingModalVisible = true,

        updateReveiwSubmitted = true;

      }

      this.setState({
        isReviewSubmitted: updateReveiwSubmitted,
        isAppRatingModalVisible: updatedAppRatingModalVisible
      });

      this.clearUpdateAppRatingReduxData();
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

    console.log("rating is", this.state.rating);

    console.log("app rating is ", this.state);

    return (

      <View>

        { this.userRatingModal() }
      </View>

    );

  }

  /*
  Tasks to do after initial Rendering
  */
  componentDidMount() {

    console.log( "In componentDidMount");

  }

  componentDidUpdate() {

    console.log("Inside componentDidUpdate");

    //if(this.props.pendingNeedToActData != null)
    //  this.getAppUpdateConfigurationFromServer(this.props.pendingNeedToActData.moduleSubscribed.moduleId);

  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    console.log("In componentWillUnmount");

  }

  clearUpdateAppRatingReduxData() {

    var params = {

      0: 'CLEAR_STATE_UPDATE_USER_RATING_DATA'
    };

    this.props.clearCommonStateData(params);
  }

  changeModalState () {

    this.setState({
      isAppRatingModalVisible: !this.state.isAppRatingModalVisible
    });

  }

  isRatingModelVisible() {

    var { firstPromptTransactionRange, promptTransactionRange, rating, totalActivityCount,
      promptTransactionDate, promptDuration } = this.props;

    console.log("insidepromptTransactionDate",rating);

    //If no rating exists
    if(rating == 0) {
      console.log("insidepromptTransactionDate",promptTransactionDate);

      // If prompt has not been shown
      if(promptTransactionDate == null) {

        console.log("insidepromptTransactionDate",totalActivityCount,firstPromptTransactionRange);

        //If activity count is greater than equal to firstprompttransactionrange
        if(totalActivityCount >= firstPromptTransactionRange) {

          return true;

        }

      }
      //If prompt has been shown
      //Check if totalCount is multiple of prompt range and current date is greater than last prompt date
      else {

        var currentTime = getCurrentTime();
        console.log("insidepromptTransactionDate",totalActivityCount,promptTransactionRange,new Date(currentTime),new Date(promptTransactionDate),promptDuration);

        if(totalActivityCount != 0 && (totalActivityCount % promptTransactionRange == 0 ) && (currentTime - promptTransactionDate > promptDuration) ) {

          return true;
        }

      }

    }

    return false;

  }

  userRatingModal() {

    var { isReviewSubmitted, rating } = this.state;
    var { rating } = this.props;

    if(isReviewSubmitted) {

    //  if(rating >= dashboardConstants.MIN_STAR_RATING_REQUIRED ) {

        if(this.state.isAppRatingModalVisible) {

          return (

            <EwModal
              onBackButtonPress = { () => this.changeModalState() }
              isModalVisible = { this.state.isAppRatingModalVisible }
              onBackdropPress = { () => this.changeModalState() }
              >

                { this.renderRatingModalView() }

            </EwModal>

          );

        }

      //}

    }
    else {

      if(this.isRatingModelVisible()) {

        return (

          <EwModal
            onBackButtonPress = { () => console.log("onBackdropPress") }
            isModalVisible = { this.state.isAppRatingModalVisible }
            onBackdropPress = { () => console.log("onBackdropPress") }
            >

              { this.renderRatingModalView() }

          </EwModal>

        );
      }

    }

  }



  /*To show reason in case of rating is less than 4 */

  showReason() {

    if(this.isNegativeRating()) {

      return (

        <View>

          <EwH1Text
            text = { dashboardConstants.RATING_NEGATIVE_BODY_H2 }
            customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}
          />

          <EwFloatingLabel
            label = "Feedback"
            placeholderlabel = " Enter Your Feedback"
            autoCorrect = { false }
            onChangeText = {(reason) => this.setState({ reason })}
            value = { this.state.reason }
            customViewStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginBottom: appstyleguide.DEFAULT_BOTTOM_MARGIN }}

          />

        </View>



      );

    }

  }

  doLocalValidation() {

    var { rating, reason } = this.state;

    console.log("propsreceived",this.props);

  /*  if(this.isNegativeRating() && reason.trim() == '') {

      this.props.showAlertMessage('Please enter reason');

      return false;
    }*/

    return true;
  }

  /* To send rating to our server if rating is less than 4*/

  sendRatingToServer(action) {

    console.log("Inside sendRatingToServer");

    var { rating, reason, npsRating } = this.state;

    var { totalActivityCount } = this.props;

    currentDateTime = getCurrentTime();

    if(this.doLocalValidation()) {

      switch (action) {
        case dashboardConstants.SKIP_RATING:

          var params = {

            action: dashboardConstants.SKIP_RATING,
            skipTransactionValue: totalActivityCount,
            skipDate: currentDateTime

          };

          this.props.updateUserRating(params);
          this.props.updatePromptTransactionDate(currentDateTime);
          this.changeModalState();
          tracker.trackEvent(SCREEN_CATEGORY, 'rating skipped');

          break;

        case dashboardConstants.RATING_SUBMIT:

          var params = {

            action: dashboardConstants.RATING_SUBMIT,
            rating: rating,
            review: reason,
            npsRating: npsRating,
            reveiwDateTime: currentDateTime,
          };

          this.props.updateUserRating(params);
          this.props.updatePromptTransactionDate(currentDateTime);
          this.changeModalState();
          tracker.trackEvent(SCREEN_CATEGORY, 'rating submitted');

          break;

        case dashboardConstants.UPDATE_IS_APP_REDIRECTED_FLAG:

          var params = {

            action: dashboardConstants.UPDATE_IS_APP_REDIRECTED_FLAG,

          };

          this.props.updateUserRating(params);
          this.changeModalState();

          break;

        default:

      }

      if(this.state.isReviewSubmitted) {
        this.setState({
          isSecondaryDialogueShown: true
        });
      }

    }

  }

  isNegativeRating() {

    if(this.state.rating != dashboardConstants.DEFAULT_RATING && this.state.rating < dashboardConstants.MIN_STAR_RATING_REQUIRED)
      return true;

    return false;

  }

  renderUserReveiwSumbitted() {

    if(this.isNegativeRating()) {

      return (

        <View >

          { this.renderRatingIconText() }

          <EwH2LightText
            text = {  dashboardConstants.RATING_NEGATIVE_BODY  }
            customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}
          />

          <EwNPSScore
              initialState = { this.state.npsRating }
              updateParentState = { (componentState) => this.updateRatingModalState(dashboardConstants.NPS_SCORE_COMPONENT_ID,componentState) }

          />

      		 { this.showReason() }

        </View>

      );

    }

    else {

      return (

        <View >

          { this.renderRatingIconText() }

          <EwH2LightText
            text = {  dashboardConstants.RATING_POSITIVE_BODY }
            customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}
          />

          <EwH1Text
            text = { dashboardConstants.RATING_POSITIVE_BODY_H2 }
            customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginBottom: appstyleguide.DEFAULT_BOTTOM_MARGIN }}
          />

        </View>

      );

    }


  }

  updateIsUserRedirectedFlagOnServer() {

    this.sendRatingToServer(dashboardConstants.UPDATE_IS_APP_REDIRECTED_FLAG);

    redirectToAppStore();
  }


  renderRatingModalView() {

    var { rating, isReviewSubmitted } = this.state;

    console.log("Inside renderRatingModalView");

    return (

      <View>
        {
         !isReviewSubmitted ?

          <Header >
            <Body style = {{ alignItems: "center", justifyContent: "center" }}>

              <EwScreenTitle
                  text = { isReviewSubmitted ? dashboardConstants.RATING_SUBMIT_HEADING : dashboardConstants.RATING_HEADING }
              />

            </Body>

          </Header> : null

        }

        <View style = {{ margin: appstyleguide.DEFAULT_MARGIN }}>

          {
            isReviewSubmitted ?
              this.renderUserReveiwSumbitted() :
              this.renderUserRatingView()
          }

          <View style = {{ margin: appstyleguide.DEFAULT_TOP_MARGIN, flexDirection: "row", justifyContent: "space-around" }}>

            <EwButton
              label = { dashboardConstants.SKIP_BUTTON_LABEL }
              customStyle = {{ backgroundColor: appstyleguide.APP_GRAY }}
              onButonClicked = { () => this.sendRatingToServer(dashboardConstants.SKIP_RATING) }
            />

            <EwButton
              label = { (isReviewSubmitted && !this.isNegativeRating()) ? dashboardConstants.RATE_US_BUTTON_LABEL: dashboardConstants.SUBMIT_BUTTON_LABEL  }
              onButonClicked = { () => ((isReviewSubmitted && !this.isNegativeRating()) ? this.updateIsUserRedirectedFlagOnServer() : this.sendRatingToServer(dashboardConstants.RATING_SUBMIT) )  }
            />

          </View>

        </View>
      </View>

    );

  }

  updateRatingModalState(componentId, componentState) {

    switch (componentId) {

      case dashboardConstants.NPS_SCORE_COMPONENT_ID:

        this.setState({

          npsRating: componentState,

        });

        break;
      default:

    }

  }

  renderUserRatingView() {

    var { npsRating } = this.state;

    return(

      <View>

         <EwH1Text
              text = { dashboardConstants.RATING_BODY }
          />

        <EwH2LightText
          text = { dashboardConstants.RATING_BODY_H2 }
          customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}
        />

       { this.renderRatingsComponent() }

      </View>

    );

  }

  renderRatingIconText() {

    iconSource = this.isNegativeRating() ? SAD_SMILEY_ICON : THUMBS_UP_ICON;

    return (

      <View style = {{ alignItems: "center", justifyContent: "center"}}>
        <EwIcon
          iconSource = { iconSource }
          customIconStyle = { styles.iconStyle }
        />
        <EwH2Text
          text = { this.isNegativeRating() ? "Oh No!" : "Awesome" }
          customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN }}
        />
      </View>

    );

  }

  renderRatingsComponent() {

    return (

      <View style = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginBottom: appstyleguide.DEFAULT_BOTTOM_MARGIN, alignItems: "center" , justifyContent: "center"}}>

        <EwRatings
          rating = { this.state.rating }
          isRatingActive = { true }
          onRatingChanged = { (rating) => this.setState({rating: rating}) }
          />

      </View>

    );
  }

}

function bindActions(dispatch) {

  console.log(FILE_NAME, "In bindActions Method");

  return {

    getAppRatingConfiguration: (params)=> dispatch(getAppRatingConfiguration(params)),
    updateUserRating: (params) => dispatch(updateUserRating(params)),
    updatePromptTransactionDate : (params) => dispatch(updatePromptTransactionDate(params)),
    clearCommonStateData: (params) => dispatch(clearCommonStateData(params)),
  };
}

function mapStateToProps(state){

  console.log("State Updated state is -");

  console.log(state);

  return {
    sessionToken: state.auth.sessionToken,
    isLoggedIn: state.auth.isLoggedIn,

    firstPromptTransactionRange : state.common.firstPromptTransactionRange,
    promptTransactionRange : state.common.promptTransactionRange,
    promptTransactionDate : state.common.promptTransactionDate,
    promptDuration : state.common.promptDuration,
    totalActivityCount : state.common.totalActivityCount,
    rating : state.common.rating,

    updateUserRatingStatusData: state.common.updateUserRatingStatusData,
    updateUserRatingStatusError: state.common.updateUserRatingStatusError,

  };
}

export default connect(mapStateToProps, bindActions) (AppRatingModal);
