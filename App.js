import { StyleSheet, View } from 'react-native';
import MostrarSenha from './components/MostrarSenha';

export default function App() {
  return (
    <View style={styles.container}>
        <MostrarSenha/>
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
