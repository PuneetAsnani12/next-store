import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      {result.image_url ? (
        <Image
          style={styles.imageStyle}
          source={{ uri: result.image_url }}
        ></Image>
      ) : null}
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews, {result.price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    maxWidth:265
  },
  titleStyle: {
    fontWeight: "bold",
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsDetail;
