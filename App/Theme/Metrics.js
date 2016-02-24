
import React from 'react-native'
const { width, height } = React.Dimensions.get('window')
const TILE_DIMENSION = 40
const metrics = {
  screenWidth: width,
  screenHeight: height,
  screenMargin: 10,
  statusBarHeight: 20,
  controlPanelHeight: 20,
  tileDimension: TILE_DIMENSION,
  directionalIconDimension: TILE_DIMENSION - 5
}

export default metrics
