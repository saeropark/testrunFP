import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import AnnouncementList from './AnnouncementList.js';

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

export default class AnnouncementInfo extends Component {
    render() {
        var bus = this.props.bus;
        console.log(bus);
        //var features = (typeof buses.features !== 'undefined') ? buses.features : 'no features';
        return (
            //fetch json data and display
            <View style={styles.container}>
                <Text style = {styles.bigRect}>Map View here</Text>     
                <Text style={styles.features}>{bus.features}</Text>
                <View style = {styles.separator}/>
                <Text>Signage example:</Text>
                
                     <Text style={styles.rectangle}>{bus.notes.signage}</Text>
                
            
            <TouchableHighlight onPress={this.goBack.bind(this)}>
                <Text>Go Back</Text>
            </TouchableHighlight>
             </View>
        );
    }

    goBack() {
    console.log("go to back");
    this.props.navigator.pop({ screen: 'AnnouncementList' });
  }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    features: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
   rectangle: {
       height: 100,
       width: 100* 2,
       backgroundColor: 'white',
       borderColor: 'black',
       justifyContent: 'center',
       alignItems: 'center'
   },
   bigRect: {
       height: 200,
       width: 200*2,
       backgroundColor: 'white',
       borderColor: 'black',
       justifyContent: 'center',
       alignItems: 'center'
   }
});