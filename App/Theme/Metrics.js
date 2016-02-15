
import React from 'react-native'
const { width, height } = React.Dimensions.get('window')
const metrics = {
  screenWidth: width,
  screenHeight: height,
  screenMargin: 10,
  statusBarHeight: 20,
  controlPanelHeight: 20,
  tileDimension: 40
}

export default metrics
