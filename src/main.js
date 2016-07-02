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
import Workouts from './pages/workouts.js';

var ROUTES = {
  authentication: Authentication,
  landing: Landing,
  workouts: Workouts
};

module.exports = React.createClass({
  renderScene: function(route,navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} data={route.data}/>
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
