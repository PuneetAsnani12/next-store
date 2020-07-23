import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        ></ResultsList>
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
        ></ResultsList>
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        ></ResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
