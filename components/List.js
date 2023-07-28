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
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

function ListItem(props) {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" m={2}>
      <CardBody>
        <Flex>
          <Box>
            <Text>
              {" "}
              <b>{props.unit_name}</b>{" "}
            </Text>
            <Text>{props.sub_text}</Text>
          </Box>
          <Spacer />
          <Center>
            <Badge>{props.points}pts</Badge>
          </Center>
          <Center w="40px">
            <DeleteIcon />
          </Center>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default function List(props) {
  return (
    <VStack maxWidth={500} align="stretch">
      <ListItem key={"111"} unit_name={"Khal"} points={90} sub_text={"oui"} />
    </VStack>
  );
}
