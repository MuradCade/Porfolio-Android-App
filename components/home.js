import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

// 

// this function opens external link
const externalLink = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}


export default class home extends Component {
  
  render() {
    
    return (
    <ScrollView>
        <View style={StyleSheet.background}>
     <View style={styles.head}>
     <Text style={styles.color}> Hello, I'm Web & App Developer Based In Somalia </Text>
     </View>
     <View style={styles.main}>

        <View style={styles.text}>
        <Text style={styles.name}>Murad Cade</Text>
        <Text style={styles.subtext}>Developer / Designer </Text>
        {/* using icons */}
        <Text style={styles.iconContainer}> <Icon onPress={()=>externalLink ("https://github.com/MuradCade")}  name='logo-github' style={styles.icon}/>   <Icon onPress={()=>externalLink("https://twitter.com/cade_murad")} name='logo-twitter' style={styles.icon2}/> <Icon  style={styles.icon2} name='cube' onPress={()=>externalLink ("https://muradcade-developer.netlify.app/")}/></Text>
        </View>
        <View style={styles.img}>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')}/>
        </View>
     </View>
     <View style={styles.project}>
      <Text style={styles.title}>Project</Text>
      {/* project card */}
      <View style={styles.projectCard}>
        <View style={styles.flex}>
        <Image style={styles.img2} source={require('../assets/ecommerce.png')}/>
        <Text style={styles.bold}>Ecommerce Web App</Text>
        <Text  style={styles.proContent}>Ecommerce Web App, That Have Features Of Particular CMS Build In Eccomerce</Text>
       <Text style={styles.probtn} onPress={()=>externalLink ("https://github.com/MuradCade/Ecommerce")}>Source Code</Text>
        </View>
        <View style={styles.flex}>
        <Image style={styles.img2} source={require('../assets/chatapp.jpg')}/>
        <Text style={styles.bold}> Chat Application</Text>
        <Text  style={styles.proContent}> Chat Application in PHP and MySQL and the codes or concepts behind creating a chat app.</Text>
        <Text style={styles.probtn} onPress={()=>externalLink ("https://github.com/MuradCade/chat-system")}>Source Code</Text>
        </View>
        <View style={styles.flex}>
        <Image style={styles.img2} source={require('../assets/todo.png')}/>
        <Text style={styles.bold}> Todo List App</Text>
        <Text  style={styles.proContent}>Simple TodoList using React Native</Text>
        <Text style={styles.probtn} onPress={()=>externalLink ("https://github.com/MuradCade/Todo-List")}>Source Code</Text>
        </View>
        <View style={styles.flex}>
        <Image style={styles.img2} source={require('../assets/github.png')}/>
        <Text style={styles.bold}> Github Login Automation</Text>
        <Text  style={styles.proContent}>As Developer I Automate Alot Of Easy Task That Takes unnecessary  Time And Effort , Simple Login Atomation For Github </Text>
        <Text style={styles.probtn} onPress={()=>externalLink ("https://github.com/MuradCade/Login-Script-For-Github")}>Source Code</Text>
        </View>
        <View style={styles.flex}>
        <Image style={styles.img2} source={require('../assets/frontend.png')}/>
        <Text style={styles.bold}> Frontend Mentor </Text>
        <Text  style={styles.proContent}>Frontend Mentore Is Place That Developer Can Imporve Frontent Skills By Building Real Projects</Text>
        <Text style={styles.probtn} onPress={()=>externalLink ("https://github.com/MuradCade/Frotend-Mentore-Challenges")}>Source Code</Text>
        </View>
      </View>
      {/* Skills */}
      <View style={styles.skills}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.frontend}>
          <Text style={styles.frontendtext}>Frontend</Text>
          <View style={styles.frontendskill}>
          <Text style={styles.skilltext}>Html</Text>
          <Text style={styles.skilltext}>Css</Text>
          <Text style={styles.skilltext}>Javascript</Text>
          <Text style={styles.skilltext}>Sass & Tailwind Css</Text>
          </View>
          <View style={styles.frontendskill}>
        <Text style={styles.skilltext2}>React/React Native</Text>
          <Text style={styles.skilltext}>Angular</Text>
          <Text style={styles.skilltext}>Veu</Text>
          </View>
          <View style={styles.frontendskill}>
          <Text style={styles.skilltext}>ThreeJs</Text>
          </View>
        </View>
        <View style={styles.backend}>
          <Text style={styles.backendtext}>Backend</Text>
          <View style={styles.backendskill}>
        <Text style={styles.skilltext2}>NodeJs</Text>
        <Text style={styles.skilltext2}>Firebase</Text>
          <Text style={styles.skilltext}>TypeScript</Text>
          <Text style={styles.skilltext2}>Mysql</Text>
        
          </View>
          <View style={styles.backendskill}>
          <Text style={styles.skilltext2}>Postgress</Text>
          <Text style={styles.skilltext2}>Mangodb</Text>
        <Text style={styles.skilltext2}>Php</Text>
          </View>
          <View style={styles.backendskill}>
        <Text style={styles.skilltext2}>Django</Text>
          </View>
        </View>
      </View>
     </View>

      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:"#805AD5",
    marginBottom:10

  },
  head:{
    margin:20,
    backgroundColor:"#313134",
    // padding:10,
    height:40,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    // width:"100%"
    marginRight:10

  },
  color:{
    color:"white"
  },
  main:{
  marginLeft:20,
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:20

  },
  name:{
    fontSize:22,
    color:'white',
    fontWeight:"bold",
    marginLeft:60,
    lineHeight:50
  },
  avatar:{
    width:60,
    height:60,
    // padding:10
    borderRadius:100,
    borderWidth:1,
    borderColor:'white',
    marginRight:80,
    marginTop:4,
  },
  subtext:{
    color:"gray",
    fontSize:10,
    textAlign:"center",
    marginLeft:60,
    marginTop:-8,
    marginBottom:12
  },
  project:{
    marginTop:40
  },
  title:{
      color:"#DFBB9D",
      fontSize:18,
      fontWeight:'bold',
      marginLeft:10,
  },

