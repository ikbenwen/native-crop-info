import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './screens/PlantIndex'
import PlantIndex from "./screens/PlantIndex";

const fetch = require('node-fetch');


(async () => {
    const response = await fetch('https://trefle.io/api/v1/plants/search?token=BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc&q=Strawberry-tomato');
    const json = await response.json();
    console.log(json);
})();

// function HomeScreen({ navigation }) {
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//             title="Go to Details"
//             onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//   );
// }

// function DetailsScreen() {
//   return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
          <Stack.Screen name="Plants" component={PlantIndex} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
