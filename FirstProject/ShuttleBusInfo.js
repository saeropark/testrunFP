import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';
import ShuttleBusList from './ShuttleBusList.js';


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

var bus;
var id;
var busStopArray = [];

export default class BookDetail extends Component {

    constructor(props) {
        super(props);
            bus = this.props.bus;
            id = bus.id;
        }
    //     this.state = {
    //         isLoading: true, 
    //         //dataSource is the interface
    //         dataSource: new ListView.DataSource({
    //         rowHasChanged: (row1, row2)=> row1 !== row2
    //         })
    //     };
    // }

    componentDidMount() {
        this.fetchData();
    }

    // // --- calls Google API ---
    fetchData() {
        fetch(this.requestURL(bus))
        .then((response) => response.json())
        .then((responseData) => {
            responseData = this.getBusStopDescriptions(responseData);
            busStopArray = responseData;
            console.log("array:");
            console.log(this.busStopArray);
            // this.setState({
            //     dataSource: this.state.dataSource.cloneWithRows(responseData),
            //     //dataSource: this.state.dataSource.cloneWithRows(responseData["items"]),
            //     isLoading: false
            // });
            
        })
        .done();
    }

    requestURL(bus){
        return 'https://api.beeline.sg/routes/'+ id+'?include_trips=true&include_features=true';
    }

    render() {
        var results = this.requestURL(bus);
        console.log(bus);
        console.log(this.requestURL(bus));
        //var features = (typeof buses.features !== 'undefined') ? buses.features : 'no features';
        return (
            //fetch json data and display
            <View style={styles.container}>
                <Text style = {styles.bigRect}>Map View here</Text>     
                <Text style={styles.features}>{bus.features}</Text>
                <View style = {styles.separator}/>
                <Text>{results}</Text>
                <Text>Signage example:</Text>
                
                     <Text style={styles.rectangle}>{bus.notes.signage}</Text>
                     
                     
            <TouchableHighlight onPress={this.goBack.bind(this)}>
                <Text>Go Back</Text>
            </TouchableHighlight>
             </View>
        );
    }

    /* to filter JSON data by making the name unique */
    getBusStopDescriptions(obj){
        console.log("getBusStopDescriptions")
        var array = obj;
        var descriptionObj = {};
        //Get descriptions only
        for (var i = 0; i < array.length; i++){
            descriptionObj.push(array.trips.tripsStop.stop.descriptions);
        }
        console.log(this.descriptionObj);
        return descriptionObj;
    }

    goBack() {
    console.log("go to back");
    this.props.navigator.pop({ screen: 'ShuttleBusList' });
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