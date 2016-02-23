
import React from 'react-native'
import styles from '../Styles/GameScreenStyle'
import ControlPanel from '../Components/ControlPanel'
import GameBoard from '../Containers/GameBoard'

const {
  View,
  Component
} = React

class GameScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ControlPanel />
        <GameBoard />
      </View>
    )
  }
}

export default GameScreen
