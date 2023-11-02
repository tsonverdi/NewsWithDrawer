import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

const menuContent =[
    {

        title:"Home",
        navigate:"HomeStack"
    },
    {

        title:"Add News",
        navigate:"AddNews"
    },
    {

        title:"Contact",
        navigate:"Contact"
    },
    {

        title:"About",
        navigate:"About"
    },

]
const CustomDrawerContent = ({navigation, state}) => {
    
  return (
    <View style={styles.container}>
      <Text>Haber Uygulamasi</Text>

        <ScrollView>

            {menuContent.map((content,index)=> {
                return <TouchableOpacity 
                key={index} 
                style={[styles.drawerItem, state.index === index ? styles.selectedDrawerItem : {}]} 
                onPress={()=>navigation.navigate(content.navigate)
                }>
                   {state.index === index ? <Icon name="arrow-right" size={15}></Icon> : <View style={{width:15}}/>} 
               <Text style={[styles.drawerItemText, state.index === index ? styles.selectedDrawerItemText : {}]}>{content.title}</Text>
              </TouchableOpacity>
            })}
      
      </ScrollView>
      <Text style={styles.info}>Haber Uygulamasi. &copy; 2023 {"\n"}Her Hakki Saklidir. </Text>
    </View>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        textAlign: "center",
        
        
    },
    drawerItem:{
        backgroundColor:"lightgray",
        paddingVertical:14,
        paddingHorizontal:20,
        borderRadius:10,
        marginHorizontal:5,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        

    },
    selectedDrawerItem:{
        backgroundColor:"gray",
    },
    drawerItemText:{
        marginLeft:6,
        fontSize:15
    }
    ,selectedDrawerItemText:{
        fontWeight:"bold",
    },
    info:{paddingHorizontal:20,
            marginBottom:15}
})