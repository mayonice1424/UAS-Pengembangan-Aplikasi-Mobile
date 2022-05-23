import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

function simpanData () {
  const IDBaru = item.imdbID
}

const Search = ({navigation}) => {
  const [search, onChangeSearch] = React.useState('');
  const [data, setData] = useState()
  // const [ID, setID] = useState('')
  // const [dataAwal, setDataAwal] = useState()

  // useEffect( () => {
  //     await fetch("http://www.omdbapi.com/?s=inception&apikey=94a3c0c")
  //     .then(response => response.json())
  //     .then(receiveData => setDataAwal(receiveData));
  // }, []);


  const ambilData = async() => {
    if (search === '') {
      alert('Masukan kata yang ingin dicari!')
    } else {
      try {
          const res= await axios.get('http://www.omdbapi.com', {
              params: {
                  s: search,
                  apikey: '94a3c0c',
              }
          })
          setData(res.data.Search)
          console.log(res);
      } catch (error) {   
          alert(error.message)
      }
    }
  }

  const kirimID = async() => {
    navigation.navigate('Konfirmasi',{
      ID : IDBaru
  })
  }

  // const simpanID = async() => {
  //   const IDBaru = item.imdbID
  // }

  return (
      <View style={{flex: 1}}>
          <View style={{backgroundColor: 'black', height: '4%'}}>
              <StatusBar style="light" />
          </View>

          <View style={{height: '10%', 
          backgroundColor: 'black', 
          justifyContent: 'center',
          alignItems: 'center',
          }}>
              <Text style={{fontSize: 24, 
              color: '#0080ff', 
              fontWeight: 'bold'}}>Search Movies</Text>
          </View>

          <View style={{
          height: '10%', 
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'}}>
              <TextInput style={{borderBottomWidth: 1, 
              height: '40%', 
              width: '50%',
              justifyContent: 'flex-start'}} 
              onChangeText={(text) => onChangeSearch(text)}value={search}
              />

              <TouchableOpacity style={{borderWidth: 1, 
              backgroundColor: 'gray',
              // height: '40%',
              marginLeft: 20,
              paddingHorizontal: 10,
              borderRadius: 5}}
              onPress={() => ambilData()}>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>Cari</Text>
              </TouchableOpacity>
          </View>

          <ScrollView>
              {data && data.map((item, i) => {
                  return <>
                      <TouchableOpacity style={{
                          // height: 100, 
                          marginHorizontal: '10%', 
                          borderWidth: 1, 
                          marginTop: 10,
                          borderRadius: 10,
                          backgroundColor: '#0080ff',
                          paddingHorizontal: 10,}}
                          onPress={() => kirimID()}>
                              <Text style={{fontWeight: 'bold',
                              fontSize: 17}}>{item.Title}</Text>
                              <View style={{
                                  // borderWidth: 1, 
                                  flexDirection: 'row', 
                                  justifyContent: 'space-between',
                                  marginBottom: 10
                              }}>
                                  <Text style={{fontWeight: '500',
                                  fontSize: 12, justifyContent: 'flex-start'}}>{item.Year}</Text>
                                  <Image source={{uri: item.Poster}}
                                  style={{width: 100, height: 100, justifyContent: 'flex-end', resizeMode: 'contain'}} />
                              </View>
                              {/* <simpanID /> */}
                          </TouchableOpacity>
                  </>
              })}
          </ScrollView>
      </View>
  ) 
}
export default Search;
