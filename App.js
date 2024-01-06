import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable, TextInput } from 'react-native';

//dependencies
import Formulario from './src/components/Formulario';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Citas</Text>
      <Text style={styles.tituloBold}>Plus</Text>
      <Button title='aqui'/>
      <Pressable style={styles.pressableNewAppoint}>
        <Text style={styles.pressableTextNewAppoint}>New Appointment</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:30,
    // justifyContent: 'center',
  },
  titulo:{
    textAlign:'justify',
    color:'#374151',
    fontSize:30,
    fontWeight:'600',
  },
  tituloBold:{
    fontWeight:'900',
    color: '#6D28D9',
  },
  pressableNewAppoint:{
    backgroundColor:'#6d28d9',
    padding:20,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
  },
  pressableTextNewAppoint:{
    textAlign:'center',
    color:'#fff',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase',
  }

});
