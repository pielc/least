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
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

let list = new Map();
list.set("111", { unit: "Khal", points: 90, sub_text: "oui" });
list.set("222", { unit: "Guerriers", points: 135, sub_text: "oui" });
list.set("333", { unit: "Beserks", points: 135, sub_text: "oui" });

function ListItem(props) {
  const router = useRouter();

  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" m={2}>
      <CardBody>
        <Flex>
          <Box>
            <Text>
              {" "}
              <b>{props.unit}</b>{" "}
            </Text>
            <Text>{props.sub_text}</Text>
          </Box>
          <Spacer />
          <Center>
            <Badge>{props.points}pts</Badge>
          </Center>
          <Center w="40px" marginLeft={2}>
            <IconButton
              icon={<DeleteIcon />}
              variant="ghost"
              onClick={() => {
                list.delete(props.data_key);
                router.refresh();
              }}
            />
          </Center>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default function List(props) {
  const list_items = [];
  list.forEach((value, key) => {
    list_items.push(
      <ListItem
        key={key}
        unit={value.unit}
        points={value.points}
        sub_text={value.sub_text}
        data_key={key}
      />
    );
  });
  return (
    <VStack maxWidth={500} align="stretch">
      {list_items}
    </VStack>
  );
}
