'use strict'

import Styles from './Styles/Game'
import React, {
  Component,
  Text,
  View
} from 'react-native'

export default class Root extends Component {
  render () {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to React Native! YAAAY!! Welcome android users too. Android. I like Android. It is fun.Test!
        </Text>
        <Text style={Styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={Styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

