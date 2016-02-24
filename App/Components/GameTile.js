import React from 'react-native'
import Styles from '../Styles/GameTileStyle'
import Constants from '../Lib/Constants'
import Images from '../Theme/Images'
import Colors from '../Theme/Colors'
import {getRandomInt} from '../Lib/ViewHelpers'

const {
  Component,
  PropTypes,
  View,
  Image,
  TouchableWithoutFeedback
} = React

class GameTile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      owner: Constants.UNOWNED,
      orientation: Constants.UP
    }
    this.directionalIcon = this.directionalIcon.bind(this)
    this.initializeOrientation = this.initializeOrientation.bind(this)
    this.tileColor = this.tileColor.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.canPress = this.canPress.bind(this)
    this.updateOrientation = this.updateOrientation.bind(this)
    this.updateOwner = this.updateOwner.bind(this)
  }

  initializeOrientation () {
    const randomInt = getRandomInt(1, 4)
    let orientation
    switch (randomInt) {
      case 1:
        orientation = Constants.UP
        break

      case 2:
        orientation = Constants.RIGHT
        break

      case 3:
        orientation = Constants.DOWN
        break

      case 4:
        orientation = Constants.LEFT
        break
    }
    this.setState({orientation: orientation})
  }

  componentWillMount () {
    this.initializeOrientation()
  }

  handlePress () {
    if (this.canPress()) {
      this.updateOrientation()
      this.updateOwner()
    }
  }

  canPress (owner) {
    // will eventually test against the owner and the current player
    return true
  }

  updateOwner () {
    // set the owner to the current owner.
    // we don't have that passed in yet, so fake it for now
    this.setState({owner: Constants.PLAYER_A})
  }

  updateOrientation () {
    let newOrientation

    switch (this.state.orientation) {
      case Constants.UP:
        newOrientation = Constants.RIGHT
        break

      case Constants.RIGHT:
        newOrientation = Constants.DOWN
        break

      case Constants.DOWN:
        newOrientation = Constants.LEFT
        break

      case Constants.LEFT:
        newOrientation = Constants.UP
        break
    }
    this.setState({orientation: newOrientation})
  }

  directionalIcon () {
    switch (this.state.orientation) {
      case Constants.UP:
        return Images.upIcon

      case Constants.DOWN:
        return Images.downIcon

      case Constants.LEFT:
        return Images.leftIcon

      case Constants.RIGHT:
        return Images.rightIcon
    }
  }

  tileColor () {
    console.log(this.state.owner)
    switch (this.state.owner) {
      case Constants.UNOWNED:
        return Colors.unowned

      case Constants.PLAYER_A:
        return Colors.playerA

      case Constants.PLAYER_B:
        return Colors.playerB
    }
  }

  render () {
    const iconStyles = [Styles.directionalIcon, { tintColor: this.tileColor() }]
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={Styles.container}>
          <Image source={this.directionalIcon()} style={iconStyles}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

GameTile.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number
}

export default GameTile
