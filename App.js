import React from 'react';
import {StyleSheet, Text, View, Image, Button, TextInput, AsyncStorage, Linking } from 'react-native' ;
import {StackNavigator} from 'react-navigation' ;
import { Constants } from 'expo';


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null };
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.name}>Kazimieras</Text>
        <Image
        source={require('./img/Kazimieras.png')}
        style={{ width: 200, height: 200, marginBottom: 20, marginTop: 20, borderRadius: 20}}
      />
        <Button
          title="My Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  constructor(props) {
   super(props);
   var word;
   AsyncStorage.getItem('aboutme').then((value) => word );
   if (true) {
     this.state = {text: 'If I were a fisherman who caught a golden fish, one of my wishes would be to join Zenitech team and start my internship at that company.'};
   } else {
     this.state = {text: word};

   }
 }
 _handleAboutMe = (text) => {
  this.setState({ text: text });
  AsyncStorage.setItem('aboutme', text);

}

  static navigationOptions = {
    title: 'My Profile',
  };

  render() {
    return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>

      <Image
      source={require('./img/Kazimieras.png')}
      style={{ width: 150, height: 150, borderRadius: 10 }}
    />
        <Text style={{fontWeight: 'bold',fontSize: 25,}}>Kazimieras</Text>

        <Text style={{fontWeight: 'bold',fontSize: 15}}>About me</Text>
        <TextInput style ={{fontSize: 10, color: 'black', backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20}}
              underlineColorAndroid = "transparent"
              placeholderTextColor = "#9a73ef"
              multiline = {true}
              numberOfLines = {4}
              maxLength = {150}
              autoCapitalize = "none"
              value={this.state.text}
              onChangeText = {(text) => this._handleAboutMe(text)}
         />
        <Button style={{marginTop:20}} title="My GitHub profile" onPress={ ()=>{ Linking.openURL('https://github.com/KazimierasKalnikas/ProfileKalnikas')}} />
      </View>
    );
  }

   }


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
