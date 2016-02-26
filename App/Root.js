import GameScreen from './Components/GameScreen'
import { Provider } from 'react-redux'
import configureStore from './Store/ConfigureStore'

const store = configureStore()

import React, {
  Component
} from 'react-native'

export default class Root extends Component {
  constructor (props) {
    super(props)
    console.disableYellowBox = false
  }

  render () {
    return (
      <Provider store={store}>
        <GameScreen />
      </Provider>
    )
  }
}
