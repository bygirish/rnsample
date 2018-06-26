import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import React, { Component } from 'react';

import { Spinner, Header, Body, Container } from 'native-base';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS, getCurrentDate, getCurrentTime, getDayDifference, redirectToAppStore  } from '../../../utils';

import * as appstyleguide from '../../../../appstyleguide/appstyleguide';

import { EwH4Text,EwH3Text,EwH2Text,EwCard,EwAutocompleteInput,EwRatings,
   EwFloatingLabel, Reveiw, EwModal, EwBar, EwH1Text, EwButton, EwScreenTitle,
   EwH2LightText, EwIcon } from '../../../utils/ewcomponents';

const FILE_NAME = "ewnpsscore.js";

import * as dashboardConstants from '../dashboardutils';
import styles from '../styles/ewdashboardstyle';

export default  class AppRatingModal extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        easeOfUse: dashboardConstants.DEFAULT_RATING,
        productFeatures: dashboardConstants.DEFAULT_RATING,
        supportHelpdesk: dashboardConstants.DEFAULT_RATING,
        uptimeAndSpeed: dashboardConstants.DEFAULT_RATING,

      };

      this.state = this.initialState;

  }

  componentWillMount() {

     console.log("Inside componentWillMount");

     if(this.props.initialState == null) {

       this.props.updateParentState(this.getNpsScoreObject());

     }

  }

  componentWillReceiveProps(nextProps) {

    console.log( "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    if(this.isStateChanged(nextProps.initialState)) {

      this.setState({

        easeOfUse : nextProps.initialState.easeOfUse,
        productFeatures: nextProps.initialState.productFeatures,
        supportHelpdesk: nextProps.initialState.supportHelpdesk,
        uptimeAndSpeed: nextProps.initialState.uptimeAndSpeed,

      });


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

    var { easeOfUse, productFeatures, supportHelpdesk, uptimeAndSpeed } = this.state;

    return (

      <View>

        <EwH1Text
          text = "Please help us by Rating us"
          customStyle = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginBottom: 5 }}
        />

      <View style = {{ backgroundColor: appstyleguide.APP_LIGHT_BLUE }}>
        <View style = {{ marginLeft: appstyleguide.DEFAULT_LEFT_MARGIN, marginBottom: appstyleguide.DEFAULT_LEFT_MARGIN }}>

          { this.renderRatingsComponent(dashboardConstants.EASE_USE_HEADING, easeOfUse, dashboardConstants.EASE_USE_ID) }
          { this.renderRatingsComponent(dashboardConstants.PRODUCT_FEATURES_HEADING, productFeatures, dashboardConstants.PRODUCT_FEATURES_ID) }
          { this.renderRatingsComponent(dashboardConstants.SUPPORT_HELPDESK_HEADING, supportHelpdesk, dashboardConstants.SUPPORT_HELPDESK_ID) }
          { this.renderRatingsComponent(dashboardConstants.UPTIME_SPEED_HEADING, uptimeAndSpeed, dashboardConstants.UPTIME_SPEED_ID) }

        </View>

        </View>


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

    if(this.isStateChanged(this.props.initialState) ) {

      console.log("updating master screen",this.getNpsScoreObject());

      this.props.updateParentState(this.getNpsScoreObject());

    }

  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    console.log("In componentWillUnmount");

  }

  doLocalValidation() {

    var { rating, reason } = this.state;

    console.log("propsreceived",this.props);

    /*if(this.isNegativeRating() && reason.trim() == '') {

      this.props.showAlertMessage('Please enter reason');

      return false;
    }*/

    return true;
  }

  renderRatingsComponent(heading, ratingValue, ratingId ) {

    return (

      <View style = {{ marginTop: appstyleguide.DEFAULT_TOP_MARGIN, flexDirection: "row" }}>

        <EwH2Text
          text = { heading }
          customStyle = {{ flex: 0.4, alignSelf: "center", marginLeft: 5 }}
        />

        <View style = {{ flex: 0.6, justifyContent: "center", alignItems: "center" }}>
          <EwRatings
            rating = { ratingValue }
            isRatingActive = { ratingValue == dashboardConstants.DEFAULT_RATING }
            onRatingChanged = { (rating) => this.changeRating(rating,ratingId) }
            />
        </View>

      </View>

    );
  }

  changeRating(rating,ratingId) {

    switch (ratingId) {

      case dashboardConstants.EASE_USE_ID:

        this.setState({

          easeOfUse: rating
        });

        break;

      case dashboardConstants.PRODUCT_FEATURES_ID:

        this.setState({

          productFeatures: rating
        });

        break;

      case dashboardConstants.SUPPORT_HELPDESK_ID:

        this.setState({

          supportHelpdesk: rating
        });

        break;

      case dashboardConstants.UPTIME_SPEED_ID:

        this.setState({

          uptimeAndSpeed: rating
        });

        break;

      default:

    }

  }

  isStateChanged(initialState) {

    if(JSON.stringify(initialState) != JSON.stringify(this.getNpsScoreObject()))
      return true;

    return false;

  }

  getNpsScoreObject() {

    var npsScoreStateObject = {

      easeOfUse: this.state.easeOfUse,
      productFeatures: this.state.productFeatures,
      supportHelpdesk: this.state.supportHelpdesk,
      uptimeAndSpeed: this.state.uptimeAndSpeed,

    };

    return npsScoreStateObject;


  }

}
