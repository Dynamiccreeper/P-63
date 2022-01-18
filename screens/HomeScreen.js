import * as React from 'react'
import {Text, TouchableOpacity, StyleSheet, View, TextInput} from 'react-native'
import {Header} from 'react-native-elements'
import dictionary from "../database"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
            text:"",
            isSearchPressed: false,
            word:"",
            lexicalCategory:'',
            definition:'',
        }
    }

    getWord=(text)=>{
var text=text.toLowerCase()
try{
  var word=dictionary[text]["word"]
  var lexicalCategory = dictionary[text]["lexicalCategory"]
  var definition=dictionary[text]["difinition"]
  this.setState({
    "word":word,
    "lexicalCategory":lexicalCategory,
    "definition":definition
  })
}
catch(err){
  alert("Sorry this word is not avaivale for now")
  this.setState({
    "text":'',
    'isSearchPressed':false
  })
}
    }

    render(){
        return(
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#F0F8FF' }}>
            <View style={styles.container}>
            <Header centerComponent={{text: 'P-Dictionary', style:{color: 'black', fontWeight:'bold', fontSize:20,color:'black'} }}
              containerStyle={{backgroundColor:"white"}}/>
                <TextInput style={styles.inputBox}
                    onChangeText={text=>{
                        this.setState({ 
                            text: text,
                            isSearchPressed: false,
                            word:'loading...',
                            lexicalCategory:'',
                            definition:''
                            })
                    }}

                    value={this.state.text}
                    placeholder= "Type"/>

                <TouchableOpacity style={styles.sButton}
                    onPress={()=>{
                        this.setState({isSearchPressed: true});
                        this.getWord(this.state.text);}}>
          <Text style={{textAlign:'center',fontWeight:'bold', padding: 10}}>Search</Text>
                </TouchableOpacity>
                <View style={styles.dcontainer}>
                  <Text style={styles.detailsTitle}>
                        Word: {""}
                    </Text>
                    <Text style={{fontSize: 15,textAlign:'center', color:'white'}}>
                        {this.state.word}{'\n'}
                    </Text>
                    <Text style={styles.detailsTitle}>
                        Type: {""} 
                    </Text>
                    <Text style={{fontSize: 15,textAlign:'center',color:'white' }}>
                        {this.state.lexicalCategory}{'\n'}
                    </Text>
                    <Text style={styles.detailsTitle}>
                        Definition: {""}
                    </Text >
                    <Text style={{fontSize: 15,textAlign:'center',color:'white' }}>
                        {this.state.definition}{'\n'}
                    </Text>
                </View>
               
               
            </View>
          </SafeAreaProvider>
        )
    }
}

var styles= StyleSheet.create({
    container:{
      backgroundColor:'orange',
      width: '100%',
      height: '100%'
    },
    inputBox:{
        width: '50%',
        height: 40,
        borderWidth: 2,
        backgroundColor: 'lightgray',
        alignSelf:'center',
        marginTop: 30,
        textAlign:'center',
        borderRadius:5,
        fontSize: 15,
        fontWeight:'bold'
    },
    sButton:{
        width: 250,
        height: 50,
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderRadius:65,
        alignSelf:'center',
        marginTop:30,
        
    },
    dcontainer:{
      width: '90%',
      height:'65%',
      marginTop: 50,
      backgroundColor: 'purple',
      backgroundSize: 'cover',
      display:'inline-block',
      borderRadius:5,
      alignSelf:'center'
    },
    detailsTitle:{
      textAlign:'left',
      color:'',
      fontSize:20,
      fontWeight:'bold',
      margin:20
    }
})
