import React, { Text } from 'react'
import styles from '../../App/Styles/GameScreenStyle'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import GameScreen from '../../App/Screens/GameScreen'

describe('Screen: GameScreen', () => {
  it('renders text', () => {
    const wrapper = shallow(<GameScreen />)
    expect(wrapper.length).to.equal(1)
    expect(wrapper.contains(<Text style={styles.welcome}>Welcome to React Native!</Text>)).to.equal(true)
  })
})
