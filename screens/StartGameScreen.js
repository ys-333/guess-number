import { useState } from 'react'
import { TextInput, StyleSheet, View, Alert } from 'react-native'
import Colors from '../constants/colors'

import PrimaryButton from '../components/PrimaryButton'

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

  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}
export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    // ios color
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    textAlign: 'center',
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
