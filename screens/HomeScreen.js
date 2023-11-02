import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import NewsContext from '../store'

const HomeScreen = () => {
 const {newsList, setNewsList} = useContext(NewsContext);
  const navigation = useNavigation();
  return (
    <View>
       <FlatList data={newsList}
    keyExtractor={item => item.id}
    renderItem={({item})=> { return <TouchableOpacity onPress={()=>navigation.navigate("Details",{newsItem:item})}> 
    <View style={[styles.newsItem]}> 
      <Text style={[styles.title, {color:item.important ? "red" : "black"}]}>{item.title}</Text>
      {/* <Text>{item.content}</Text> */}
    
    {item.category ? 
    <Text 
    style={{fontSize:11, backgroundColor:"gray",padding:4,borderRadius:5}}>Kategori: {item.category}</Text> : 
    <View></View>}    
    </View></TouchableOpacity>}}/>
    
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  newsItem:{
  flexDirection:"column"
 ,
  marginTop:10,
  borderRadius:10,
  alignItems: "center",
  marginHorizontal:10,
  elevation:10,
},
title:{
  fontSize:20,
  fontWeight:"bold"
}})