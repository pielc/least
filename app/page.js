"use client";

import React, { useState } from "react";

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

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [lists, setLists] = useState([
    {
      id: "bdfa185e-7888-44b3-8d91-93dd0e8b6b32",
      name: "Scopit list name",
      faction: "votann",
      points: 1000,
      sub_text: "Sub text",
    },
  ]);

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
                    {element.faction} - {element.points} pts
                  </Badge>
                  <Heading size="md">{element.name}</Heading>
                  <Text>{element.sub_text}</Text>
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
                  lists={lists}
                  setLists={setLists}
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
