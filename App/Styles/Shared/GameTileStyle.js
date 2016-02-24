import Metrics from '../../Theme/Metrics'
import Colors from '../../Theme/Colors'

export default {
  container: {
    width: Metrics.tileDimension,
    height: Metrics.tileDimension,
    borderWidth: 1,
    borderColor: Colors.tileBorder,
    alignItems: 'center',
    justifyContent: 'center'
  },
  directionalIcon: {
    width: Metrics.directionalIconDimension,
    height: Metrics.directionalIconDimension,
    resizeMode: 'contain',
    tintColor: Colors.playerA
  }
}
