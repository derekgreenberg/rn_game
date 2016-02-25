'use strict'

import types from '../Actions/ActionTypes'
import Immutable from 'seamless-immutable'
import Constants from '../Lib/Constants'

const INITIAL_STATE = Immutable({
  tileCount: 0,
  maxRows: 0,
  maxColumns: 0,
  unownedTiles: 0,
  playerATiles: 0,
  playerBTiles: 0,
  currentPlayer: Constants.PLAYER_A,
  gameInProgress: true,
  turnInProgress: false
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INITIALIZE_GAME:
      return state.merge({
        tileCount: action.tileCount,
        unownedTiles: action.tileCount,
        maxColumns: action.maxColumns,
        maxRows: action.maxRows
      })

    default:
      return state
  }
}

export default { gameBoard: reducer }
