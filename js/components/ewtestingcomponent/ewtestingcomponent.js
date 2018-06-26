import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

import EwFloatingLabel from '../ewfloatinglabel/ewfloatinglabel';

class EwTestingComponent extends Component{

  constructor(props, context) {

      super(props, context);

      console.log("initial state testing ", props);

      if(this.props.initialState == null) {

        this.initialState = {

            inputText: "",
        };


        this.state = this.initialState;

      }

      else {

        this.state = this.props.initialState;
      }


  }

  componentWillMount(props) {

    console.log("In componentWillMount");

    this.props.getComponentState(this.getCurrentState());
  }

  componentWillReceiveProps(nextProps) {

    console.log( "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    /* Screen Pre-loading Data */

    if(nextProps.initialState != this.state) {

      this.state = nextProps.initialState;
    }


  }

  componentDidUpdate(prevProps, prevState) {

    console.log("In componentDidUpdate");

    if(this.props.initialState != this.state)
      this.props.updateParentState(this.state);

  }




  render() {

    var { text, customStyle,...props } = this.props;

    console.log("State is -", this.state);

    return (
      <View>

        <EwFloatingLabel
          label = "text"
          autoCorrect = { false }
          autoCapitalize = 'none'
          onChangeText = { (inputText) => this.setState({ inputText }) }
          value = { this.state.inputText }
        />

      </View>
    );
  }

  getCurrentState() {

    return this.state;
  }

}
export default EwTestingComponent;
