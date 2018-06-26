import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, Toast, Picker, CheckBox, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content, Footer, FooterTab, List, ListItem, Radio} from 'native-base';
import {AppState, TextInput} from 'react-native';

import styles from './styles';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';

/*
 Properites -
 isVisible
 elementKey
 mode
 handleCallback
 hideCallback

*/

export default class EwDateTimePicker extends Component{




 render(){
    console.log("ewdatetimepicker.js : In render");
    console.log("Mod is - ", this.props.modeEwDateTimePicker);
    console.log("For Element is - ", this.props.elementKey);

    return(
    <View>
      <DateTimePicker
        isVisible = { this.props.isEwDateTimePickerVisible }
        mode = { this.props.modeEwDateTimePicker }
        onConfirm = { this._handleDateTimePicked }
        onCancel = { this._hideDateTimePicker }
        minimumDate = { this.props.minDateTimePicker }
        maximumDate = { this.props.maxDateTimePicker }
        date = { this.props.setDateTimePicker }
        is24Hour = { this.props.set24TimeFormat }
      />
    </View>

    );

}

_hideDateTimePicker = ()=>{
  console.log("ewdatetimepicker.js : In _hideDateTimePicker");
  console.log("Mod is - ", this.props.modeEwDateTimePicker);
  console.log("For Element is - ", this.props.elementKey);

  this.props._hideEwDateTimePicker(this.props.elementKey);
}

 _handleDateTimePicked = (date)=>{
  console.log("ewdatetimepicker.js : In _handleDateTimePicked");
  console.log("Returned value is - ", date);
  console.log("Mod is - ", this.props.modeEwDateTimePicker);
  console.log("For Element is - ", this.props.elementKey);
  this.props._handleEwDateTimePicked(date, this.props.modeEwDateTimePicker, this.props.elementKey);
  this._hideDateTimePicker();

}




}
