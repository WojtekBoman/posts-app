import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';
import AddNewPost from '../screens/AddNewPost';

export type RootStackParamList = {
  Home: undefined;
  Posts: undefined;
  PostDetails: {
    id: number;
  };
  AddNewPost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="AddNewPost" component={AddNewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
