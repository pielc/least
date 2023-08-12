import React, { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import {
  Box,
  Text,
  Badge,
  Flex,
  Spacer,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  StackDivider,
} from "@chakra-ui/react";

import ListCategory from "./ListCategory";

const List = () => {
  const [listCharacters, setlistCharacters] = useState([
    { unit: "Khal", points: 90, sub_text: "" },
  ]);

  const [listOthers, setlistOthers] = useState([
    { unit: "Beserks", points: 135, sub_text: "" },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let addFormFieldsCharacter = (unit, points, sub_text) => {
    setlistCharacters([
      ...listCharacters,
      { unit: unit, points: points, sub_text: sub_text },
    ]);
  };

  let addFormFieldsOther = (unit, points, sub_text) => {
    setlistOthers([
      ...listOthers,
      { unit: unit, points: points, sub_text: sub_text },
    ]);
  };

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
      <Button onClick={onOpen}>Add units</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add units</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={1}
              align="stretch"
            >
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Text as="b">Khal</Text>
                </Box>
                <Spacer />
                <Box>
                  <Badge>90pts</Badge>
                </Box>
                <Button
                  variant="ghost"
                  onClick={() => addFormFieldsCharacter("Khal", 90, "")}
                >
                  +
                </Button>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Text as="b">Beserk</Text>
                </Box>
                <Spacer />
                <Box>
                  <Badge>135pts</Badge>
                </Box>
                <Button
                  variant="ghost"
                  onClick={() => addFormFieldsOther("Beserks", 135, "")}
                >
                  +
                </Button>
              </Flex>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default List;
