import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import SignUp from './src/Pages/SignUp';
import Login from './src/Pages/Login/';
import Home from './src/Pages/Home';
import Messages from './src/Pages/Messages';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from './src/Components/Colors/Color';

const Stack = createNativeStackNavigator();
function App() {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  });
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    );
  };
  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'orange',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="AnaSayfa"
          component={Home}
          options={{
            title: 'Odalar',
            headerRight: () => (
              <Icon
                name="logout"
                size={25}
                color={Color.primaryColor}
                onPress={() => {
                  auth().signOut();
                }}></Icon>
            ),
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={({route}) => ({title: route.params.group.name})}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeStack} />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
