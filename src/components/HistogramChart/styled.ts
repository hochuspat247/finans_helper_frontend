import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  xAxisContainer: {
    position: 'relative',
    height: 20,
  },
  xAxisLabel: {
    position: 'absolute',
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    width: 20, // Фиксированная ширина для меток
  },
});

export default styles;