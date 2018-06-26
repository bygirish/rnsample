import React, { Component } from 'react';
import { View,TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

import Autocomplete from 'react-native-autocomplete-input';

export default class EwAutocompleteInput extends Component{

  constructor(props, context) {
      super(props, context);

      console.log("propsreceived",props);

      this.initialState = {

        enableScrollViewScroll: true,
      }

      this.state = this.initialState;
  }


  render() {

    var { dropdownData, customTextInput, scrollViewVisibility } = this.props;

    console.log("dropdownData received is",dropdownData);

    /*  filteredData = dropdownData.filter(data => {

         return data.toLowerCase().trim().search(textInputValue.toLowerCase().trim()) !== -1;

    });*/

    return (
        <Autocomplete
          data = { dropdownData }
          ref = { 'autocomplete' }
          inputContainerStyle = {{ borderWidth: 0 }}
          listStyle = { styles.listStyle }
          renderTextInput = { customTextInput }
          renderItem = { this.props.renderListItem }

          onStartShouldSetResponderCapture = { () => {

           console.log("inside onStartShouldSetResponderCapture",this.refs);
          // this.setState({ enableScrollViewScroll: false });
           this.props.updateScrollState(false);

             if (this.refs.autocomplete.resultList.scrollProperties.offset === 0 &&
                 scrollViewVisibility === false) {
               this.props.updateScrollState(true);
             }
         }}

         { ...this.props }
        />

    );
  }

};
