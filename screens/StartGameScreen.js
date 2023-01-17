import { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  const [input, setInput] = useState('')
  const inputHandler = (enteredNumber) => {
    setInput(enteredNumber)
    console.log(enteredNumber)
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
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#4e0329',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
