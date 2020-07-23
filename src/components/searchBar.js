import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={35} color="black" />
      <TextInput
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
  backgroundStyle: {
    backgroundColor: "#eee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  inputStyle: {
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
