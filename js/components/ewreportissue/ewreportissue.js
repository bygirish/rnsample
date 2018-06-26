import { Image, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';

import { REPORT_ISSUE_ICON } from '../../utils/ewimages';
import { IS_REPORT_ERROR_FLAG_VISIBLE } from '../../utils';

import EwIcon from '../ewicon/ewicon';
import { Actions, ActionConst } from 'react-native-router-flux';

const FILE_NAME = "ewreportissue.js";

class EwReportIssue extends Component {

  render() {

    var { customStyle } = this.props;

    console.log("IS_REPORT_ERROR_FLAG_VISIBLE",IS_REPORT_ERROR_FLAG_VISIBLE);

    if(this.props.isReportErrorFlagVisible) {

      return (
          <EwIcon
            iconSource = { REPORT_ISSUE_ICON }
            customIconStyle = {[styles.iconStyle, customStyle]}
            onIconPressed = { () => Actions.ewfeedbackscreen({ screenId: this.props.screenId }) }
          />
        );

    }

    else
      return null;

  }

}

function bindActions(dispatch) {

 console.log(FILE_NAME + "In bindActions method");

 return {

 };
}

function mapStateToProps(state) {
  console.log(FILE_NAME + "In mapStateToProps method");

  console.log("State Updated state is -", state);

  return {

    isReportErrorFlagVisible: state.needtoact.isReportErrorFlagVisible
  };
}

export default connect(mapStateToProps, bindActions)(EwReportIssue);
