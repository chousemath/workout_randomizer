import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Authentication from './pages/authentication.js';
import Landing from './pages/landing.js';

var ROUTES = {
  authentication: Authentication,
  landing: Landing
};

module.exports = React.createClass({
  renderScene: function(route,navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>
  },
  render: function(){
    return <Navigator
      style={styles.container}
      initialRoute={{name: 'authentication'}}
      renderScene={this.renderScene}
      configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
    />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
