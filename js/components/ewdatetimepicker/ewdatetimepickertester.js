import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, Toast, Picker, CheckBox, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content, Footer, FooterTab, List, ListItem, Radio} from 'native-base';
import {AppState, TextInput} from 'react-native';

import styles from './styles';
import { Actions } from 'react-native-router-flux';

import DateTimePicker from 'react-native-modal-datetime-picker';

import EwDateTimePicker from './ewdatetimepicker';



class EwDateTimePickerTester extends Component { // eslint-disable-line



  constructor(props) {
    super(props);

    console.log("ewdatetimepickertester.js : In Constructor");

    this.initialState = {


        button1: {
          key: "button1",
          value: new Date().getTime(),
          mode: 'date',
        },

        button2: {
          key: "button2",
          value: new Date().getTime(),
          mode: 'date',
        },

        button3: {
          key: "button3",
          value: "9:30",
          mode: 'time',
        },

        button4: {
          key: "button4",
          value: "6:30",
          mode: 'time',
        },





      isEwDateTimePickerVisible: false,
      modeEwDateTimePicker: 'date',
      activeEwDateTimePickerElementKey:'',
      minDateTimePicker: undefined,
      maxDateTimePicker: undefined,



    };
    this.state = this.initialState;


    this.onPressButton1 = this.onPressButton1.bind(this);


  }


  render() {

    console.log("ewdatetimepickertester.js : In render");

    console.log("state is - ", this.state);

  return (
    <Container >

      <Header>
        <Left>

        </Left>
        <Body>
          <Title>Leave</Title>
        </Body>
        <Right >

        </Right>
      </Header>


      <Content style={{marginLeft:5, marginRight:5, alignSelf:'stretch'}}>

        <Button
          onPress={this.onPressButton1}
        >
        <Text>{new Date(this.state.button1.value).toDateString()}</Text>
        </Button>

        <Button
          onPress={this.onPressButton2}
        >
        <Text>{new Date(this.state.button2.value).toDateString()}</Text>
        </Button>

        <Button
          onPress={this.onPressButton3}
        >
        <Text>{this.state.button3.value}</Text>
        </Button>

        <Button
          onPress={this.onPressButton4}
        >
        <Text>{this.state.button4.value}</Text>
        </Button>

        <EwDateTimePicker
          isEwDateTimePickerVisible = {this.state.isEwDateTimePickerVisible}
          modeEwDateTimePicker = {this.state.modeEwDateTimePicker}
          _handleEwDateTimePicked = {(date, mode, elementKey)=>this._handleEwDateTimePicked(date, mode, elementKey)}
          _hideEwDateTimePicker = {(elementKey)=>this._hideEwDateTimePicker(elementKey)}
          elementKey = {this.state.activeEwDateTimePickerElementKey}
          minDateTimePicker = {this.state.minDateTimePicker}
          maxDateTimePicker = {this.state.maxDateTimePicker}

        />

      {this.randomGirish()}
      </Content>

      <Footer >
            <FooterTab>
                <Button onPress={()=>this.onPressCancel()}>
                    <Text>Cancel</Text>
                </Button>
                <Button onPress={()=>this.onPressApply()}>
                    <Text>Apply</Text>
                </Button>
            </FooterTab>
        </Footer>

    </Container>
  );


  }

randomGirish(){
    console.log("In randomGirish");

  console.log("state is ", this.state);

}

onPressButton1 = ()=>{

  console.log("In onPressButton1");
  console.log("state is ", this.state);
  console.log("value ", this.state.button1.value);
  console.log("Key ", this.state.button1.key);


    this._showEwDateTimePicker(this.state.button1.key, this.state.button1.mode);
}

onPressButton2 = ()=>{
  this._showEwDateTimePicker(this.state.button2.key, this.state.button2.mode);
}

onPressButton3 = ()=>{
  this._showEwDateTimePicker(this.state.button3.key, this.state.button3.mode);
}

onPressButton4 = ()=>{
  this._showEwDateTimePicker(this.state.button4.key, this.state.button4.mode);
}




_showEwDateTimePicker = (elementKey, mode)=>{
  console.log("ewdatetimepickertester.js : In _showEwDateTimePicker");

  this.setState({
    isEwDateTimePickerVisible: true,
    activeEwDateTimePickerElementKey: elementKey,
    modeEwDateTimePicker: mode,
  });
}

_hideEwDateTimePicker = (elementKey)=>{
  console.log("ewdatetimepickertester.js : In _hideEwDateTimePicker");

  this.setState({
    isEwDateTimePickerVisible:false,
    activeEwDateTimePickerElementKey: '',
    modeEwDateTimePicker:'',
  });

}

_handleEwDateTimePicked = (date, mode, elementKey) =>{

  console.log("ewdatetimepickertester.js : In _handleEwDateTimePicked");
  console.log("Returned value is - ", date);
  console.log("Mod is - ", mode);
  console.log("For Element is - ", elementKey);

  var valueDateTimePicker;
  var d = new Date(date);
  if(mode == 'date')
  {
      valueDateTimePicker = d.getTime();
  }
  else {
    valueDateTimePicker = d.getHours()+':'+d.getMinutes() ;
  }

  switch (elementKey) {
    case this.state.button1.key:
      this.setState({
        button1: {
            mode: mode,
            key: elementKey,
          value: valueDateTimePicker ,
        }
      });
    break;
    case this.state.button2.key:
      this.setState({
        button2: {
          mode: mode,
          key: elementKey,
          value: valueDateTimePicker ,
        }
      });
    break;
    case this.state.button3.key:
      this.setState({
        button3: {
          mode: mode,
          key: elementKey,
          value: valueDateTimePicker ,
        }
      });
    break;
    case this.state.button4.key:
      this.setState({
        button4: {
          mode: mode,
          key: elementKey,
          value: valueDateTimePicker ,
        }
      });
    break;
    default:

  }


}





}

export default connect()(EwDateTimePickerTester);
