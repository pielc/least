import React, { useState } from "react";

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
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

const List = () => {
  const [listValues, setListValues] = useState([
    { unit: "Khal", points: 90, sub_text: "oui" },
  ]);

  let handleChange = (i, e) => {
    let newlistValues = [...listValues];
    newlistValues[i][e.target.name] = e.target.value;
    setListValues(newlistValues);
  };

  let addFormFields = () => {
    setListValues([...listValues, { unit: "", points: 0, sub_text: "" }]);
  };

  let removeFormFields = (i) => {
    let newlistValues = [...listValues];
    newlistValues.splice(i, 1);
    setListValues(newlistValues);
  };

  let handleShow = () => {
    alert(JSON.stringify(listValues));
  };

  return (
    <VStack maxWidth={500} align="stretch">
      {listValues.map((element, index) => (
        <Card direction={{ base: "column", sm: "row" }} overflow="hidden" m={2}>
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
    </VStack>
  );
};

export default List;
