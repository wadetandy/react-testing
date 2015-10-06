/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} = React;

var MovieList = require('./movie-list');
var TabLayoutAndroid = require('./tab-layout-android');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },

  renderNavigationView: function() {
    return (<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>)
  },

  render: function() {
    return (
      <TabLayoutAndroid>
        <MovieList/>
        <MovieList/>
      </TabLayoutAndroid>
    );
  },

  onActionSelected: function(position) {
    this.setState({
      actionText: 'Selected ' + this.actions()[position].title,
    });
  },

  actions: function() {
    return [
        {title: 'News', show: 'always'},
        {title: 'Search', show: 'always'},
    ]
  },
});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
