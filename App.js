/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const App: () => React$Node = () => {
  
  const [user, setUser] = useState({
    "facebook": "ParisCity", 
    "musicalStyles": "Disco, Funk, House, Latino, ...",
    "presentation": "Here since 1900",
    "tel": "0606060606", 
    "website": "paris.fr"
  });
  const [name, setName] = useState('');

  const renderContentBottomSheet = () => {
    console.log(user[name]);

    switch (name) {
    case 'presentation':
      return (
          <TextInput maxLength={180} multiline={true} placeholder={'Votre présentation'} style={styles.itemContentBS} value={user[name]} onChangeText={(text) => {inputHandler(text, name);}}/>
      );
    case 'tel':
      return (
          <TextInput keyboardType="phone-pad" placeholder={'Numéro de téléphone'} style={styles.itemContentBS} value={user[name]} onChangeText={(text) => {return inputHandler(text, name);}}/>
      );
    case 'website':
      return (
          <TextInput placeholder={'Votre site internet'} style={styles.itemContentBS} value={user[name]} onChangeText={(text) => {return inputHandler(text, name);}}/>
      );
    case 'facebook':
      return (
          <TextInput style={styles.itemContentBS} value={user[name]} onChangeText={(text) => {return inputHandler(text, name);}}/>
      );
    case 'musicalStyles':
      return (
          <TextInput multiline={true} style={styles.itemContentBS} value={user[name]} onChangeText={(text) => {return inputHandler(text, name);}}/>
      );
    default:
      break;
    }

  };

  const inputHandler = (text, _objectName) => {
    setUser((prevUser) => {return {
      ...prevUser,
      [_objectName]: text.toString(),
    };});
  };

  return (
    
    <View style={styles.container}>
      <SafeAreaView>
      <TouchableOpacity onPress={() => {setName('presentation');}}><Text style={styles.editme}>{user.presentation} {'//is multiline'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {setName('tel');}}><Text style={styles.editme}>{user.tel}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {setName('website');}}><Text style={styles.editme}>{user.website}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {setName('facebook');}}><Text style={styles.editme}>{user.facebook}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {setName('musicalStyles');}}><Text style={styles.editme}>{user.musicalStyles} {'//is multiline'}</Text></TouchableOpacity>

      {renderContentBottomSheet()}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9FC',
    flex: 1,
  },
  containerBS: {
    backgroundColor: '#F7F9FC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingTop: 2,
  },
  itemContentBS: {
    color: '#25265E',
    borderRadius: 4,
    backgroundColor: '#FFF',
    borderBottomColor: '#787993',
    borderBottomWidth: 2,
    fontSize: 18,
    marginBottom: 18,
    paddingHorizontal: 16,
    paddingVertical:18,
    shadowColor: '#787993',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadowBox: {
    shadowColor: '#787993',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.65,

    elevation: 8,
  },
  editme: {
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    backgroundColor:'#000030',
    color: '#FFF',
    marginHorizontal: 8,
    marginVertical: 3,
  }
});


export default App;
