import React from 'react-native'
import Styles from '../Styles/GameTileStyle'
import Constants from '../Lib/Constants'

const {
  Component,
  PropTypes,
  View,
  Text
} = React

class GameTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      owner: Constants.PLAYER_A,
      orientation: Constants.UP
    }
  }

  render () {
    return (
      <View style={Styles.container}><Text>x</Text></View>
    )
  }
}

GameTile.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number
}

export default GameTile
