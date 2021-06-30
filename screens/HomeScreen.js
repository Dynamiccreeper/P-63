import * as React from 'react'
import {Text, TouchableOpacity, StyleSheet, View, TextInput} from 'react-native'
import {Header} from 'react-native-elements'
import dictionary from "../database"

export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
            text:"",
            isSearchPressed: false,
            word:"",
            lexicalCategory:'',
            examples:[],
            definition:""
        }
    }

    getWord=(word)=>{
        var searchKeyWord=word.toLowerCase();
        var url="https://api.dictionaryapi.dev/api/v2/entries/en_US/"+searchKeyWord;
        console.log(url)
        return fetch(url)
        .then((data)=>{
          console.log(data.status)
            if(data.status===200){
                return data.json()
            }
            else{
                return null;
            }
        })
        .then ((response)=>{
            var responseObject=response[0]
            
            if(responseObject){
                var word= dictionary[text]["word"]
 
                var definition= dictionary[text]["definition"]
                
                var lexicalCategory= dictionary[text]["lexicalCategory"]
                console.log(lexicalCategory)
                this.setState({
                    "word":word,
                    "definition": definition,
                    "lexicalCategory": lexicalCategory
                })
            } else{
                this.setState({
                    "word":this.state.text,
                    "definition": "Not Found",
                })
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
            <Header centerComponent={{text: 'P-Dictionary', style:{color: 'black', fontWeight:'bold', fontSize:20,color:'black'} }}
              containerStyle={{backgroundColor:"white"}}/>
                <TextInput style={styles.inputBox}
                    onChangeText={text=>{
                        this.setState({ 
                            text: text,
                            isSearchPressed: false,
                            word:"Loading...",
                            lexicalCategory:'',
                            examples:[],
                            definition:""})
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
                        {this.state.lexicalCategory}
                    </Text>
                   
                     <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'left'}}>
                    <Text style={styles.detailsTitle}>
                        Definition: {""}
                    </Text >
                    <Text style={{fontSize: 15,color:'white', marginLeft:10}}>
                        {'\n'}{this.state.definition}
                    </Text>
                </View>
                </View>
               
               
            </View>
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
