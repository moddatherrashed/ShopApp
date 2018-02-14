import HomeScreen from './HomeScreen';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
}, {
  drawerWidth: 300
});