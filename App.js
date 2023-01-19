import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen'
import { useState } from 'react'
import Colors from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  function pickedNumberHandler(value) {
    setUserNumber(value)
  }

  let screen = <StartGameScreen setNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
