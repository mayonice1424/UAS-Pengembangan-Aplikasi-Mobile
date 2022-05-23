import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Movies = () => {
  const { text } = useTypewriter({
    words: ["Selamat Datang di Movie App"],
    loop: { 3: true },
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
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
              resizeMode: "contain",
              alignItems: "center",
              // borderWidth: 1,
              borderColor: "white",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.Intro}>{text}</Text>
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
    backgroundColor: "black",
  },
  Intro: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto",
    paddingTop: "15%",
  },
});

export default Movies;
