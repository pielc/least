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
  StackDivider,
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
      <Box bg={"gray.700"} key={"characters"} variant={"filled"}  p={4}>
          <Flex>
            <Center>
              <Text as="b" color={"gray.50"}>
                Personnages
              </Text>
            </Center>
            <Spacer />
            <Center>
              <Badge> Total pts</Badge>
            </Center>
          </Flex>
      </Box>
      {listValues.map((element, index) => (
        <Card
          key={index}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          m={2}
        >
          <CardBody>
            <Flex>
              <Center>
                {" "}
                <b>{element.unit}</b>{" "}
              </Center>
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
                  onClick={() => addFormFields("Khal", 90, "oui")}
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
                  onClick={() => addFormFields("Beserk", 135, "oui")}
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
