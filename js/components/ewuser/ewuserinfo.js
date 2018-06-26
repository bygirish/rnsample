import { Image, View, StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Container, ListItem, Button, Picker, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content} from 'native-base';

import EwBar from '../ewbar/ewbar';
import EwNetworkImage from '../ewnetworkimage/ewnetworkimage';

import EwH1Text from '../ewh1text/ewh1text';

import EwH2LightText from '../ewh2lighttext/ewh2lighttext';

import EwH3LightText from '../ewh3lighttext/ewh3lighttext';

import { formatDate, convertServerDateTimeToMilliseconds } from '../../utils';

export default EwUserInfo = ({info}) => {

  console.log("EwSupervisorInfo.js : Supervisor Information is - ", info);

  var imageUrl = info.imageUrl;

  const { textStyle } = styles;

  var appliedDate = convertServerDateTimeToMilliseconds(info.datetime);

  var formattedDate = customFormatForDate(appliedDate);

  return (

    <View style = {{ marginBottom: 10, backgroundColor: 'transparent' }} >

      <View style = {{ flexDirection: 'row', marginBottom: 10, justifyContent: "center" }}>

        <View style = {{ flex: 0.7, marginLeft: 10 }}>

          <EwH1Text
            text = { info.name }
          />

          <EwH2LightText
            text = { info.designation }
            customStyle = { textStyle }
          />

          <EwH3LightText
            text = { formattedDate }
            customStyle = { textStyle }
          />
        {/*  <Text style = {{ fontSize: 24, alignSelf: 'flex-start', }}>{ info.name }</Text>
          <Text style = { textStyle }>{ info.designation }</Text>
          <Text style = { textStyle }>{ formattedDate }</Text> */ }
        </View>

        <View style = {{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <EwNetworkImage networkUrl = { info.imageUrl } />
        </View>

      </View>
       <EwBar />
    </View>
  );
}

function customFormatForDate(date) {

   currentDate = new Date(date);

   var days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

   var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

   var date = currentDate.getDate();

   var dayName = days[ currentDate.getDay() ];

   var monthName = monthNames[currentDate.getMonth()];

   var year = currentDate.getFullYear();

   formattedDate = dayName + ', ' + date + " " + monthName + " " + year + " - " + fomartTime12Hour(currentDate);

   return formattedDate ;
}

function fomartTime12Hour(time_24) {

    var hours = time_24.getHours() % 12;
    var minutes = time_24.getMinutes();

    if (hours === 0)
      hours = 12;

    formattedTime =  (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + (time_24.getHours() < 12 ? ' am' : ' pm');

    return formattedTime;

}

const styles = {
  textStyle: {
     marginTop: 5,
  },
}
