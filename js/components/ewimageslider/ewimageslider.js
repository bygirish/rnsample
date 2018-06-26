import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableOpacity,Animated,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Button, Toast, Picker, CheckBox, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content, Footer, FooterTab, List, ListItem, Radio} from 'native-base';
import {AppState, TextInput} from 'react-native';

import ImagePicker  from 'react-native-image-crop-picker';

import { EwH1Text } from '../../utils/ewcomponents';

import styles from './styles';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils';

const FILE_NAME = "ewimageslider.js : ";

const leftArrowIcon = require('../../../img/leftarrow.png');
const rightArrowIcon = require('../../../img/rightarrowicon.png');

const addIcon = require('../../../img/addimage.png');
const deleteIcon = require('../../../img/trashIcon.png');

const leftIconIndex = 0;
const rightIconIndex = 1;

const defaultMargin = 10;

export default class EwImageSlider extends Component{

  constructor(props, context) {
      super(props, context);

      console.log("propsreceived",props);

      imagesArray = [];

      if(this.props.initialState != null)
        imagesArray = [...this.props.initialState];

      this.initialState = {

        imagesArray: imagesArray,

        currentVisibleImageIndex : 0,

        opacity: new Animated.Value(0),
      }

      this.state = this.initialState;
  }

  componentWillReceiveProps(nextProps) {

    console.log(FILE_NAME + " In componentWillReceiveProps",nextProps);

    if(JSON.stringify(this.state.imagesArray) != JSON.stringify(nextProps.initialState)) {

      //console.log("nextProps received ", nextProps);

      this.setState ({

        imagesArray: [...nextProps.initialState]
      });
    }

  }

