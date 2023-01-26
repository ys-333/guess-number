import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  Platform,
} from 'react-native'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({ roundsNumber, userNumber, onGameStart }) {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }
  if (height < 400) {
    imageSize = 80
  }

  const imageStyleLandscape = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen} alwaysBounceHorizontal={true}>
      <View style={styles.rooContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyleLandscape]}>
          <Image
            style={styles.image}
            source={require('../assets/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onGameStart}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  )
}
export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rooContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // borderWidth: deviceWidth < 380 ? 1 : 3,
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36,
    overflow: 'hidden',
  },
  imageContainerLandscape: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 18,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans-regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
})
