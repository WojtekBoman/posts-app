import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useGetPostQuery } from '../store/apis/postsApi';
import { spacing } from '../theme/spacing';
import { FontsStyles } from '../theme/fonts';
import Button from '../components/Button';
import { Colors } from '../theme/colors';

type PostDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PostDetails'>;
type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;

const PostDetails = () => {
  const route = useRoute<PostDetailsRouteProp>();
  const navigation = useNavigation<PostDetailsNavigationProp>();

  const { data } = useGetPostQuery(route.params.id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={[FontsStyles.header, styles.titleMargin]}>{data?.title}</Text>
          <Text style={FontsStyles.regular}>{data?.description}</Text>
        </View>
        <Button style={styles.button} title="Powrót" onPress={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  button: {
    marginTop: spacing[2],
  },
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
  titleMargin: {
    marginBottom: spacing[1],
  },
});
