
import React from 'react-native'
import styles from '../Styles/GameScreenStyle'

const {
  View,
  Text,
  Component
} = React

export default class GameScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}
