import { StyleSheet } from 'react-native'
import styles from './Shared/ControlPanelStyle'
import _ from 'lodash'

const ios = {
  container: {
    backgroundColor: 'transparent'
  }
}
const iosStyles = _.merge(styles, ios)

export default StyleSheet.create(iosStyles)

