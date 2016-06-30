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
                <Picker.Item label="°F" value="degf"/>
                <Picker.Item label="K" value="k"/>
              </Picker>
            </View>
            <View style={styles.body_parts_selector}>
              <TouchableOpacity
                style={{width: 230, height: 60}}
                onPress={()=> {
                  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                  (this.state.dataArray).push({body_part: this.state.body_selection});
                  this.setState({dataSource: ds.cloneWithRows(this.state.dataArray)});}}
                buttonBackgroundColor='transparent'>
                <Text>add to list</Text>
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
