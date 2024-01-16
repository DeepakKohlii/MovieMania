import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './DetailScreen'; // Import your DetailScreen component

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
