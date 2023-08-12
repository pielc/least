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
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

const ListCategory = ({ list, setList, children }) => {
  let removeFormFields = (i) => {
    let newlistCharacters = [...list];
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
            <Badge> {list.reduce((acc, cur) => acc + cur.points, 0)} pts</Badge>
          </Center>
        </Flex>
      </Box>
      {list.map((element, index) => (
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
    </>
  );
};

export default ListCategory;
