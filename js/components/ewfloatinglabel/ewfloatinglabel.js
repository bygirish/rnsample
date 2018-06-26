

import { Image, View, TextInput,Text,Animated,TouchableOpacity, Keyboard } from 'react-native';
import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Label,Icon } from 'native-base';

import styles from './styles';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS  } from '../../utils';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

const defaultHeight = 40;

export default class EwFloatingLabel extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {
        isFocused:  false,
        height: defaultHeight,

        androidFirstContentSizeChange: true // only for android
      };


      this.state = this.initialState;
  }

  componentWillMount() {

    console.log("Inside componentWillMount");

    this._animatedIsFocused = new Animated.Value(0);

    if(!this.isTextInputEmpty() ) {

     this.animateTextLabel();

    }

  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");

    this.animateTextLabel();

  }

  render() {

    const { isFocused } = this.state;

    const { label, placeholderlabel, customViewStyle,...props } = this.props;

    displayLabel = label;

    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [25, 8],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [17, 13],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [appstyleguide.APP_GRAY, appstyleguide.APP_GRAY],
      }),
    };

    console.log("this.refs.textinput",this.refs.textInput);

    if(!isFocused && this.isTextInputEmpty()) {
      if(placeholderlabel != null )
        displayLabel = placeholderlabel;
    }

    return (
      <View style = { [styles.outerViewStyle, customViewStyle, { borderBottomColor: this.getBottomBorderColor() } ] }>

        <Animated.Text style = { labelStyle }>
          { displayLabel }
        </Animated.Text>

          <TextInput
            { ...props }
            style = { [styles.textinputStyle ,  { height: this.state.height } ] }
            multiline = { false }
            ref = {'textInput'}
            onFocus = { this.handleFocus }
            onBlur = { this.handleBlur }
            underlineColorAndroid = 'transparent'
          />

      </View>
    );

  }

  focus() {
    this.refs.textInput.focus();
  }

  getBottomBorderColor() {

  //  if(!this.isTextInputEmpty())
      return appstyleguide.APP_LIGHT_BLUE;

  //  return appstyleguide.APP_RED;

  }

  isTextInputEmpty() {

    if(this.props.value == '')
      return true;

    return false;
  }


  updateSize(height) {

    console.log("Inside updateSize", height);

    var { androidFirstContentSizeChange } = this.state;

    if(androidFirstContentSizeChange && getMobileOS() == PLATFORM_ANDROID) {

        this.setState({

          androidFirstContentSizeChange: false

        });
      }

      else {

          if(height > this.state.height) {

            newHeight = this.state.height + defaultHeight;

            this.setState({

              height : newHeight
            });

          }
      }
  }

  animateTextLabel() {

    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value != '') ? 1 : 0,
      duration: 200,
    }).start();

  }

  handleFocus = () =>  {

    this.setState({ isFocused: true });

    if(this.props.callParentFocusMethod)
      this.props.callParentFocusMethod();

  }
  handleBlur = () =>  {

    this.setState({ isFocused: false });

    console.log(" On blur called");

  }

}
