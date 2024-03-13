import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,SafeAreaView ,TouchableHighlight } from 'react-native';

export default function App() {
  console.log("dash");
  const pre=()=>console.log("clicked");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={pre}>DHANUSHH</Text>
      <TouchableHighlight onPress={pre}>
      <Image
  style={styles.tinyLogo}
  source={{ 
    width: 200,
    height: 200,
    uri: "https://picsum.photos/id/237/200/300" }}
/>
    </TouchableHighlight>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
