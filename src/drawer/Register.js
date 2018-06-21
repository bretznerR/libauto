import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Register from '../views/Register';

const LoginDrawerItem = StackNavigator({
  Playground: { screen: Register }
  },
  {
    headerMode: 'none'
  }
);

LoginDrawerItem.navigationOptions = {
  drawerLabel: 'INSCRIPTION',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
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

export default LoginDrawerItem;
