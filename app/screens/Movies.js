import { StyleSheet, Text, View } from "react-native";

const Movies = () => {
  return (
    <View style={styles.container}>
      <Text>Movies</Text>
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
});

export default Movies;
