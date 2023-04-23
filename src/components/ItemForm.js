import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function ItemForm({ index, item, onChange, onRemove }) {
  const handleItemChange = (name, value) => {
    onChange(index, name, value);
  };

  const handleRemoveItem = () => {
    onRemove(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Référence:</Text>
        <TextInput
          style={styles.input}
          value={item.reference}
          onChangeText={(value) => handleItemChange('reference', value)}
          placeholder="Référence"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Désignation:</Text>
        <TextInput
          style={styles.input}
          value={item.designation}
          onChangeText={(value) => handleItemChange('designation', value)}
          placeholder="Désignation"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Unité:</Text>
        <TextInput
          style={styles.input}
          value={item.unit}
          onChangeText={(value) => handleItemChange('unit', value)}
          placeholder="Unité"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Quantité:</Text>
        <TextInput
          style={styles.input}
          value={item.quantity}
          onChangeText={(value) => {
            handleItemChange('quantity', value);
            handleItemChange('amount', item.quantity * item.unitPrice);
          }}
          placeholder="Quantité"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Prix unitaire:</Text>
        <TextInput
          style={styles.input}
          value={item.unitPrice}
          onChangeText={(value) => {
            handleItemChange('unitPrice', value);
            handleItemChange('amount', item.quantity * item.unitPrice);
          }}
          placeholder="Prix unitaire"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.amount}>
        Montant: {item.quantity * item.unitPrice} €
      </Text>
      <Button title="Supprimer" onPress={handleRemoveItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    marginLeft: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
