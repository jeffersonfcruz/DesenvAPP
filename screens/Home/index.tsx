import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, View } from "react-native";
import Detalhes from "../Detalhes";
import Content from "./components/Content";
import Header from "./components/Header";
import Panel from "./components/Panel";

const Stack = createNativeStackNavigator();
export default function Home() {
 
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name = "Inicio" component={Inicio} options={{headerShown:false}}/>
        <Stack.Screen name = "Detalhes" component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  function Inicio({ navigation }) {
    return (
    <View style={{flex:1}}>
      <ScrollView>
        <Header />
        <Panel />
        <Content tela = {navigation}/>
      </ScrollView>
    </View>
  );
}