// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';
// import About from './components/about';
// import { createStackNavigator } from 'react-navigation/stack';


export default function App() {
  return (
    <View style={styles.container}>
         <Home />
         {/* <Image/> */}
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#202023",
    marginTop:20,
    padding:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  color:{
    color:"white"
  }
});
