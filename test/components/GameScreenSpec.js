import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import GameScreen from '../../App/Components/GameScreen'
import ControlPanel from '../../App/Components/ControlPanel'
import GameBoard from '../../App/Containers/GameBoard'

describe('<GameScreen />', () => {
  it('renders a ControlPanel and a GameBoard', () => {
    const wrapper = shallow(<GameScreen />)
    expect(wrapper.length).to.equal(1)
    expect(wrapper.contains(<ControlPanel />)).to.equal(true)
    expect(wrapper.contains(<GameBoard />)).to.equal(true)
  })
})
