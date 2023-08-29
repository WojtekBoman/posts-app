import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { FontsStyles } from '../theme/fonts';
import { DESC_MAX_LENGTH, TITLE_MAX_LENGTH } from '../constants/input';
import Button from '../components/Button';
import { useAddPostMutation } from '../store/apis/postsApi';
import { RootStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type AddNewPostNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddNewPost'>;

const AddNewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation<AddNewPostNavigationProp>();

  const [addPost] = useAddPostMutation();

  const handleOnPressSubmit = () => {
    if (!title && !description) {
      return;
    }

    addPost({ title, description }).then(() => navigation.goBack());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={FontsStyles.header}>Dodaj nowy post</Text>
          <TextInput
            maxLength={TITLE_MAX_LENGTH}
            style={styles.input}
            placeholder="Tytuł"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            numberOfLines={5}
            multiline={true}
            maxLength={DESC_MAX_LENGTH}
            style={[styles.input, styles.descInput]}
            placeholder="Opis"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <Button title="Dodaj" onPress={handleOnPressSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  descInput: {
    height: 150,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? spacing[0] : spacing[2],
    paddingHorizontal: spacing[3],
    paddingTop: spacing[2],
  },
  input: {
    borderColor: Colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: spacing[2],
    padding: spacing[2],
  },
});
