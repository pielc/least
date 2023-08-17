"use client";

import { Field, Form, Formik } from "formik";

import {
  Button,
  FormLabel,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";

const EditListPanel = ({ addNewList, onClose }) => {
  

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          addNewList({
            id: "bdfa185e-7888-44b3-8d91-93dd0e8b6b33",
            name: values.name,
            faction: values.faction,
            points: values.points,
            sub_text: values.details,
          });
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form autoComplete="off">
            <VStack gap={3}>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input {...field} placeholder="name" />
                  </FormControl>
                )}
              </Field>

              <Field name="faction">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel>Faction</FormLabel>
                    <Input {...field} placeholder="faction" />
                  </FormControl>
                )}
              </Field>

              <Field name="points">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel>Max points</FormLabel>
                    <Input {...field} placeholder="points" />
                  </FormControl>
                )}
              </Field>

              <Field name="details">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel>Details</FormLabel>
                    <Input {...field} placeholder="details" />
                  </FormControl>
                )}
              </Field>
            </VStack>
            <Button
              mt={4}
              isLoading={props.isSubmitting}
              type="submit"
              onClick={onClose}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditListPanel;
