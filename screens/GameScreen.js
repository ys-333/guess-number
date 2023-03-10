import { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionText from '../components/ui/InstructionText'
import Card from '../components/ui/Card'
import GuessLogItem from '../components/game/GuessLogItem'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameRoundHandler, onGameOver }) {
  const initalGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initalGuess)
  const [round, setRound] = useState([initalGuess])

  const { width, height } = useWindowDimensions()

  console.log(minBoundary, maxBoundary, initalGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameRoundHandler(round.length)
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'you know this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      console.log('subtraction button clicked')
      maxBoundary = currentGuess
    } else {
      console.log('addition button clicked')
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    )
    setRound((prevRound) => {
      return [newRndNumber, ...prevRound]
    })
    setCurrentGuess(newRndNumber)
  }

  let content = (
    <>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  )

  if (width > 500) {
    content = (
      <>
        <Title style={styles.title}>Opponent's Guess</Title>
        <View style={styles.buttonLandscapeContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.screen}>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={round}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={itemData.index + 1}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

export default GameScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
  title: {
    marginTop: deviceWidth < 380 ? 18 : 28,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonLandscapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
