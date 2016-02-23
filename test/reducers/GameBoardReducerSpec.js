import React from 'react'
import { expect } from 'chai'
import reducers from '../../App/Reducers/GameBoard'
import types from '../../App/Actions/ActionTypes'

const reducer = reducers.gameBoard

describe('Reducers -> GameBoard -> initial state', () => {
  it('has a tileCount of zero', () => {
    const state = reducer(undefined, {})
    expect(state.tileCount).to.equal(0)
  })
})
