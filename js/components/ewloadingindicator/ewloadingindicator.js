import { Image, View, StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Container, ListItem, Button, Picker, Body, Left, Right,Thumbnail, Header,Title, H1, H2, H3, Text, Spinner, InputGroup, Icon, Form, Label, Input, Item, Content} from 'native-base';
import styles from './styles';

export default class EwLoadingIndicator extends Component{

render(){


  /*
  <View style={{alignItems:'center', justifyContent:'center'}}>
    <Spinner style={{alignSelf:'center', marginTop:10, marginBottom:10}} />
    <Text style={{alignSelf:'center', marginTop:10, marginBottom:10 }}>{(this.props.loadingText==undefined)? "Loading..." : this.props.loadingText}
  </Text>
  </View>

<Container style={{alignItems:'center', justifyContent: 'center'}}>
  <Content style={{flex:1, marginTop:10, marginBottom:10, flexDirection:'column', alignSelf:'center',}}>
    <View>
      <Spinner style={{marginTop:10, marginBottom:10}} />
      <Text style={{marginTop:10, marginBottom:10 }}>{(this.props.loadingText==undefined)? "Loading..." : this.props.loadingText}
      </Text>
    </View>
  </Content>
</Container>
*/

  return(

    <Container style = {{ alignItems:'center', justifyContent: 'center' }}>

        <View>
          <Spinner />
            <H3 style = {{ paddingTop: 5, paddingBottom: 5, marginTop: 10, marginBottom: 10 }}>{ (this.props.loadingText == undefined) ? "Loading..." : this.props.loadingText }
            </H3>
        </View>

    </Container>


  );
}


}
