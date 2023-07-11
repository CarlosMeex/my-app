import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [correo, setCorreo] = useState('')
  return (
    <View style={styles.container}>

      <Image style={styles.images} source={require('./src/assets/images/meex.png')}/>
      <Text style={styles.heading}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCorreo}
        placeholder='Corre electronico'
        value={correo}
      />
      <TextInput
        style={styles.input}
        onChangeText={setCorreo}
        placeholder='Contraseña'
        value={correo}
      />
      <Pressable style={styles.button} >
        <Text style={styles.text}>Entrar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20
  },
  images:{
    resizeMode: "contain",
    width: '100%',
  },
  heading: {
    fontSize: 30,
    textAlign:"center",
    fontWeight:"bold",
    marginBottom: 5
  },
  input: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#06b6d4",
    borderRadius: 5
  },
  text:{
    fontSize:20,
    color:"white",
    padding:10,
    textAlign:"center"
  }
});
