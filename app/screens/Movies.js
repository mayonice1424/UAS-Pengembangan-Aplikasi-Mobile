import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Movies = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bioskop.jpg")}
        style={styles.image}
      >
        <View style={{ height: "4%", backgroundColor: "black" }}>
          <StatusBar style="light" />
        </View>
        <View style={styles.Header}>
          <Image
            source={require("../../assets/Logo.png")}
            style={{
              height: "70%",
              width: "80%",
              marginRight: "8%",
              resizeMode: "contain",
              alignItems: "center",
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  Header: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Movies;
