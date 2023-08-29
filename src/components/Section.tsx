import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { FontsStyles } from '../theme/fonts';
import { spacing } from '../theme/spacing';
import Button from './Button';

interface Props {
  headerText: string;
  subHeaderText: string;
  text: string;
  style?: StyleProp<ViewStyle>;
  onPressMore: () => void;
}

const Section = ({ headerText, subHeaderText, text, style, onPressMore }: Props) => {
  return (
    <View style={style}>
      <Text style={[FontsStyles.header, styles.textMarginBottom]}>{headerText}</Text>
      <Text style={[FontsStyles.subHeader, styles.textMarginBottom]}>{subHeaderText}</Text>
      <Text style={FontsStyles.regular}>{text}</Text>
      <Button style={styles.additionalMarginTop} title="Zobacz więcej" onPress={onPressMore} />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  additionalMarginTop: {
    marginTop: spacing[2],
  },
  textMarginBottom: {
    marginBottom: spacing[1],
  },
});
