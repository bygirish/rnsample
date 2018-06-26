import { Image, View, TextInput, Text, Animated, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';

import { Content } from 'native-base';

import React, { Component } from 'react';

import styles from './styles';

import { PLATFORM_ANDROID, PLATFORM_IOS , getMobileOS  } from '../../utils';

import { DELETE_ICON } from '../../utils/ewimages';

import EwButton from '../ewbutton/ewbutton';

import EwIcon from '../ewicon/ewicon';

import * as appstyleguide from '../../../appstyleguide/appstyleguide';

var FILE_NAME = "ewmultiplecomponentvalue.js";

export default class EwMultipleComponentValue extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

          componentStateArray: [...this.props.componentStateArray],
          componentState: null,
          currentFocussedComponent: null,
          componentKey: 0,
      };


      this.state = this.initialState;
  }

  componentWillMount() {

     console.log("Inside componentWillMount");

  }

  componentWillReceiveProps(nextProps) {

    console.log( FILE_NAME + "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    /* Screen Pre-loading Data */

    if(this.isStateChanged(nextProps.componentStateArray)) {

      //console.log("Inside state changed multiplecomponent");

      this.setState({

        componentStateArray: [...nextProps.componentStateArray]
      });

    }

  }

  /*
  Re-rendering is required or not
  */
  shouldComponentUpdate(nextProps, nextStat) {

    console.log(FILE_NAME + "In shouldComponentUpdate");
    console.log("New Props are - ", nextProps);
    console.log("New State is - ", nextStat);

    return true;
  }

  componentWillUpdate() {

      console.log(FILE_NAME + "In componentWillUpdate Method");

  }

  render() {

    const {  isAddButtonVisible,...props } = this.props;

    const {  componentStateArray } = this.state;

    console.log(" props received are ",this.props, this.componentState );

    console.log(" multiple state is ",this.state );

    return (

      <Content
        ref = { ref => scrollView = ref }
        contentContainerStyle = {{ alignSelf: 'stretch' }}
        onContentSizeChange = {(contentWidth, contentHeight)=> {
          scrollView._root.scrollToEnd({animated: true});
        }}

        keyboardShouldPersistTaps = "always"
      >

        <View>

          {
            Object.keys(componentStateArray).map((key,stateIndex) =>

                this.renderComponentView(key)

             )
          }

          { componentStateArray.length == 0 ? this.renderComponentView(0) : null }

          {
            isAddButtonVisible ? <View style = {{ alignItems: "flex-end",flexDirection:"row",justifyContent: "flex-end",marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginRight: appstyleguide.DEFAULT_LEFT_MARGIN, }}>

               <EwButton
                 label = { this.props.addLabel }
                 customStyle = {{ backgroundColor: appstyleguide.APP_GRAY }}
                 onButonClicked = { () => this.performAddAction(this.state.componentState) }
               />

           </View> : null

          }



        </View>

      </Content>


    );

  }

  /*
  Tasks to do after initial Rendering
  */
  componentDidMount() {

    console.log(FILE_NAME + "In componentDidMount");



  }

  componentDidUpdate(prevProps, prevState) {

    console.log(FILE_NAME + "In componentDidUpdate");

    console.log("props after update",this.props,this.state);

    if(this.isStateChanged(this.props.componentStateArray)) {

      console.log("Updating master screen",this.state.componentKey);
      this.props.updateParentState(this.state.componentStateArray, this.state.componentKey);


    }

  }


  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    console.log(FILE_NAME + "In componentWillUnmount");

    //this.props.saveComponentState(this.props.componentIndex, this.state);

  }


  renderComponentView(componentKey) {

    var { component } = this.props;

    console.log("componentKey",componentKey,this.state.componentStateArray[componentKey]);

    return (

        <View style = {{ flexDirection: "row", marginTop: appstyleguide.DEFAULT_TOP_MARGIN, marginLeft: appstyleguide.DEFAULT_LEFT_MARGIN }}>

          <View style = {{ flex: 0.9 }}
              onStartShouldSetResponderCapture = { () => {

                  this.setState({

                    currentFocussedComponent: componentKey
                  });
              }}
          >

            {

                React.cloneElement(
                      component,
                      {
                        index: componentKey ,
                        initialState: this.state.componentStateArray[componentKey],
                        updateParentState: (componentState) => this.updateParentState(componentKey,componentState),
                        otherDetails: this.props.otherDetails,
                        currentFocussedComponent: this.state.currentFocussedComponent,
                      },

                )

            }

          </View>

          {

            (this.props.isDeleteButtonVisible && this.state.componentStateArray.length > 1) ?

              <View style = {{  alignItems: "flex-end", margin: appstyleguide.DEFAULT_MARGIN,flex: 0.1 }}>

                <EwIcon
                  iconSource = { DELETE_ICON }
                  onIconPressed = { () => this.showDeleteAlertBox(componentKey) }
                />

              </View>
            : null
          }


        </View>

    );

  }

  // getComponentState(componentState) {
  //
  //   console.log("componentState",componentState);
  //
  //   if(this.state.componentState == null) {
  //
  //     this.setState ({
  //
  //       componentState: componentState,
  //
  //     });
  //
  //     this.addNewComponent(componentState);
  //   }
  // }
  //


  updateParentState(componentKey,componentData) {

    console.log("componentStatebeforeupdate",componentKey,componentData);

    updatedComponentState = this.state.componentState;

    if(updatedComponentState == null) // If first time component is getting loaded
      updatedComponentState = componentData;

    updatedComponentStateArray = [ ...this.state.componentStateArray];

    updatedComponentStateArray[componentKey] = componentData;

    this.setState ({

      componentStateArray: updatedComponentStateArray,
      componentState: updatedComponentState,
      componentKey: componentKey

    });

    console.log("componentKeydata",componentKey,componentData);

  }

  async performAddAction(componentState) {

    console.log("Inside performAddAction ", componentState);

    if(this.props.onAddButtonPressed != null) {

      const addAction = await(this.props.onAddButtonPressed());

      if(addAction) {

        this.addNewComponent(componentState);
      }

      else
        console.log("No need to add");

    }

    else {

      this.addNewComponent(componentState);

    }

  }

  addNewComponent(componentState) {

    console.log( "In addNewComponent method",);

    updatedComponentStateArray = [...this.state.componentStateArray];

    updatedComponentStateArray.push(null);

    this.setState ({
      componentStateArray: updatedComponentStateArray
    });


  }

  showDeleteAlertBox(componentKey) {

    if(this.props.showDeleteAlertbox) {

      var { heading , message } = this.props.alertboxData;

      Alert.alert (
         heading,
         message,
         [
           { text: 'Ok', onPress: () => this.performDeleteAction(componentKey) },
           { text: 'Cancel' },
         ],
      );
    }

    else
      this.performDeleteAction(componentKey);

  }

  async performDeleteAction(componentKey) {

    console.log("Inside performDeleteAction ", componentKey);

    if(this.props.onDeleteButtonPressed != null) {

      const deleteAction = await(this.props.onDeleteButtonPressed(componentKey));

      if(deleteAction) {

        this.deleteComponent(componentKey);
      }

      else
        console.log("No need to delete");

    }

    else {

      this.deleteComponent(componentKey);
    }


  }

  deleteComponent(componentKey) {

    updatedComponentStateArray = [...this.state.componentStateArray];

    updatedComponentStateArray.splice(componentKey,1);

    console.log("updatedComponentStateArrayafterdelete",updatedComponentStateArray);

    this.setState ({
      componentStateArray: updatedComponentStateArray
    });

  }

  isStateChanged(initialState) {

    if(JSON.stringify(initialState) != JSON.stringify(this.getMultipleComponentObject()))
      return true;

    return false;

  }

  getMultipleComponentObject() {

    return this.state.componentStateArray;

  }

}
