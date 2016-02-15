import React from 'react-native'
import Metrics from '../Theme/Metrics'
import styles from '../Styles/GameTileStyle'

const {
  Component,
  PropTypes,
  View,
  Text
} = React

class GameTile extends Component {
  render () {
    return (
      <View style={styles.container}><Text>x</Text></View>
    )
  }
}

GameTile.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number
}

export default GameTile
