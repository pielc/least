import React, { useState } from "react";

import {
  VStack,
  Button,
} from "@chakra-ui/react";

import ListCategory from "./ListCategory";

const List = () => {
  const [listCharacters, setlistCharacters] = useState([
    { unit: "Khal", points: 90, sub_text: "" },
  ]);

  const [listOthers, setlistOthers] = useState([
    { unit: "Beserks", points: 135, sub_text: "" },
  ]);

  let handleShow = () => {
    alert(
      JSON.stringify(
        { characters: listCharacters, others: listOthers },
        null,
        2
      )
    );
  };

  return (
    <VStack maxWidth={1000} align="stretch" spacing={1}>
      <ListCategory list={listCharacters} setList={setlistCharacters}>
        Characters
      </ListCategory>
      <ListCategory list={listOthers} setList={setlistOthers}>
        Others
      </ListCategory>
      <Button onClick={() => handleShow()}>Show</Button>
    </VStack>
  );
};

export default List;
