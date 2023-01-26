import { useState } from 'react'
import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({ setNumber }) => {
  const [input, setInput] = useState('')
  const inputHandler = (enteredNumber) => {
    setInput(enteredNumber)
  }

  const restInputHandler = () => {
    setInput('')
  }

  const confirmInputHandler = () => {
    const enteredNumber = parseInt(input)

    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert('Invalid input', 'Number must be in between 0 and 100', [
        { text: 'Okay', style: 'destructive', onPress: restInputHandler },
      ])
      return
    }

    setNumber(enteredNumber)
  }

  const { width, height } = useWindowDimensions()
  console.log(width, height)
  const marginTopResponsive = height < 400 ? 40 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[styles.rootContainer, { marginTop: marginTopResponsive }]}
        >
          <Title>Guess my Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={inputHandler}
              value={input}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={restInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
export default StartGameScreen

// const deviceHeight = Dimensions.get('window').height

// console.log(deviceHeight)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  textInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  buttonContainer: {
    flex: 1,
  },
})
