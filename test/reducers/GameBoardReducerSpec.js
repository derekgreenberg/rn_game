import React from 'react'
import { expect } from 'chai'
import reducers from '../../App/Reducers/GameBoard'
import types from '../../App/Actions/ActionTypes'
import Constants from '../../App/Lib/Constants'

const reducer = reducers.gameBoard
const TILE_COUNT = 100

describe('Reducers -> GameBoard -> initial state', () => {
  const state = reducer(undefined, {})
  it('has a tileCount of zero', () => {
    expect(state.tileCount).to.equal(0)
  })

  it('zeroes out counts of tile ownership', () => {
    expect(state.unownedTiles).to.equal(0)
    expect(state.playerATiles).to.equal(0)
    expect(state.playerBTiles).to.equal(0)
  })

  it('sets the initial player to playerA', () => {
    expect(state.currentPlayer).to.equal(Constants.PLAYER_A)
  })

  it('sets gameInProgress to true', () => {
    expect(state.gameInProgress).to.equal(true)
  })
})

describe('Reducers -> Gameboard -> initialize game', () => {
  const action = {
    type: types.INITIALIZE_GAME,
    tileCount: TILE_COUNT
  }
  const state = reducer(undefined, action)
  it('sets the tileCount', () => {
    expect(state.tileCount).to.equal(TILE_COUNT)
  })

  it('sets unownedTiles to the tileCount', () => {
    expect(state.unownedTiles).to.equal(TILE_COUNT)
  })
})

