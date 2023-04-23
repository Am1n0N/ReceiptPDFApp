import React from 'react';
import { StyleSheet, View } from 'react-native';
import BonDeLivraisonForm from '../components/BonDeLivraisonForm';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BonDeLivraisonForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
