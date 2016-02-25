import types from './ActionTypes'

// helper
const createAction = (type, params = null) => ({ type, ...params })

export const initializeGame = (tileCount, maxRows, maxColumns) => createAction(types.INITIALIZE_GAME, { tileCount, maxRows, maxColumns })
