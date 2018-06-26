import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList } from 'react-native';

import React, { Component } from 'react';

import { Spinner } from 'native-base';

import styles from './styles';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS  } from '../../utils';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

export default class EwListView extends Component{

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

    const { listData, listKey , renderListItem, isAllDataLoaded, ...props } = this.props;

    isDataLoaded = true;

    if(isAllDataLoaded != null)
      isDataLoaded = isAllDataLoaded;

    return (
      <FlatList
          { ...props }
          data = { listData }
          renderItem = { renderListItem }
          keyExtractor = { listKey }
          ListFooterComponent = { () => this.renderListFooter(isDataLoaded) }
          ItemSeparatorComponent = { (sectionId, rowId) => <View key = { rowId }  style = {{ flex: 1, height: 1, backgroundColor: appstyleguide.APP_LIGHT_GRAY,}} /> }
      />
    );


  }


  renderListFooter(isDataLoaded) {

    if(!isDataLoaded) {

      return (

        <Spinner size = "small" />

      );

    }

    return null;

  }

}
