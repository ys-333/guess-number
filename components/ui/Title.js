import { Text, StyleSheet } from 'react-native'

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>
}
export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
})
