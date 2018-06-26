

import { Dimensions,Image, View, StatusBar,Modal,TouchableWithoutFeedback,KeyboardAvoidingView, Animated,DeviceEventEmitter,ScrollView } from 'react-native';
import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import styles from './styles';

import { DEVICE_WIDTH , DEVICE_HEIGHT } from '../../utils';

const FILE_NAME = "EwModal.js : ";

export default class EwModal extends Component{

  constructor(props, context) {

      super(props, context);

      this.initialState = {

        deviceWidth: DEVICE_WIDTH,
        deviceHeight: DEVICE_HEIGHT,

      };


      this.state = this.initialState;
  }

  /*
  Tasks to do before initial Rendering
  */
  componentWillMount() {

    console.log(FILE_NAME + "In componentWillMount");

  }

  /*
  Tasks to do on changing of props
  */
  componentWillReceiveProps(nextProps) {

    console.log(FILE_NAME + "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

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

  /*
  Tasks to do before Re-rendering
  */
  componentWillUpdate(nextProps, nextState) {

    console.log(FILE_NAME + "In componentWillUpdate");

  }
  render() {

    var  { onBackButtonPress, onBackdropPress , isModalVisible, children,customModalStyle, ...otherProps } = this.props;

    var { deviceWidth, deviceHeight } = this.state;

    const computedStyle = [
      { margin: deviceWidth  * 0.05, transform: [{ translateY: 0 }] },
      styles.content,
    ];

    return(
      <Modal
        isVisible = { isModalVisible }
        transparent = { true }
        animationType = { 'none' }
        onRequestClose = { onBackButtonPress }
        { ...otherProps }
        >

        <TouchableWithoutFeedback onPress = { onBackdropPress }>
            <View
              ref = { ref => (this.backdropRef = ref ) }
              style = {[
                styles.backdrop,
                {
                  width: deviceWidth,
                  height: deviceHeight,
                },
              ]}
            />
          </TouchableWithoutFeedback>



            <View
              ref = { ref => (this.contentRef = ref) }
              style =
              {[
                computedStyle,
                /*{
                  width: this.state.width,
                },*/
              ]}
              pointerEvents = { 'box-none' }
               { ...otherProps }
            >


                  <View style = { styles.contentStyle }>
                    <ScrollView>
                      { children }
                    </ScrollView>

                  </View>

          </View>



      </Modal>
    );
  }

  /*
  Tasks to do after initial Rendering
  */
  componentDidMount(){

    console.log(FILE_NAME + "In componentDidMount");

     DeviceEventEmitter.addListener('didUpdateDimensions', this._handleDimensionsUpdate);

    /*Animated.timing(this.state.width, {
     toValue: DEVICE_WIDTH-22,
       duration: 2000,
   }).start();*/
    /* Write Code to Load any element-data here */

  }

  /*
  Tasks to do after Re-rendering
  */
  componentDidUpdate(prevProps, prevState){

    console.log(FILE_NAME + "In componentDidUpdate");

  }

  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount(){

    console.log(FILE_NAME + "In componentWillUnmount");

    DeviceEventEmitter.removeListener('didUpdateDimensions', this._handleDimensionsUpdate);

  }

  _handleDimensionsUpdate = dimensionsUpdate => {
    // Here we update the device dimensions in the state if the layout changed (triggering a render)

    console.log("deviceWidth",deviceWidth);
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    if (deviceWidth !== this.state.deviceWidth || deviceHeight !== this.state.deviceHeight) {
      this.setState({ deviceWidth, deviceHeight });
    }
  };

}
