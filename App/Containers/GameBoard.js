import React from 'react-native'
import Metrics from '../Theme/Metrics'
import GameTile from '../Components/GameTile'
import styles from '../Styles/GameBoardStyle'
import {connect} from 'react-redux'
import * as actions from '../Actions/ActionCreators'

const {
  Component,
  View,
  PropTypes
} = React

class GameBoard extends Component {

  constructor (props) {
    super(props)
    this.tileCount = 0
  }

  componentDidMount () {
    this.props.dispatch(actions.initializeGame(this.tileCount))
  }

  renderColumn (row) {
    const maxColumns = Math.floor(Metrics.screenWidth / Metrics.tileDimension)
    const tiles = []
    for (let col = 0; col < maxColumns; col++) {
      let id = `row_${row}_col_${col}`
      let element = <GameTile key={id} ref={id} row={row} column={col} />
      tiles.push(element)
      this.tileCount++
    }
    return tiles
  }

  renderTiles () {
    const gameBoardHeight = Metrics.screenHeight - Metrics.statusBarHeight - Metrics.controlPanelHeight
    const maxRows = Math.floor(gameBoardHeight / Metrics.tileDimension)
    const rows = []
    for (let r = 0; r < maxRows; r++) {
      let element = <View key={`row_${r}`} style={styles.row}>{this.renderColumn(r)}</View>
      rows.push(element)
    }
    return rows
  }

  render () {
    return (
      <View style={styles.tilesContainer}>
        {
         this.renderTiles()
        }
      </View>
    )
  }
}

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(GameBoard)
