import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
const Stack = createStackNavigator()

const screenOptions ={
    headerShown : false,
}


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName = 'HomeScreen'
            screenOptions = {screenOptions}
        >
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen}/>
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  
)

export default SignedInStack