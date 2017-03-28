import React, { Component } from 'react';
import {AppRegistry, Navigator, StyleSheet} from 'react-native';
import HomeView from './HomeView';
import ShuttleBusList from './ShuttleBusList';
import ShuttleBusInfo from './ShuttleBusInfo';
import AnnouncementList from './AnnouncementList';
import AnnouncementInfo from './AnnouncementInfo';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',
        borderColor: '#FFFFFF'
    }
});

export default class FirstProject extends Component {
    render() {
        return (
          //<HomeView />
            <Navigator
                initialRoute = {{ screen: 'HomeView'}}
                renderScene = {(route, nav)=> {return this.renderScene(route, nav)}} />
        );
    }

    //need to call inside here if u wanna pass between pages
  renderScene(route,nav) {
    switch (route.screen) {
      case "HomeView":
        return <HomeView navigator={nav} />

      case "ShuttleBusInfo":
        return <ShuttleBusInfo navigator={nav} bus={route.data} />

      case "ShuttleBusList":
        return <ShuttleBusList navigator={nav} />

      case "AnnouncementList":
        return <AnnouncementList navigator={nav} />
    }
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
