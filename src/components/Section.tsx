import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { FontsStyles } from '../theme/fonts';
import { spacing } from '../theme/spacing';

interface Props {
  headerText: string;
  subHeaderText: string;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const Section = ({ headerText, subHeaderText, text, style }: Props) => {
  return (
    <View style={style}>
      <Text style={[FontsStyles.header, styles.textMarginBottom]}>{headerText}</Text>
      <Text style={[FontsStyles.subHeader, styles.textMarginBottom]}>{subHeaderText}</Text>
      <Text style={FontsStyles.regular}>{text}</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  textMarginBottom: {
    marginBottom: spacing[1],
  },
});
