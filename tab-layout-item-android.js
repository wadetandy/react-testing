var React = require('react-native');
var {
    requireNativeComponent,
    Text,
    View
} = React;

var TabLayoutItemAndroid = React.createClass({
  render: function() {
    return(
      <Text>I am a tab</Text>
    )
  },

  propTypes: {
    style: View.propTypes.style,
  },

})


        // <RCTTabLayoutItem>
        //   {this.props.children}
        // </RCTTabLayoutItem>
// var RCTTabLayoutItem = requireNativeComponent('RCTTabLayoutItem', TabLayoutItemAndroid);
//
// module.exports = TabLayoutItemAndroid;
