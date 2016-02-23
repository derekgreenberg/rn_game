import React from 'react-native'
import Styles from '../Styles/ControlPanelStyle'

const {
  Component,
  View,
  Text
} = React

class ControlPanel extends Component {
  render () {
    return (
      <View style={Styles.container}>
        <Text>hey there</Text>
        <Text>hi there</Text>
        <Text>ho there</Text>
      </View>
    )
  }
}

export default ControlPanel
