import axios from "axios";
import React, { useEffect, useState } from "react";
import {Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';

const Search = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    const [data, setData] = useState()
    // const [dataAwal, setDataAwal] = useState()

    // useEffect( () => {
    //     await fetch("http://www.omdbapi.com/?s=inception&apikey=94a3c0c")
    //     .then(response => response.json())
    //     .then(receiveData => setDataAwal(receiveData));
    // }, []);


    const ambilData = async() => {
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

    // const ambilDetail = async() => {
    //     try {
    //         const res= await axios.get('http://www.omdbapi.com', {
    //             params: {
    //                 t: search,
    //                 apikey: '94a3c0c',
    //             }
    //         })
    //         setData(res.data.Search)
    //         console.log(res);
    //     } catch (error) {   
    //         alert(error.message)
    //     }
    // }

    return (
        <View style={{flex: 1}}>
            <View style={styles.TopNav}>
                <StatusBar style="light" />
            </View>

            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Search Movies</Text>
            </View>

            <View style={styles.BoxSearch}>
                <TextInput style={styles.FormSearch} onChangeText={(text) => onChangeSearch(text)}value={search}/>
                <TouchableOpacity style={styles.MiniBoxSearch} onPress={() => ambilData()}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Cari</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                    {data && data.map((item, i) => {
                        return <>
                            <TouchableOpacity style={styles.BoxList}>
                                <Text style={styles.MovieTitle}>{item.Title}</Text>
                                <View style={styles.PosterPosition}>
                                    <Text style={styles.MovieYear}>{item.Year}</Text>
                                    <Image source={{uri: item.Poster}} style={styles.MoviePoster} />
                                </View>
                            </TouchableOpacity>
                        </>
                    })}
            </ScrollView>
        </View>
    ) 
}


const styles = StyleSheet.create({
    BoxList : {
        marginHorizontal: '10%',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#0080ff',
        paddingHorizontal: 10,
    },

    MovieTitle : {
        fontWeight: 'bold',
        fontSize: 17,
    },

    MovieYear : {
        fontWeight: '500',
        fontSize: 12, 
        justifyContent: 'flex-start',
    },

    MoviePoster : {
        width: 100,
        height: 100,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
    },

    PosterPosition : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    BoxSearch : {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    FormSearch : {
        borderBottomWidth: 1,
        height: '40%',
        width: '50%',
        justifyContent: 'flex-start'
    },

    MiniBoxSearch : {
        borderWidth: 1,
        backgroundColor: 'gray',
        marginLeft: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    HeaderText : {
        fontSize: 24,
        color: '#0080ff',
        fontWeight: 'bold',
    },

    Header : {
        height: '10%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    TopNav : {
        backgroundColor: 'black', 
        height: '4%',
    }
})

export default Search;