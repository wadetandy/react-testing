var React = require('react-native');
var {
    requireNativeComponent,
    View
} = React;

var TabLayoutItemAndroid = require('./tab-layout-item-android')


var TabLayoutAndroid = React.createClass({
  statics: {
    Item: TabLayoutItemAndroid
  },

  render: function() {
    return(
      <View>
        <RCTTabLayout>
          {this.props.children}
        </RCTTabLayout>
      </View>
    )
  },

  propTypes: {
    style: View.propTypes.style,
  },

})


var RCTTabLayout = requireNativeComponent('RCTTabLayout', TabLayoutAndroid);

module.exports = TabLayoutAndroid;
