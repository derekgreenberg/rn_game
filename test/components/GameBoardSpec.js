import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import GameBoard from '../../App/Components/GameBoard'
import GameTile from '../../App/Components/GameTile'

describe('<GameBoard />', () => {
  it('renders a 9 x 15 grid of GameTiles', () => {
    const wrapper = shallow(<GameBoard />)
    expect(wrapper.length).to.equal(1)
    const tiles = wrapper.find(GameTile)
    expect(tiles.length).to.equal(135)
  })
})
