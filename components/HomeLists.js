"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import {
  Card,
  CardBody,
  Heading,
  Text,
  Badge,
  Box,
  Spacer,
  ButtonGroup,
  Flex,
  useDisclosure,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";

import EditListPanel from "@/components/EditListPanel";
import ManageLists from "@/services/data/ManageLists";

export default function HomeLists({initLists}) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isNewListAllowed, allowNewList] = useState(false);

  // const [lists, setLists] = useState([
  //   {
  //     id: "bdfa185e-7888-44b3-8d91-93dd0e8b6b32",
  //     name: "Scopit list name",
  //     faction: "votann",
  //     max_points: 1000,
  //     details: "Sub text",
  //   },
  // ]);

  const [lists, setLists] = useState(initLists);

  let addNewList = (list) => {
    let newlist = [...lists];
    newlist.push(list);
    allowNewList(true);
    setLists(newlist);
  };

  useEffect(() => {
    let test = async () => {
      await fetch(
        `https://eoffuypiorap855.m.pipedream.net/list/${lists[0].name}`
      );
    };
    if (isNewListAllowed) {
      test();
      allowNewList(false);
      console.log("run with new list");
    }
    console.log("run");
  }, [lists]);

  return (
    <>
      {lists.map((element, index) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          m={2}
          key={`card-${element.id}`}
        >
          <CardBody>
            <Flex alignItems={"center"}>
              <Box>
                <Badge mb={2}>
                  {element.faction} - {element.max_points} pts
                </Badge>
                <Heading size="md">{element.name}</Heading>
                <Text>{element.details}</Text>
              </Box>
              <Spacer />
              <ButtonGroup gap="2">
                <IconButton
                  onClick={() => router.push(`/list/${element.id}`)}
                  icon={<ChevronRightIcon />}
                />
              </ButtonGroup>
            </Flex>
          </CardBody>
        </Card>
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New list</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditListPanel
              addNewList={addNewList}
              onClose={onClose}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <IconButton
        isRound={true}
        variant="solid"
        aria-label="Done"
        fontSize="20px"
        icon={<AddIcon />}
        position={"fixed"}
        bottom={5}
        right={5}
        zIndex={1}
        onClick={onOpen}
      />
    </>
  );
}
