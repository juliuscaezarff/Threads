import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'

import { dark } from '../themes/dark'

const TabRoutes = () => {
  const AppTab = createBottomTabNavigator()

  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: dark.colors.background,
          paddingTop: 16
        },
        title: ''
      }}
    >
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require('../assets/images/tab/home_focused.png')}
              />
            ) : (
              <Image source={require('../assets/images/tab/home.png')} />
            )
        }}
        name="Home"
        component={Home}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require('../assets/images/tab/search_focused.png')}
              />
            ) : (
              <Image source={require('../assets/images/tab/search.png')} />
            )
        }}
        name="Search"
        component={Home}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require('../assets/images/tab/post_focused.png')}
              />
            ) : (
              <Image source={require('../assets/images/tab/post.png')} />
            )
        }}
        name="NewThreads"
        component={Home}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require('../assets/images/tab/activity_focused.png')}
              />
            ) : (
              <Image source={require('../assets/images/tab/activity.png')} />
            )
        }}
        name="Activities"
        component={Home}
      />
      <AppTab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require('../assets/images/tab/profile_focused.png')}
              />
            ) : (
              <Image source={require('../assets/images/tab/profile.png')} />
            )
        }}
        name="Profile"
        component={Home}
      />
    </AppTab.Navigator>
  )
}

export default TabRoutes
