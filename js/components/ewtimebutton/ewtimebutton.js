import { View } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

import EwH3Text from  '../ewh3text/ewh3text';

import EwText from  '../ewtext/ewtext';

import EwH4Text from  '../ewh4text/ewh4text';

import EwIcon from  '../ewicon/ewicon';

import EwDateTimePicker from '../ewdatetimepicker/ewdatetimepicker';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { getCurrentDate,showDeviceTimeFormat } from '../../../js/utils'

import { TIME_ICON } from '../../../js/utils/ewimages';

const FILE_NAME = "ewtimebutton.js : ";

export default class EwTimeButton extends Component{

  constructor(props, context) {

      super(props, context);

      maxDateTimePicker = undefined;

      if(this.props.maxDateTimePicker != null && this.props.maxDateTimePicker != undefined)
        maxDateTimePicker = this.props.maxDateTimePicker;

      this.initialState = {

        isEwDateTimePickerVisible: false, //date time picker is visible or not
        modeEwDateTimePicker: 'time',  //mode of date time picker (date,time)
        activeEwDateTimePickerElementKey: '',  // active date picker  key
        minDateTimePicker: undefined,  // minimum date to set in picker
        maxDateTimePicker: maxDateTimePicker,  // max date to set in picker
        setDateTimePicker: new Date(), // set default date in date picker

      };


      this.state = this.initialState;
  }

  componentWillMount() {

    console.log("Inside componentWillMount");

  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");

  }

  render() {

    console.log("Inside render");

    const { label, dateObject,placeholderLabel, customViewStyle,...props } = this.props;

    const { key, mode, value } = dateObject;

    textStyle = styles.textStyle;

    dateLabel = "";
    dateText = "";
    selectedDate = this.getDateString(getCurrentDate());

    if(this.props.textStyle)
      textStyle = this.props.textStyle;

    if(value == null) {

      dateText = placeholderLabel;
    }

    else {

      dateLabel = label;
      dateText = showDeviceTimeFormat(value);
      selectedDate = this.getDateString(value);
    }

    return (
      <View style = {[ styles.dateViewStyle, customViewStyle ]}>

        <EwH4Text
          text = { dateLabel }
        />

        <View style = {{ flexDirection: "row" }}>

          <EwH3Text
            text = { dateText }
          />

          <EwIcon
            iconSource = { TIME_ICON }
            onIconPressed = { () => this._showEwDateTimePicker(key, mode , selectedDate ) }
            customIconStyle = {{ marginLeft: appstyleguide.DEFAULT_LEFT_MARGIN }}
          />
        </View>

        { this.addEwDateTimePicker() }

      </View>

    );

  }

  getDateString(milliseconds) {

    date = new Date(milliseconds);

    return date;

  }


  /**
  * To add EwDateTimePicker to the render screen
  * @method  addEwDateTimePicker
  * @author Simerdeep Singh
  * @version [1.0]
  */
  addEwDateTimePicker = () => {

    console.log(FILE_NAME + "In addEwDateTimePicker method");

    var { _handleEwDateTimePicked } = this.props;

    return (
      <EwDateTimePicker
        isEwDateTimePickerVisible = { this.state.isEwDateTimePickerVisible }
        modeEwDateTimePicker = { this.state.modeEwDateTimePicker }
        _handleEwDateTimePicked = {(date, mode, elementKey) => this.props._handleEwDateTimePicked(date, mode, elementKey) }
        _hideEwDateTimePicker = {(elementKey) => this._hideEwDateTimePicker(elementKey) }
        elementKey = { this.state.activeEwDateTimePickerElementKey }
        minDateTimePicker = { this.state.minDateTimePicker }
        maxDateTimePicker = { this.state.maxDateTimePicker }
        setDateTimePicker = { this.state.setDateTimePicker }
        set24TimeFormat = { false }

      />
    );
  }


  /**
   * To show date time picker
   * @method  _showEwDateTimePicker
   * @author Simerdeep Singh
   * @version [1.0]
   * @param   {String}              elementKey active element key for which date time picker is shown
   * @param   {String}              mode       mode of date time picker (date or time or datetime)
   */
  _showEwDateTimePicker = (elementKey, mode,date) => {

    console.log(FILE_NAME + "In _showEwDateTimePicker method");

    this.setState({
      isEwDateTimePickerVisible: true,
      activeEwDateTimePickerElementKey: elementKey,
      modeEwDateTimePicker: mode,
      setDateTimePicker: date,
    });

  }

  _hideEwDateTimePicker = (elementKey) => {

    console.log(FILE_NAME + "In _hideEwDateTimePicker");

    this.setState({
      isEwDateTimePickerVisible: false,
      activeEwDateTimePickerElementKey: '',
      modeEwDateTimePicker: this.state.modeEwDateTimePicker,
    });

  }

}
