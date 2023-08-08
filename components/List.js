import React, { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import {
  Box,
  Card,
  CardBody,
  Text,
  Badge,
  Flex,
  Spacer,
  Center,
  VStack,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

const List = () => {
  const [listValues, setListValues] = useState([
    { unit: "Khal", points: 90, sub_text: "oui" },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let addFormFields = (unit = "Khal", points = 90, sub_text = "") => {
    setListValues([
      ...listValues,
      { unit: unit, points: points, sub_text: sub_text },
    ]);
  };

  let removeFormFields = (i) => {
    let newlistValues = [...listValues];
    newlistValues.splice(i, 1);
    setListValues(newlistValues);
  };

  let handleShow = () => {
    alert(JSON.stringify(listValues, null, 2));
  };

  return (
    <VStack maxWidth={1000} align="stretch">
      {listValues.map((element, index) => (
        <Card
          key={index}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          m={2}
        >
          <CardBody>
            <Flex>
              <Box>
                <Text>
                  {" "}
                  <b>{element.unit}</b>{" "}
                </Text>
                <Text>{element.sub_text}</Text>
              </Box>
              <Spacer />
              <Center>
                <Badge>{element.points}pts</Badge>
              </Center>
              <Center w="40px" marginLeft={2}>
                <IconButton
                  icon={<DeleteIcon />}
                  variant="ghost"
                  onClick={() => {
                    removeFormFields(index);
                  }}
                />
              </Center>
            </Flex>
          </CardBody>
        </Card>
      ))}
      <Button onClick={() => addFormFields()}>Add</Button>
      <Button onClick={() => handleShow()}>Show</Button>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Heading size="md">Khal</Heading>
                </Box>
                <Spacer />
                <Button onClick={() => addFormFields("Khal", 90, "oui")}>
                  +
                </Button>
              </Flex>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Heading size="md">Beserk</Heading>
                </Box>
                <Spacer />
                <Button onClick={() => addFormFields("Beserk", 135, "oui")}>
                  +
                </Button>
              </Flex>
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
