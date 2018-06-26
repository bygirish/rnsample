/*
-------------------------------------------------------------------------------
FILE_NAME: EwSupervisorInfo.js
Objective: For showing Supervisor section
Tech Used: React-Native 0.45 & Redux

Author:
- Girish Kumar Gupta
- Simerdeep Singh
- Anshu Goyal

Copyright @
Employwise
Global GroupWare Solutions Limited
-------------------------------------------------------------------------------
*/

/*
Predefined libraries
*/
import { Image, View, StatusBar, Linking ,TouchableHighlight,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Container, ListItem, Button, Picker, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content} from 'native-base';

import { formatDate, getImageUrl } from '../../utils';

import call from 'react-native-phone-call';

/*
components
*/
import EwNetworkImage from '../ewnetworkimage/ewnetworkimage';
import EwBar from '../ewbar/ewbar';

/*
Constants
*/
const FILE_NAME = "ewemployeeinfo.js : ";

const callIcon = require('../../../img/calling.png');
const emailIcon = require('../../../img/email.png');

export default EwEmployeeInfo = ({ employeeinfo }) => {

  console.log("Employee Information is - ", employeeinfo);

  //var imageUrl = info.imageUrl;

  //const { textStyle } = styles;
  var formattedDate = null;

  return (

    <View  style = { styles.container } >
        <View style = {{ flex: 0.7, alignItems:"center", flexDirection:"row" }}>
          <EwNetworkImage networkUrl = { getImageUrl(employeeinfo.id, employeeinfo.id) }  />

          <Text>{ employeeinfo.id }</Text>

          <Text style = {{  marginLeft: 10 }}>{ employeeinfo.name }</Text>
          <Text style = {{ marginLeft: 10 }}>( { employeeinfo.designation } )</Text>
        </View>
        <View style = {{ flex: 0.25, alignItems:"center", flexDirection:"row", justifyContent: "space-between"}}>
          <TouchableOpacity style = {{  marginLeft: 10 }} onPress = { () => initiateCall(employeeinfo) }>
            <Image source = { callIcon } />
          </TouchableOpacity>

          <TouchableOpacity style = {{  marginLeft: 10 }} onPress = { () => sendMail(employeeinfo) }>
            <Image source = { emailIcon } />
          </TouchableOpacity>
        </View>
    </View>
  );

}

sendMail = (data) => {

  url = Linking.openURL('mailto:somethingemail@gmail.com?subject=abcdefg&body=body');

  var openeEmail = Linking.getInitialURL().then((url) => {
  if (url) {
   console.log('Initial url is: ' + url);
 }
 }).catch(err => console.error('An error occurred', err));
}


initiateCall = (data) =>   {

  const args = {
    number: data.mobilenumber, // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
  }

  call(args).catch(console.error)

}
