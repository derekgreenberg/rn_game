
import React from 'react'

const RN = React

export const PropTypes = React.PropTypes

RN.StyleSheet = {
  create: (style) => style
}

RN.Dimensions = {
  get: (item) => {
    // iPhone 6 dimensions
    return {
      width: 375,
      height: 667
    }
  }
}

const createComponent = (type) => {
  return React.createClass({
    displayName: type,
    propTypes: {
      children: React.PropTypes.node
    },
    render () {
      return <div {...this.props}>{this.props.children}</div>
    }
  })
}

RN.View = createComponent('View')
RN.Text = createComponent('Text')
RN.TextInput = createComponent('TextInput')
RN.ActivityIndicatorIOS = createComponent('ActivityIndicatorIOS')
RN.Image = createComponent('Image')
RN.TouchableHighlight = createComponent('TouchableHighlight')
RN.ScrollView = createComponent('ScrollView')

export default RN
