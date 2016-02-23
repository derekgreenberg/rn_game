'use strict'

import types from '../Actions/ActionTypes'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  tileCount: 0
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INITIALIZE_GAME:
      return state.merge({
        tileCount: action.tileCount
      })

    default:
      return state
  }
}

export default { gameBoard: reducer }
