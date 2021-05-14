import React,{Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, Touchable } from 'react-native';
import Constants from 'expo-constants';
import {Header} from 'react-native-elements';

export default class HomeScreens extends Component() {
   constructor(){
super();
this.state={
    text:text,
    isSearchPressed:false,
    word:"",
    LexicalCategory:"",
    examples:[],
    defination:""
}
   }
   getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword+".json"
    return fetch(url)
    .then((data)=>{
        if(data.status===200){
            return data.json()
        }else{return null}
    });
}
 .then((response)=>{
    var responseObject = response;
    if(responseObject){
        var wordData = responseObject.defination[0]

        var defination =wordData.description
        var LexicalCategory=wordData.wordtype

        this.setState({
            "word":this.state.text,
            "defination":defination,
            "lexicalCategory":lexicalCategory
        })
    }
    else{
        this.setState({
            "word":this.state.text,
            "defination":"Not Found"

        })
    }
})
   
    return ();
    return(){
        <View>
        <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({ text: text,isSearchPressed:false,word : "Loading...",LexicalCategory:"",examples:[],defination:"" });
        }}
        value={this.state.text}/>

<TouchableOpacity style={styles.searchButton}
 onPress={()=>{
     this.setState({isSearchPressed:true});
     this.getWord(this.state.text)
 }}></TouchableOpacity>




        </View>
 

    }
    const styles = StyleSheet.create({
        container :{
            flex:1
        },
        inputBoxContainer:{
            flex:0.3,
            alignItems:"center",
            justifyContent:'center'
        },
        inputBox:{
            width:80%,
            alignSelf:'center',
            height:40
        }
        
        
          })

    
  }

