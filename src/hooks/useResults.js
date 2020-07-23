import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san hose",
        },
      });
      setResults(response.data["businesses"]);
      setErrorMessage("");
    } catch (err) {
      setResults([]);
      setErrorMessage("Something went wrong !");
    }
  };

  // call searchApi when component
  // is first rendered.
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};