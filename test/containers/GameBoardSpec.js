import React from 'react'
import { shallow, mount, describeWithDOM } from 'enzyme'
import { expect } from 'chai'
import GameBoard from '../../App/Containers/GameBoard'
import GameTile from '../../App/Components/GameTile'
import configureStore from '../../App/Store/ConfigureStore'
import { Provider } from 'react-redux'

describe('<GameBoard />', () => {
  describeWithDOM('Tiles', () => {
    it('renders a 9 x 15 grid of GameTiles', () => {
      const store = configureStore()
      const wrapper = mount(<Provider store={store}><GameBoard /></Provider>)
      expect(wrapper.length).to.equal(1)
      const tiles = wrapper.find(GameTile)
      expect(tiles.length).to.equal(135)
    })
  })
})

