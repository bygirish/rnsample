import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

const timelineStyle = {

  marginLeft: 14,
  width: 2,
};

export default class EwTimeline extends Component{

  constructor(props){
    super(props);

    this.state = {
      maxHeight: 0
    };
  }

  getHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height/2
    });
  }

  render() {

    return(

      <View style = {{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

        <View style = {{ alignSelf: 'flex-start' }}>

          { this.renderBarStartView() }

            <View style = {{ marginLeft: 10, width: 10, height: 10, borderRadius: 20, borderWidth: 1,borderColor: appstyleguide.APP_LIGHT_BLUE, backgroundColor: 'transparent', alignSelf: 'center', justifyContent:'center', alignItems: 'center' }} >
              <View style = {{ width: 5, height: 5, borderRadius: 10, backgroundColor: appstyleguide.APP_LIGHT_BLUE }} />
            </View>

          { this.renderBarEndView() }

        </View>

        <View
          style = {{ marginBottom: 8, marginLeft: 10, marginRight: 10,paddingTop: 10, backgroundColor: 'white' }}
          onLayout = { this.getHeight.bind(this) }
          >

          { this.props.children }

        </View>

      </View>

    );

  }

  renderBarStartView() {

    if(this.props.timeline == 'start' || this.props.timeline == 'startandend') {

      return (

        <View style = {{ ...timelineStyle,  height: this.state.maxHeight, backgroundColor: 'transparent' }} />

      );

    }

    else {

      return (

        <View style = {{ ...timelineStyle, height: this.state.maxHeight , backgroundColor: appstyleguide.APP_LIGHT_BLUE }} />

      );

    }

  }

  renderBarEndView() {

    if(this.props.timeline == 'end' || this.props.timeline == 'startandend') {

      return (

        <View style = {{ ...timelineStyle, height: this.state.maxHeight , backgroundColor: 'transparent' }} />

      );
    }
    else {

      return (

        <View style = {{ ...timelineStyle, height: this.state.maxHeight , backgroundColor: appstyleguide.APP_LIGHT_BLUE }} />

      );
    }
  }

}
