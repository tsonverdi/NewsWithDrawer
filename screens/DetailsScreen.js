import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

const DetailsScreen = ({route}) => {
    const {newsItem} = route.params;
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Text style={{textAlign: "right", color: "blue"}}><Icon name='arrow-left-drop-circle-out'/>Haberlere Don</Text>
        </TouchableOpacity>
      <Text style={styles.title}>{newsItem.title}</Text>
      <View style={{flexDirection:"row", justifyContent: "center"}} gap={10}>
      {newsItem.category ? 
    <Text 
    style={{fontSize:11, backgroundColor:"gray",padding:4,borderRadius:5,color:"white",textAlign:"center",marginBottom:5}}>Kategori: {newsItem.category}</Text> : 
    <View></View>}
    
    {newsItem.important ? <Text style={styles.important}>Onemli Haber</Text> : <View/>}

    <Button title="Paylas" onPress={() => Share.share({message: newsItem.title + " | " + newsItem.content})}></Button>
    
    <ScrollView>
      <Text>{newsItem.content}</Text>
      </ScrollView>
      </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:25
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    important:{
        backgroundColor:"red",
        textAlign:"center",
        borderRadius:10,
        padding:5,
        color:"white",
        marginBottom:10
    }
})