  // styling icons
  icon:{
      color:"#9CB4CC",
      fontSize:26,
      marginLeft:20,
 
      
      
  },
  icon2:{
    color:"#9CB4CC",
      fontSize:26,
      marginRight:10
  },
  iconContainer:{
    marginTop:-4,
    marginLeft:70,
   
  },
  projectCard:{
    marginTop:30,
    flexDirection:"column",
    // alignItems:'center',
    // justifyContent:'center'
    // marginRight:10
    // marginLeft:
  },
  flex:{
    
    alignItems:'center',
    justifyContent:'center',
    marginBottom:40
  
  },
  img2:{
  // display:"flex",
    width:'100%',
    height:200,
    borderRadius:10,
    marginLeft:18,
    flexWrap:'wrap'
   
  },
  bold:{
        color:'white',
        fontSize:16,
        marginTop:18,
        marginLeft:4,
        marginBottom:10
  },
  proContent:{
    fontSize:13,
    color:'gray',

    // marginRight:100,
    // // padding:1,
    // position:'relative',
    // left:70,
    // top:4,
    // bottom:10
    textAlign:'center'
    
  },
 probtn:{
    padding:10,
    backgroundColor:'#DFBB9D',
    marginTop:20,
    marginLeft:10,
    fontSize:14,
    color:'white',
    fontWeight:'bold'
       },
       frontendtext:{
        color:"#D3EBCD",
        marginTop:20,
        fontSize:16,
        fontWeight:'bold'
       },
       frontend:{
        marginTop:10,
      },
       frontendskill:{
        marginTop:10,
        flexDirection:'row',
       },
       skilltext:{
        marginRight:10,
        padding:10,
        backgroundColor:"#9CB4CC",
        fontSize:14,
        color:'white',
        borderRadius:10
       },
       backend:{
        marginTop:30
       },
       backendtext:{
        color:"#D3EBCD",
        fontSize:17,
       },
       backendskill:{
        marginTop:10,
        flexDirection:'row',
       },
       skilltext2:{
        marginRight:10,
        padding:10,
        backgroundColor:"#9CB4CC",
        fontSize:14,
        color:'white',
        borderRadius:10
       }
})

