'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker,
  ListView
} from 'react-native';
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');

var workout = {
  Neck: "Stretch your neck!",
  Traps: "It's a traps!",
  Shoulders: "Shrug those shoulders",
  Chest: "Eat chicken breast",
  Biceps: "Buy Spes",
  Forearm: "Moa power",
  Abs: "Abasfjaosidfj",
  Quads: "Quadraceptifphils",
  Calves: "and a cow",
  Triceps: "Are the future",
  Lats: "and longitude",
  Middleback: "not middle earth",
  Lowerback: "it's dangerous down there",
  Glutes: "n' free",
  Hamstrings: "oink oink"
};

module.exports = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      body_selection: {
        label: 'Select a muscle group',
        value: 'undefined'
      },
      dataSource: ds.cloneWithRows([]),
      dataArray: []
    }
  },
  render: function() {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('../components/img/bg_mountains_1.jpg')} />
            <View style={styles.body_parts_list}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) =>
                    <Text>{rowData.body_part}</Text>
                  }
                  style={styles.body_parts_listview} />
            </View>
            <View style={styles.body_parts_selector}>
              <Picker
                style={[styles.pickerStyle]}
                selectedValue={this.state.body_selection}
                onValueChange={(new_muscle_group) => this.setState({body_selection: new_muscle_group})}>
                <Picker.Item label="Select a muscle group" value="undefined"/>
                <Picker.Item label="Neck" value="Neck"/>
                <Picker.Item label="Traps" value="Traps"/>
                <Picker.Item label="Shoulders" value="Shoulders"/>
                <Picker.Item label="Chest" value="Chest"/>
                <Picker.Item label="Biceps" value="Biceps"/>
                <Picker.Item label="Forearm" value="Forearm"/>
                <Picker.Item label="Abs" value="Abs"/>
                <Picker.Item label="Quads" value="Quads"/>
                <Picker.Item label="Calves" value="Calves"/>
                <Picker.Item label="Triceps" value="Triceps"/>
                <Picker.Item label="Lats" value="Lats"/>
                <Picker.Item label="Middle Back" value="Middleback"/>
                <Picker.Item label="Lower Back" value="Lowerback"/>
                <Picker.Item label="Glutes" value="Glutes"/>
                <Picker.Item label="Hamstrings" value="Hamstrings"/>
              </Picker>
            </View>
            <View style={styles.body_parts_selector}>
              <TouchableOpacity
                style={{width: 230, height: 60}}
                onPress={()=> {
                  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                  var current_data_array = this.state.dataArray;
                  var current_body_selection = this.state.body_selection;
                  for (var i in current_data_array) {
                    if (current_data_array[i].body_part === current_body_selection) {
                      console.log("body part already there!");
                      console.log(current_data_array[i].body_part);
                      console.log(current_body_selection);
                      return;
                    } else {
                      console.log(current_data_array[i].body_part);
                      console.log(current_body_selection);
                      console.log("new body part");
                    }
                  }
                  current_data_array.push({body_part: current_body_selection});
                  this.setState({dataSource: ds.cloneWithRows(current_data_array)});}}
                buttonBackgroundColor='transparent'>
                <Text>add to list</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 230, height: 60}}
                onPress={()=> {
                  this.props.navigator.push({name: 'workouts', data: this.state.dataArray});
                }}
                buttonBackgroundColor='transparent'>
                <Text>log the workouts</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  },
  usernameChange: function(value) {
    this.setState({username: value});
  },
  passwordChange: function(value) {
    this.setState({password: value});
  },
  forgotPassword: function() {
    console.log('forgot your password');
    this.props.navigator.push({name: 'forgotpassword'});
  },
  signIn: function() {
    console.log('you have been signed in');
    this.props.navigator.push({name: 'landing'});
  },
  signUp: function() {
    console.log('You need to sign up');
    this.props.navigator.push({name: 'signup'});
  }
});

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 200,
        height: 200
    },
    signin: {
        backgroundColor: '#2BC1B6',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 20,
        marginBottom: 10,
        flex: .35
    },
    inputPassword: {
      width: 40,
      height: 40
    },
    inputUsername: {
      width: 40,
      height: 40
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        flex: 2
    },
    input: {
        flex: 5,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
      flex: 1
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#ff8d00'
    },
    imagecontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    body_parts_list: {
      flex: 2,
      backgroundColor: 'yellow'
    },
    body_parts_selector: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    },
    pickerStyle: {
      width: 220,
      height: 50,
      backgroundColor: 'pink'
    },
    body_parts_listview: {
      flex: 1
    }
});
