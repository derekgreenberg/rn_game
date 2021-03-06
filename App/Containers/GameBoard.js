import React from 'react-native'
import Metrics from '../Theme/Metrics'
import GameTile from '../Components/GameTile'
import Styles from '../Styles/GameBoardStyle'
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
    this.maxColumns = 0
    this.maxRows = 0
    this.handleTilePress = this.handleTilePress.bind(this)
  }

  componentDidMount () {
    const {dispatch} = this.props
    dispatch(actions.initializeGame(this.tileCount, this.maxRows, this.maxColumns))
  }

  handleTilePress (row, column, owner, orientation) {
    const {dispatch} = this.props
    dispatch(actions.tileTaken(row, column, owner, orientation))
  }

  renderColumn (row) {
    const maxColumns = Math.floor(Metrics.screenWidth / Metrics.tileDimension)
    const { currentPlayer, gameInProgress } = this.props.gameBoard
    const tiles = []
    this.maxColumns = maxColumns
    for (let col = 0; col < maxColumns; col++) {
      let id = `row_${row}_col_${col}`
      let element = <GameTile
                      key={id}
                      ref={id}
                      row={row}
                      column={col}
                      currentPlayer={currentPlayer}
                      gameInProgress={gameInProgress}
                      onTilePress={this.handleTilePress}
                    />
      tiles.push(element)
      this.tileCount++
    }
    return tiles
  }

  renderTiles () {
    const gameBoardHeight = Metrics.screenHeight - Metrics.statusBarHeight - Metrics.controlPanelHeight
    const maxRows = Math.floor(gameBoardHeight / Metrics.tileDimension)
    const rows = []
    this.maxRows = maxRows
    for (let r = 0; r < maxRows; r++) {
      let element = <View key={`row_${r}`} style={Styles.row}>{this.renderColumn(r)}</View>
      rows.push(element)
    }
    return rows
  }

  render () {
    return (
      <View style={Styles.tilesContainer}>
        {
         this.renderTiles()
        }
      </View>
    )
  }
}

GameBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameBoard: PropTypes.object
}

const mapStateToProps = (state, myProps) => {
  return {
    gameBoard: state.gameBoard
  }
}

export default connect(mapStateToProps)(GameBoard)
