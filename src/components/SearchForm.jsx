import React from "react";
import { Input, Box, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { searchProducts } from "../store/searchReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box>
      <InputGroup
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            console.log(`eeeeeeeeeeeeeeeee`, e.target.value);
            dispatch(searchProducts(e));
            history.push(`/search`);
          }
        }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          value={input}
          onChange={handleChange}
          className="form-control"
          bg="white"
          fontSize="lg"
          type="text"
          placeholder="Buscar"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchForm;
