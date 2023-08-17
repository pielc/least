import React, { useState } from "react";

import { ArrowBackIcon, ChatIcon } from "@chakra-ui/icons";

import {
  VStack,
  Badge,
  Flex,
  Box,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";

import ListCategory from "./ListCategory";

const List = ({ list_details, full_list_init, arrow_back_callback }) => {
  const [listCharacters, setlistCharacters] = useState(
    full_list_init.characters
  );

  const [listOthers, setlistOthers] = useState(full_list_init.others);

  return (
    <>
      <Flex bg={"gray.700"} minWidth="max-content" alignItems="center" py={2}>
        <IconButton
          icon={<ArrowBackIcon />}
          variant="link"
          onClick={arrow_back_callback}
          color={"white"}
        />
        <Box py="2">
          <Heading size="md" color={"white"}>
            {list_details.name}
          </Heading>
        </Box>
        <Spacer />
        <IconButton
          m={2}
          icon={<ChatIcon />}
          variant="link"
          onClick={() =>
            alert(
              JSON.stringify(
                { characters: listCharacters, others: listOthers },
                null,
                2
              )
            )
          }
          color={"white"}
        />
      </Flex>
      <VStack maxWidth={1000} align="stretch" spacing={1}>
        <ListCategory entry_list={listCharacters} setList={setlistCharacters}>
          Characters
        </ListCategory>
        <ListCategory entry_list={listOthers} setList={setlistOthers}>
          Others
        </ListCategory>
      </VStack>

      <Badge
        p={2}
        fontSize={"0.9em"}
        position={"fixed"}
        bottom={5}
        right={5}
        zIndex={1}
      >
        {[listCharacters, listOthers].reduce(
          (acc, cur) => acc + cur.reduce((acc, cur) => acc + cur.points, 0),
          0
        )}
        /1000 pts
      </Badge>
    </>
  );
};

export default List;
