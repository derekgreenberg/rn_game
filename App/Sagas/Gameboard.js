import { put, take } from 'redux-saga/effects'
import Types from '../Actions/ActionTypes'
import Actions from '../Actions/ActionCreators'

export function * watchTilePress () {
  while (true) {
    const {row, column, owner, orientation} = yield take(Types.TILE_TAKEN)
    console.log('************* saga invoked!!!')
    console.log({row, column, owner, orientation})

  }
}