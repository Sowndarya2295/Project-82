import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,Platform,StatusBar,Image } from 'react-native';
import{RFValue} from "react-native-responsive-fontsize";
import * as font from 'expo-font';
import AppLoading from 'expo-app-loading';
import PostCard from "./PostCard";
import { FlatList} from 'react-native-gesture-handler';

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false
        }
    }

    async_loadFontsAsync(){
      await Font.loadAsync(customFonts);
      this.setState({
          fontsLoaded:true
      });
    }

    componentDidMount(){
      this._loadFontsAsync();
    }

    renderItem = ({item:post})=>{
        return <PostCard post={post}/>
    };


    render() {
        return (

          <View style={styles.container}>
              <SafeAreaView style={styles.ndroidSafeArea}/>

              <View style={styles.appTitle}>
                  <View style={styles.appIcon}>
                      <Image 
                       source={require("../assets/logo.png")}
                       style={styles.iconImage}>
                      </Image>
                  </View>

                  <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>Spectagram</Text>
                  </View>

                 </View>

                 <View style={styles.cardContainer}>
                  <FlatList
                  keyExtractor={this.keyExtractor}
                  data={posts}
                  renderItem={this.renderItem}
                  />
                 </View>

          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:"black"
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    ndroidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight : RFValue(35)
    },
    appIcon:{
       flex:0.2,
       justifyContent:"center",
       alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
       color:"white",
       fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }

});