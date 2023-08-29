import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Post } from '../types/Post';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { FontsStyles } from '../theme/fonts';
import { format } from 'date-fns';
import Button from './Button';
import palette from '../theme/palette';

interface Props {
  item: Post;
  onPressItem: (id: number) => void;
  onPressDelete: (id: number) => void;
}

const PostItem = ({ item, onPressItem, onPressDelete }: Props) => {
  const handleOnPress = () => onPressItem(item.id);
  const handleOnPressDelete = () => onPressDelete(item.id);

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <View>
        <Text style={[FontsStyles.mediumBold, styles.textMargin]}>{item.title}</Text>
        <Text style={[FontsStyles.regular, styles.textMargin]}>{item.description}</Text>
        <Text style={[FontsStyles.regularSecondary]}>
          {format(new Date(item.createdAt), 'dd.MM.yyyy')}
        </Text>
      </View>
      <View>
        <Button
          onPress={handleOnPressDelete}
          style={styles.button}
          titleStyle={styles.buttonText}
          title="Usuń"
        />
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  button: {
    borderColor: palette.RED,
    borderWidth: 2,
  },
  buttonText: {
    color: palette.RED,
  },
  container: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing[2],
  },
  textMargin: {
    marginBottom: spacing[1],
  },
});
