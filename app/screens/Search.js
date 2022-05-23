import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  const [search, onChangeSearch] = React.useState("");
  const [data, setData] = useState();
  // const [dataAwal, setDataAwal] = useState()

  // useEffect( () => {
  //     await fetch("http://www.omdbapi.com/?s=inception&apikey=94a3c0c")
  //     .then(response => response.json())
  //     .then(receiveData => setDataAwal(receiveData));
  // }, []);

  const ambilData = async () => {
    try {
      const res = await axios.get("http://www.omdbapi.com", {
        params: {
          s: search,
          apikey: "94a3c0c",
        },
      });
      setData(res.data.Search);
      console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

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
    <View style={{ flex: 1 }}>
      <View style={styles.TopNav}>
        <StatusBar style="light" />
      </View>

      <View style={styles.Header}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{
            height: "70%",
            width: "80%",
            // marginRight: "8%",
            resizeMode: "contain",
            alignItems: "center",
          }}
        />
      </View>

      <View style={styles.BoxSearch}>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: "red",
            flex: 1,
            flexDirection: "row",
            // justifyContent: "center",
            paddingHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 20,
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={styles.FormSearch}
            onChangeText={(text) => onChangeSearch(text)}
            value={search}
            placeholder="Cari Film"
          />
          <TouchableOpacity
            style={styles.MiniBoxSearch}
            onPress={() => ambilData()}
          >
            <FontAwesome5 name="search" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.ScrollSearch}>
        {data &&
          data.map((item, i) => {
            return (
              <>
                <View style={styles.BoxList}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      marginTop: "5%",
                      borderRadius: 10,
                    }}
                  >
                    <View style={styles.PosterPosition}>
                      <Image
                        source={{ uri: item.Poster }}
                        style={styles.MoviePoster}
                      />
                      <Text
                        style={{
                          paddingBottom: "7%",
                          fontSize: 20,
                          color: "white",
                          marginTop: -50,
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                        }}
                      >
                        {item.Title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  BoxList: {
    marginHorizontal: "10%",
    // borderWidth: 1,
    // borderColor: "white",
    // marginTop: 10,
    borderRadius: 10,
    backgroundColor: "black",
    // paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  MovieTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },

  MovieYear: {
    fontWeight: "500",
    fontSize: 12,
    justifyContent: "flex-start",
  },

  MoviePoster: {
    width: 300,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginTop: "-10%",
  },

  PosterPosition: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  BoxSearch: {
    paddingHorizontal: "20%",
    paddingBottom: 2,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "black",
    justifyContent: "center",
    flexDirection: "row",
  },

  FormSearch: {
    backgroundColor: "white",
    width: "70%",
    justifyContent: "flex-start",
    fontSize: 15,
    marginLeft: "5%",
  },

  MiniBoxSearch: {
    // borderWidth: 1,
    // backgroundColor: "white",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  HeaderText: {
    fontSize: 24,
    color: "#0080ff",
    fontWeight: "bold",
  },

  Header: {
    height: "10%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  TopNav: {
    backgroundColor: "black",
    height: "4%",
  },
  ScrollSearch: {
    height: "100%",
    backgroundColor: "black",
  },
});

export default Search;
