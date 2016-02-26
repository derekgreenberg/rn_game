import types from './ActionTypes'

// helper
const createAction = (type, params = null) => ({ type, ...params })

export const initializeGame = (tileCount, maxRows, maxColumns) => createAction(types.INITIALIZE_GAME, { tileCount, maxRows, maxColumns })
export const tileTaken = (row, column, owner, orientation) => createAction(types.TILE_TAKEN, { row, column, owner, orientation })
