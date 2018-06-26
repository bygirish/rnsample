import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Spinner } from 'native-base';

import styles from './styles';

class EwSpinner extends Component{

  render() {

    defaultSpinnerSize = 'small';

    var { spinnerSize,...props } = this.props;

    if(spinnerSize != null)
      defaultSpinnerSize = spinnerSize;

    return (
        <Spinner
          size = { defaultSpinnerSize }
        />
    );
  }
}

export default EwSpinner;
