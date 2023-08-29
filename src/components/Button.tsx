import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { FontsStyles } from '../theme/fonts';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const Button = ({ title, style, titleStyle, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[FontsStyles.primaryRegularBold, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderRadius: 16,
    borderWidth: 3,
    justifyContent: 'center',
    padding: spacing[3],
  },
});
