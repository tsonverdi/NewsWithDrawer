import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native'
import NewsContext from '../store'
import { useNavigation } from '@react-navigation/native'

const AddNewsScreen = () => {
  const navigation = useNavigation();
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("")
  const [important, setImportant] = useState(false)
  const [category, setCategory] = useState("")

  const {newsList, setNewsList} = useContext(NewsContext);

  //Once objeyi yazdik idsine o andaki eleman sayisini verdik. Ilk seferinde 0 olur mesela, title a onChange e giren kismi verdik
  //content de onchagetext kismi. Sonra setnewsliste yeni objeyi eklemek icin eskisini spread edip yanina yenisini array seklinde ekledik.
  saveNews = () => {
    newObj = {
        id:newsList.length,
        title:newsTitle, 
        content: newsContent,
        important:important,
        category:category
    };
    setNewsList([...newsList, newObj]);
    setNewsTitle("");
    setNewsContent("")
    setCategory("")
    setImportant(false)
    navigation.navigate("Home");
    console.log("Kaydedildi")
  }
  return (
    <View gap={15} style ={{padding:10}}>
      <TextInput style={styles.input} value={newsTitle} onChangeText={setNewsTitle} placeholder="Haber Basligi"></TextInput>
      <TextInput style={styles.input} value={newsContent} onChangeText={setNewsContent} placeholder="Haber Icerigi"></TextInput>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} placeholder="Haber Kategorisi"></TextInput>
      <TouchableOpacity onPress={()=>setImportant(!important)}>
      <View style={{backgroundColor: important ? "red" :"green", padding:10}}>
        <Text>Onemli Haber</Text>
      </View>
      </TouchableOpacity>
      
      <Button title="Add News" onPress={saveNews}/>
    </View>
  )
}

export default AddNewsScreen

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:"gray",
    padding:10,
  }
})