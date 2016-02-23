import { combineReducers } from 'redux'
import GameBoardReducers from './GameBoard'

export default combineReducers({
  ...GameBoardReducers
})
