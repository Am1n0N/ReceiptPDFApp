import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Dimensions, ScrollView } from 'react-native';
import ItemForm from './ItemForm';
import generatePdf from '../services/pdfGenerator';

const { width, height } = Dimensions.get('window');

export default function BonDeLivraisonForm() {
  const [companyName, setCompanyName] = useState('');
  const [mfNumber, setMfNumber] = useState('');
  const [bonNumber, setBonNumber] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientNumber, setClientNumber] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, {}]);
  };

  const handleItemChange = (index, name, value) => {
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleGeneratePdf = async () => {
    const data = {
      companyName,
      mfNumber,
      bonNumber,
      clientAddress,
      clientNumber,
      date,
      items,
    };
    await generatePdf(data);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bon de livraison</Text>
      <ScrollView style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Nom de l'entreprise:</Text>
          <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={setCompanyName}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Adresse de livraison du client:</Text>
          <TextInput
            style={styles.input}
            value={clientAddress}
            onChangeText={setClientAddress}
          />
        </View>


        <View style={styles.field}>
          <Text style={styles.label}>Numéro de téléphone du client:</Text>
          <TextInput
            style={styles.input}
            value={clientNumber}
            onChangeText={setClientNumber}
            keyboardType='numeric'
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Numéro de bon de livraison:</Text>
          <TextInput
            style={styles.input}
            value={bonNumber}
            onChangeText={setBonNumber}
            keyboardType='numeric'
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Numéro de MF:</Text>
          <TextInput
            style={styles.input}
            value={mfNumber}
            onChangeText={setMfNumber}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Articles:</Text>
          {items.map((item, index) => (
            <ItemForm
              key={index}
              index={index}
              item={item}
              onChange={handleItemChange}
              onRemove={handleRemoveItem}
            />
          ))}
          <Button title="Ajouter un article" onPress={handleAddItem} />
        </View>
      </ScrollView>
      <Button title="Générer un PDF" onPress={handleGeneratePdf} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
  },
  heading: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  form: {
    flex: 1,
  },
  field: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: height * 0.03,
    marginBottom: height * 0.01,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: height * 0.02,
    fontSize: height * 0.03,
  },
});