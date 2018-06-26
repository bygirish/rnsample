import { Image, View, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';

import { Button, Text, Icon } from 'native-base';

import styles from './styles';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

import Collapsible from 'react-native-collapsible';

export default class EwAccordion extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

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

    const { onAccordionPress, isActive,customStyle, customAccordionStyle } = this.props;

    return (

      <View style = {[customStyle]}>
        <TouchableHighlight underlayColor = { appstyleguide.APP_WHITE }  onPress = { onAccordionPress }>

          <View style = { styles.accordionStyle }>

            { this.renderAccordionText() }

            <View style = { styles.iconViewStyle }>
              { isActive  ? <Icon name = 'arrow-dropdown' style = {{ color: appstyleguide.APP_BLACK }} /> : <Icon name = 'arrow-dropup' style = {{ color: appstyleguide.APP_BLACK }} /> }
            </View>

          </View>

        </TouchableHighlight>

        <Collapsible collapsed = { isActive }>

          <View style = {[ styles.hiddenAccordionStyle, customAccordionStyle] }>

            { this.props.children }
          </View>

        </Collapsible>
      </View>

    );
  }

  renderAccordionText() {

    const { accordionLabel, renderAccordionLabel } = this.props;

    console.log("accordionLabel",accordionLabel);

    if(accordionLabel == null )
      return renderAccordionLabel();
    else {

      return (
        <Text style = { styles.accordionHeadingTextStyle }>
          { accordionLabel }
        </Text>
      );
    }
  }


}
