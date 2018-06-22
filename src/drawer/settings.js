import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Settings from '../views/settings';

const SettingsDrawerItem = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'FAVORIS',
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#FFFFFF',
      },
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

SettingsDrawerItem.navigationOptions = {
  drawerLabel: 'FAVORIS',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="star"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};


export default SettingsDrawerItem;
