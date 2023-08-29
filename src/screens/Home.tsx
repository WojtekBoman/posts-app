import { SafeAreaView, View, StyleSheet, Text, Platform, Image, ScrollView } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { Colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Images } from '../img';
import { loremIpsumText } from '../utils/randomData';
import Section from '../components/Section';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const onPressMore = () => navigation.navigate('Posts');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={Images.logo} />
          </View>
          <Section
            headerText="Kilka słów o nas"
            subHeaderText="Czyli kim jesteśmy i dokąd zmierzamy?"
            text={loremIpsumText}
          />
          <Section
            headerText="Nasza oferta"
            subHeaderText="Dowiedz się co możemy Tobie zaoferować"
            text={loremIpsumText}
            style={[styles.lastSectionMargin, styles.additionalMarginTop]}
          />
        </ScrollView>

        <Button style={styles.additionalMarginTop} title="Zobacz więcej" onPress={onPressMore} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  additionalMarginTop: {
    marginTop: spacing[2],
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingBottom: Platform.OS === 'ios' ? spacing[0] : spacing[2],
    paddingHorizontal: spacing[3],
    paddingTop: spacing[2],
  },
  lastSectionMargin: {
    marginBottom: spacing[3],
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: spacing[3],
  },
});
