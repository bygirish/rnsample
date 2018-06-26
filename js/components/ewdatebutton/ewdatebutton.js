import { View } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

import EwH3Text from  '../ewh3text/ewh3text';

import EwText from  '../ewtext/ewtext';

import EwH4Text from  '../ewh4text/ewh4text';

import EwIcon from  '../ewicon/ewicon';

import EwDateTimePicker from '../ewdatetimepicker/ewdatetimepicker';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import { getCurrentDate,showDeviceDateFormat } from '../../../js/utils'

const dateIcon = require('../../../img/dateIcon.png');

const FILE_NAME = "ewdatebutton.js : ";

export default class EwDateButton extends Component{

  constructor(props, context) {

      super(props, context);

      maxDateTimePicker = undefined;
      setCurrentDateValue = new Date();
      minDateTimePicker = undefined;

      if(this.props.maxDateTimePicker != null && this.props.maxDateTimePicker != undefined)
        maxDateTimePicker = this.props.maxDateTimePicker;

      if(this.props.setCurrentDateValue != null && this.props.setCurrentDateValue != undefined)
        setCurrentDateValue = this.props.setCurrentDateValue;

      if(this.props.minDateTimePicker != null && this.props.minDateTimePicker != undefined)
        minDateTimePicker = this.props.minDateTimePicker;

      this.initialState = {

        isEwDateTimePickerVisible: false, //date time picker is visible or not
        modeEwDateTimePicker: 'date',  //mode of date time picker (date,time)
        activeEwDateTimePickerElementKey: '',  // active date picker  key
        minDateTimePicker: minDateTimePicker,  // minimum date to set in picker
        maxDateTimePicker: maxDateTimePicker,  // max date to set in picker
        setDateTimePicker: setCurrentDateValue, // set default date in date picker

      };


      this.state = this.initialState;
  }

  componentWillMount() {

    console.log("Inside componentWillMount");

  }

  componentWillReceiveProps(nextProps) {

    console.log(FILE_NAME + " In componentWillReceiveProps",nextProps);

    if(this.isStateChanged(nextProps)) {

      console.log("Inside state changed",nextProps );

      elementValues = this.handleElementValues(nextProps);

      this.setState({

        minDateTimePicker: elementValues.minDateTimePicker,  // minimum date to set in picker
        maxDateTimePicker: elementValues.maxDateTimePicker,  // max date to set in picker
        setDateTimePicker: elementValues.setCurrentDateValue, // set default date in date picker

      });

    }

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
      dateText = showDeviceDateFormat(value);
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
            iconSource = { dateIcon }
            onIconPressed = { () => this._showEwDateTimePicker(key, mode , selectedDate ) }
            customIconStyle = {{ marginLeft: appstyleguide.DEFAULT_LEFT_MARGIN }}
          />
        </View>

        { this.addEwDateTimePicker() }

      </View>

    );

  }

  handleElementValues(propsData) {

    minDateTimePicker = minDateTimePicker;
    maxDateTimePicker = maxDateTimePicker;
    setDateTimePicker = setCurrentDateValue;

    if(propsData != null) {

      if(!this.isDateValueNull(propsData.minDateTimePicker))
        minDateTimePicker = propsData.minDateTimePicker;

      if(!this.isDateValueNull(propsData.maxDateTimePicker))
        maxDateTimePicker = propsData.maxDateTimePicker;

      if(!this.isDateValueNull(propsData.setDateTimePicker))
        setDateTimePicker = propsData.setDateTimePicker;
    }

    elementValues = {

      minDateTimePicker: minDateTimePicker,
      maxDateTimePicker: maxDateTimePicker,
      setDateTimePicker: setDateTimePicker

    };

    return elementValues;

  }

  isStateChanged(propsData) {

    let { minDateTimePicker, maxDateTimePicker, setDateTimePicker } = this.state;

    console.log("isDateValueNull",this.isDateValueNull(propsData.minDateTimePicker),new Date(propsData.maxDateTimePicker).getTime());

    if(!this.isDateValueNull(propsData.minDateTimePicker) && (minDateTimePicker == undefined || (minDateTimePicker.getTime() != propsData.minDateTimePicker.getTime())))
      return true;

    if(!this.isDateValueNull(propsData.maxDateTimePicker) && (maxDateTimePicker == undefined || (maxDateTimePicker.getTime() != propsData.maxDateTimePicker.getTime())))
      return true;

    if(!this.isDateValueNull(propsData.setDateTimePicker) && (setDateTimePicker == undefined || (setDateTimePicker.getTime() != propsData.setDateTimePicker.getTime())))
      return true;

    return false;

  }

  isDateValueNull(value) {

    if(value != null && value != undefined)
      return false;

    return true;
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
