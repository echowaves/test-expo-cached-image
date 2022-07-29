import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CachedImage from 'expo-cached-image'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CachedImage
          source={{ uri: `https://i.pravatar.cc/1000?u=4b170797-abe3-5465-af48-7694dtr43a8ca` }}
          cacheKey={`4b170797-abe3-5465-af48-7694dtr43a8ca`}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
            // borderRadius: 10,
          }}
        />
      <StatusBar style="auto" />
    </View>
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