  render() {

    console.log(FILE_NAME + " In render");

    var { imagesArray,currentVisibleImageIndex } = this.state;

    var { sliderHeight, updateParentState, isAddButtonVisible, isDeleteButtonVisible } = this.props;

    console.log("images array",imagesArray);

    //if(imagesArray.length == 0)
    //  this.addNewImage(updateParentState);

    return (

      <View style = {{ flexDirection: "row",flex: 1, height: sliderHeight }}>

        <View style = {{ justifyContent: "center", margin: defaultMargin ,flexDirection: "row",flex: 0.8 }}>

          { this.renderLeftArrowIcon(imagesArray,currentVisibleImageIndex) }

          { this.renderImages() }

          { this.renderRightArrowIcon(imagesArray,currentVisibleImageIndex) }

        </View>

        <View style = {{ flex: 0.2,margin: 10, justifyContent: "space-around",alignItems: "center" }}>

          {
            isAddButtonVisible ? <TouchableOpacity onPress = { () => this.addNewImage(updateParentState) }>
              <Image
                style = { styles.actionIconStyle }
                source = { addIcon }
              />
          </TouchableOpacity> : null

          }

          {

            (isDeleteButtonVisible && imagesArray.length > 0) ? <TouchableOpacity onPress = { () => this.deleteCurrentImage(imagesArray,currentVisibleImageIndex) }>
              <Image
                style = { styles.actionIconStyle }
                source = { deleteIcon }
              />
          </TouchableOpacity> : null

          }


        </View>

      </View>

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

    if(JSON.stringify(this.props.initialState) != JSON.stringify(this.state.imagesArray)) {

      this.props.updateParentState(this.state.imagesArray);

    }

  }


  /*
  Tasks to do before unmounting the component
  */
  componentWillUnmount() {

    console.log(FILE_NAME + "In componentWillUnmount");

  }

  renderLeftArrowIcon(imagesArray,currentVisibleImageIndex,) {

    console.log(FILE_NAME + " In renderLeftArrowIcon",currentVisibleImageIndex);

    if(imagesArray.length != 0 && currentVisibleImageIndex != 0 ) {

      return (

        <TouchableOpacity style = {{ alignSelf: "center"}} onPress = { () => this.arrowIconPressed(leftIconIndex) }>
          <Image
            style = { styles.arrowIconStyle }
            source = { leftArrowIcon }
          />
        </TouchableOpacity>
      );
    }

  }

  renderRightArrowIcon(imagesArray,currentVisibleImageIndex) {

    console.log(FILE_NAME + " In renderRightArrowIcon");

    if(imagesArray.length != 0 && currentVisibleImageIndex != (imagesArray.length - 1) ) {

      return (

        <TouchableOpacity style = {{ alignSelf: "center"}} onPress = { () => this.arrowIconPressed(rightIconIndex) }>
          <Image
            style = { styles.arrowIconStyle }
            source = { rightArrowIcon }
          />
        </TouchableOpacity>
      );

    }

  }

  arrowIconPressed(iconIndex) {

    console.log(FILE_NAME + " In arrowIconPressed");

    var { currentVisibleImageIndex } = this.state;

    if(iconIndex == leftIconIndex) {

      this.setState({
        currentVisibleImageIndex: this.state.currentVisibleImageIndex - 1
      });
    }

    else {

      this.setState({
        currentVisibleImageIndex: this.state.currentVisibleImageIndex + 1
      });
    }

  }

  renderImages() {

    console.log(FILE_NAME + " In renderImages");

    var { imagesArray,currentVisibleImageIndex } = this.state;

    var { sliderHeight,imageWidth, defaultImageText } = this.props;

    console.log("images",imagesArray);

    if(defaultImageText == null)
      defaultImageText = "Attach Invoice Image";

    if( imagesArray.length != 0) {

      var base64Icon = 'data:' + imagesArray[currentVisibleImageIndex].imageType + ';base64,' + imagesArray[currentVisibleImageIndex].imageData;

      return (

        <Animated.Image source = {{ uri : base64Icon }}
         style = {[ ...styles.imageStyle, { opacity: this.state.opacity, height: sliderHeight - (2 * defaultMargin), width: imageWidth } ]}
         key = { this.state.image }
         onLoad = { this.onLoad() }
         />
      );

    }

    else {
      return (

        <EwH1Text
          text = { defaultImageText }
          customStyle = {{ alignSelf: "center" }}
        />

      );

    }

  }

  onLoad() {

    console.log(FILE_NAME + " In onLoad");

    Animated.timing(this.state.opacity,{

      toValue: 1,
      duration: 2000,

     }).start();

  }

  addNewImage() {

    console.log(FILE_NAME + " In addNewImage");

  //  let imageLocation = dirs.PictureDir ;
  //
    if(this.props.openGallery) {

      ImagePicker.openPicker({
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        includeBase64: true,
        compressImageQuality: 0.8,
        cropping: true
        }).then(image => {

          //console.log("Image properties ", image );

          var imageProperties = {

            imageData: image.data,
            imageType: image.mime,
            imagePath: image.path

          };

          updatedImages = this.state.imagesArray;

          updatedImages.push(imageProperties);

          this.setState({

            imagesArray: updatedImages

          });
      })
      .catch(err => {
        if(err == "Error: Cannot find image data")
          Alert.alert("Error","Upload correct format");
      });

    }

    else {

      ImagePicker.openCamera({
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        cropping: true,
        includeBase64: true,
        compressImageQuality: 0.8,
        }).then(image => {

          console.log("imageData is ", image);

          var imageProperties = {

            imageData: image.data,
            imageType: image.mime,
            imagePath: image.path

          };

          updatedImages = this.state.imagesArray;

          updatedImages.push(imageProperties);

          this.setState({

            imagesArray: updatedImages

          });
          /*RNFetchBlob.fs.writeFile(imageLocation, image.data, 'base64');
            console.log("FILE CREATED!!")
          RNFetchBlob.fs.scanFile([ { path : imageLocation } ])
          .then(() => {
            console.log("scan file success")
          })
          .catch((err) => {
           console.log("scan file error")
          })
          /*RNFetchBlob.fs.mkdir(PATH_TO_CREATE)
          .then(() => { console.log("done") })
          .catch((err) => { console.log(" not done",error) })*/

        /*  console.log("imageProperties from Camera - ", image);dirs = RNFetchBlob.fs.dirs;



          RNFetchBlob.fs.mkdir(PATH_TO_CREATE)
          .then(() => { ... })
          .catch((err) => { ... });
          RNFetchBlob.fs.writeFile(imageLocation, image.data, 'base64');
          console.log("FILE CREATED!!")
          RNFetchBlob.fs.scanFile([ { path : imageLocation } ])
          .then(() => {
            console.log("scan file success")
          })
          .catch((err) => {
           console.log("scan file error")
          })
          /*RNFetchBlob.fs.mv(image.path, dirs.PictureDir)
          .then(() => { console.log("done") })
          .catch((error) => { console.log(" not done",error) })*/
          //console.log("imageProperties from Camera - 1 ", updateParentState);

      })
      .catch(err => {

        if(err == "Error: Cannot find image data")
          Alert.alert("Error","Upload correct format");
      });

    }

  }

  deleteCurrentImage(imagesArray,currentVisibleImageIndex) {

    console.log(FILE_NAME + " In deleteCurrentImage");

    updatedImages  = imagesArray;

    if(updatedImages.length != 0) {

      updatedImages.splice(currentVisibleImageIndex,1);

      updatedCurrentVisibleImageIndex = 0;

      if(currentVisibleImageIndex != 0)
        updatedCurrentVisibleImageIndex = currentVisibleImageIndex - 1;

      this.setState({

        imagesArray: updatedImages,
        currentVisibleImageIndex: updatedCurrentVisibleImageIndex,
      });

    }

  }

}
