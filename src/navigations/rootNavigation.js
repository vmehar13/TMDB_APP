import { View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import home from '../screens/home'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import MovieDetail from '../screens/movieDetail'

const RootNavigation = () => {

const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen name='Home' component={home}
        options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false
        }}
    />
    <Stack.Screen name='MovieDetail' component={MovieDetail}
        options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: true,
            title: "Movie Detail",
            gestureDirection: "horizontal"
        }}
    />
    </Stack.Navigator>
  )
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation)