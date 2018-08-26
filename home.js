import React from 'react';
import { StyleSheet, Text, View, Button,TouchableHighlight,Alert } from 'react-native';

export default class home extends React.Component {
  constructor(props) {
  super(props);
    this.state = { value: 1, };
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
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <View>
          <Text style={styles.bpmText}>Home</Text>
        </View>
      </View>

      <View>
        <Text style={styles.bpmText}>bpm</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "7") } title="7" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "8") } title="8" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "9") } title="9" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "6") } title="6" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "5") } title="5" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "4") } title="4" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "1") } title="1" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "2") } title="2" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "3") } title="3" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "c") } title="AC" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, "0") } title="0" color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>

          <TouchableHighlight style ={styles.buttonStyle}>
            <Button style={styles.buttonStyle} onPress={ this._onPress.bind(this, ".") } title="." color="#ffffff" accessibilityLabel="Tap on Me"/>
          </TouchableHighlight>
        </View>


      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bpmText:{
    color: '#fff',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#000000',
    borderRadius: 25,
    width:50,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    color: 'red',
  },
  wrapper: {
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
