import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const FontsStyles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  primaryRegularBold: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  regular: {
    color: Colors.primaryText,
    fontSize: 16,
  },
  subHeader: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
