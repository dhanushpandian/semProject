import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,SafeAreaView ,TouchableHighlight, Button ,Alert,Platform, View,Dimensions} from 'react-native';
import WelcomeScreen from './app/WelcomeScreen';
import Viewimage from './app/Viewimage';

export default function App() {
  
  console.log("dash");
 
  return (
   
    //<WelcomeScreen></WelcomeScreen>
   <Viewimage></Viewimage>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:Platform.OS==="android"? 200:0,
  },
});
