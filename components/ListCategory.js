import {
  Box,
  Card,
  CardBody,
  Text,
  Badge,
  Flex,
  Spacer,
  Center,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";

import { v4 as uuidv4 } from 'uuid';

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

const ListCategory = ({ entry_list, setList, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let addFormFields = (unit, points, sub_text) => {
    setList([
      ...entry_list,
      { unit: unit, points: points, sub_text: sub_text },
    ]);
  };

  let removeFormFields = (i) => {
    let newlistCharacters = [...entry_list];
    newlistCharacters.splice(i, 1);
    setList(newlistCharacters);
  };

  return (
    <>
      <Box bg={"gray.700"} key={"others"} variant={"filled"} p={4}>
        <Flex>
          <Center>
            <Text as="b" color={"gray.50"}>
              {children}
            </Text>
          </Center>
          <Spacer />
          <Center>
            <Badge>
              {" "}
              {entry_list.reduce((acc, cur) => acc + cur.points, 0)} pts
            </Badge>
          </Center>
          <IconButton
            ml={2}
            onClick={onOpen}
            size={"sm"}
            variant={"outline"}
            color={"white"}
            icon={<AddIcon />}
          />
        </Flex>
      </Box>
      {/* <Button onClick={onOpen}>Add</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add</ModalHeader>
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
                  onClick={() => addFormFields("Khal", 90, "")}
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
      {entry_list.map((element, index) => (
        <Card
          key={uuidv4()}
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
                <Badge>{element.points} pts</Badge>
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
    </>
  );
};

export default ListCategory;
