'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  render: function() {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('../components/img/gym_1.jpg')} />
            <View style={styles.header}></View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <View style={styles.imagecontainer}>
                      <Image style={styles.inputUsername} source={require('../components/img/icon_username_white.png')}/>
                    </View>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Enter Username"
                        placeholderTextColor="#ff8d00"
                        value={this.state.username}
                        onChangeText={this.usernameChange}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.imagecontainer}>
                      <Image style={styles.inputPassword} source={require('../components/img/icon_corgi_white.png')}/>
                    </View>
                    <TextInput
                        password={true}
                        secureTextEntry={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Enter Password"
                        placeholderTextColor="#ff8d00"
                        value={this.state.password}
                        onChangeText={this.passwordChange}
                    />
                </View>
                <TouchableOpacity
                  style={styles.forgotContainer}
                  onPress={this.forgotPassword}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.signin}
              onPress={this.signIn}>
                <Text style={styles.whiteFont}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signup}
              onPress={this.signUp}>
                <Text style={styles.greyFont}>Sign Up</Text>
            </TouchableOpacity>
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
    }
});
