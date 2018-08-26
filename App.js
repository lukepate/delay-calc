import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight,Alert } from 'react-native';
import Swiper from 'react-native-swiper'
import Bpm from './bpm.js'
import Home from './home.js'

export default class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      value: 1,
    };
  }

  getData(val){
    // do not forget to bind getData in constructor
    Alert.alert(val);
  }

  _onPress(num) {


    if(num == "c"){
      num = this.state.value + num;
      this.setState({value: ''})
    }
    else{
      num = this.state.value + num;
      this.setState({value: num})
    }

  }

  SampleFunction2(StringHolder){
     Alert.alert(StringHolder);
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.container}>
          <Bpm sendData={this.getData}></Bpm>
        </View>
        <View style={styles.container}>
          <Bpm></Bpm>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
},
container: {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
},
slide1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB',
},
slide2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5',
},
slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9',
},
text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold',
}
});
