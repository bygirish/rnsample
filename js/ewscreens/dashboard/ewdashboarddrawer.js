import React from 'react';
import { PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';

import { DefaultRenderer, Actions } from 'react-native-router-flux';
import DrawerSideBarView from './drawersidebarview';
import MainScreen from './MainScreen';

const propTypes = {
  navigationState: PropTypes.object,
};


const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

const FILE_NAME = "ewdashboarddrawer.js : ";


class EwDashboardDrawer extends React.Component {


constructor(props, context){

    super(props, context);

    this.state = {
          drawerType: 'overlay',
          openDrawerOffset: 100,
          closedDrawerOffset: 0,
          panOpenMask: .1,
          panCloseMask: null,
          relativeDrag: false,
          panThreshold: .25,
          disabled: false,
          acceptDoubleTap: false,
          acceptTap: false,
          acceptPan: true,
          tapToClose: true,
          negotiatePan: false,
          rightSide: false,
          currenMessage: null,
          //refreshToggle: false
        };



}



setDrawerType(type) {
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio) {
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange() {
    this.sertState({
      changeVal: Math.random()
    })
  }

  openDrawer() {
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  /*
  Tasks to do on changing of props
  */
  componentWillReceiveProps(nextProps) {

    console.log(FILE_NAME + "In componentWillReceiveProps");
    console.log("New Props are - ", nextProps);

    if(nextProps.messageDetails != null)
    this.setState ( {

      currenMessage : nextProps.messageDetails
    })


  }

  render() {

    var controlPanel = <DrawerSideBarView closeDrawer={() => {
     this.drawer.close();}} /> ;

    console.log("Inside ewdashboard drawer");
    console.log("Inside ewdashboard drawer",this.props.refreshToggle);

    //const state = this.props.navigationState;
    //const children = state.children;
    return (

      <Drawer
        ref = { c => this.drawer = c }
        type = { this.state.drawerType }
        animation = { this.state.animation }
        openDrawerOffset = { this.state.openDrawerOffset }
        closedDrawerOffset = { this.state.closedDrawerOffset }
        panOpenMask = { this.state.panOpenMask }
        panCloseMask = { this.state.panCloseMask }
        relativeDrag = { this.state.relativeDrag }
        panThreshold = { this.state.panThreshold }
        content = { controlPanel }
        styles = { drawerStyles }
        disabled = { this.state.disabled }
        acceptDoubleTap = { this.state.acceptDoubleTap }
        acceptTap = { this.state.acceptTap }
        acceptPan = { this.state.acceptPan }
        tapToClose = { this.state.tapToClose }
        negotiatePan = { this.state.negotiatePan }
        changeVal = { this.state.changeVal }
        side = { this.state.rightSide ? 'right' : 'left' }
        >

        <MainScreen
          drawerType = { this.state.drawerType }
          setParentState = { this.setStateFrag.bind(this) }
          openDrawer = { this.openDrawer.bind(this) }
          openDrawerOffset = { this.state.openDrawerOffset }
          closedDrawerOffset = { this.state.closedDrawerOffset }
          panOpenMask = { this.state.panOpenMask }
          panCloseMask = { this.state.panCloseMask }
          relativeDrag = { this.state.relativeDrag }
          panStartCompensation = { this.state.panStartCompensation }
          disabled = { this.state.disabled }
          panThreshold = { this.state.panThreshold }
          animation = { this.state.animation }
          noopChange = { this.noopChange.bind(this) }
          acceptTap = { this.state.acceptTap }
          acceptDoubleTap = { this.state.acceptDoubleTap }
          acceptPan = { this.state.acceptPan }
          tapToClose = { this.state.tapToClose }
          negotiatePan = { this.state.negotiatePan }
          rightSide = { this.state.rightSide }
        />

      </Drawer>
    );
  }
}

const mapStateToProps = state => ({

  //refreshToggle: state.common.refreshToggle

});


export default connect(mapStateToProps)(EwDashboardDrawer);
//EwDashboardDrawer.propTypes = propTypes;
