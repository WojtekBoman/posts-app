import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { RootStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FontsStyles } from '../theme/fonts';
import { spacing } from '../theme/spacing';
import { useDeletePostMutation, useGetPostsQuery } from '../store/apis/postsApi';
import { Post } from '../types/Post';
import PostItem from '../components/PostItem';
import { Colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

type PostsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Posts'>;

const keyExtractor = (item: Post) => `${item.id}`;

const Posts = () => {
  const navigation = useNavigation<PostsNavigationProp>();

  const { data } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  const onPressItemDelete = (id: number) => deletePost(id);

  const renderItem = useCallback(({ item }: { item: Post }) => {
    return <PostItem item={item} onPressDelete={onPressItemDelete} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={FontsStyles.header}>Posty</Text>
        <FlatList
          data={data}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <Button title="Powrót" onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing[3],
    paddingBottom: Platform.OS === 'ios' ? spacing[0] : spacing[2],
  },
  list: {
    flexGrow: 1,
    marginTop: spacing[2],
  },
});
