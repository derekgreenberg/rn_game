import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../Reducers/'
import createLogger from 'redux-logger'
import R from 'ramda'

const LOGGING_BLACKLIST = ['EFFECT_RESOLVED', 'EFFECT_TRIGGERED', 'EFFECT_REJECTED']

// the master switch to turn off logging
const USE_LOGGING = true

// create a logger to optionally log REDUX actions
const logger = createLogger({
  predicate: (_, action) => {
    const { type } = action
    if (R.contains(type, LOGGING_BLACKLIST)) return false
    return USE_LOGGING
  }
})

// the store we create will have middleware
// NOTE:  it's important that logger is last apparently.
// https://github.com/fcomb/redux-logger/issues/20
const finalCreateStore = applyMiddleware(
  logger
)(createStore)

export default (initialState) => {
  return finalCreateStore(RootReducer)
}
