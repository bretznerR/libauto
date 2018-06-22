import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Contact from '../views/contact';

const ListsDrawerItem = StackNavigator({
  Playground: { screen: Contact }
},
  {
    headerMode: 'none'
  }
);

ListsDrawerItem.navigationOptions = {
  drawerLabel: 'CONTACT',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="contact-mail"
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

export default ListsDrawerItem;
