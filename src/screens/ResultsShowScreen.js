import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Image
        style={styles.mainImageStyle}
        source={{ uri: result.image_url }}
      ></Image>

      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text style={{ marginLeft: 15, color: "#555" }}>
        Quick Bites - {result.categories[0].title}
      </Text>
      <Text style={{ marginLeft: 15, color: "#777" }}>
        {result.location.display_address[0]},{" "}
        {result.location.display_address[1]}.
      </Text>
      <View
        style={{
          marginRight: 30,
          marginLeft: 15,
          color: "#777",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical:15,
        }}
      >
        <Text style={{fontSize:18,color: "#555"}}>Affordability - {result.price}</Text>
        <Text style={{fontSize:18,color: "#555"}}>Rating - {result.rating}</Text>
        <Text style={{fontSize:18,color: "#555"}}>Reviews - {result.review_count}</Text>
      </View>

      <FlatList
        data={result.photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.imageStyle} source={{ uri: item }}></Image>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginLeft: 15,
    marginBottom: 5,
  },
  mainImageStyle: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 15,
  },
});
export default ResultsShowScreen;
