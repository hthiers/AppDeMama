import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { initDB, insertNumber } from './database';

export default function App() {
  const [number, setNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await initDB();
      } catch (error) {
        console.error('Failed to initialize database', error);
      }
    };

    initializeDatabase();
  }, []);

  const saveNumber = async () => {
    try {
      await insertNumber(number);
      console.log('Number saved successfully');
      setLastNumber(number);
      setNumber('');
    } catch (err) {
      console.error('Failed to save number', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App de Mamá</Text>
        <Text>Próxima vacuna según edad</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          keyboardType="numeric"
          placeholder="Enter a number"
          placeholderTextColor="#888"
        />
        <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />
      </View>
      <Button title="Save Number" onPress={saveNumber} />
      {lastNumber !== '' && (
        <View style={styles.lastNumberContainer}>
          <Text style={styles.lastNumberTitle}>Edad del bebé</Text>
          <Text style={styles.lastNumber}>{lastNumber}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
