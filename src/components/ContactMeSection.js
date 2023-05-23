import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const INITIAL_VALUES = {
  firstName: '',
  email: '',
  type: 'hireMe',
  comment: ''
}


const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const { getFieldProps, errors, touched, values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values, action) => {
      submit('_', values)
      if (response.type == 'success') {
        action.resetForm()
      }
      onOpen(response.type, response?.message)


    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      type: Yup.string().required(),
      comment: Yup.string().required()
    }),
  });
  console.log(errors)
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {
                  isLoading ? 'isLoading...' : 'Submit'
                }
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
