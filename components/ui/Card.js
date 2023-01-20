import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.container}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    padding: 16,
    marginTop: 36,
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
})
