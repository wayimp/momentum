import { yupResolver } from "@hookform/resolvers/yup";

import { memo, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import axiosClient from '../util/axiosClient'
import { useToast } from '@chakra-ui/react'

import {
  Box,
  Button,
  chakra,
  type ChakraProps,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  type ThemingProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface ContactFormValues {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  phone?: string;
  accept: boolean;
}

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(6, "Full name must be at least 6 characters long")
      .required("Full name is a required field")
      .matches(
        /^[a-zA-Z.]+\s+[a-zA-Z.]+$/,
        "Full name must contain only letters",
      ),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    companyName: yup
      .string()
      .nullable(true)
      .min(3, "Company name must be at least 3 characters long")
      .transform((_, val) => (val === "" ? null : val)),
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    message: yup.string().required("Message is a required field"),
  })
  .required();

const ContactForm: React.FC<ChakraProps & ThemingProps> = ({
  colorScheme = "yellow",
}) => {
  const [
    formData, // eslint-disable-line @typescript-eslint/no-unused-vars
    setFormData,
  ] = useState<ContactFormValues>();

  const toast = useToast()
  const inactiveColor = useColorModeValue("gray.500", "gray.400");

  const {
    handleSubmit,
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm<ContactFormValues>({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setFormData(data);

    await axiosClient
      .post('/contact', data)
      .then(response => {
        if (response && response.status === 200) {
          toast({
            title: 'Message sent.',
            description: JSON.stringify(response.data),
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      })
      .catch(function () {
        toast({
          title: 'Message sending error.',
          description: JSON.stringify(),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })

  };

  const inputBG = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          margin="40px"
          data-aos="fade-up"
          data-aos-delay="150"
          rounded="2xl"
          p={[4, 8, 10, 20]}
          bg={useColorModeValue("white", "gray.700")}
        >
          <chakra.form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack direction="column" spacing={[2, 4, 8]}>
              <Stack
                direction={["column", "column", "row"]}
                spacing={[2, 4, 8, 10]}
              >
                <FormControl isRequired isInvalid={!!errors?.fullName}>
                  <FormLabel htmlFor="fullName">Full Name</FormLabel>
                  <Input
                    id="fullName"
                    focusBorderColor={`${colorScheme}.400`}
                    size="lg"
                    bg={inputBG}
                    {...register("fullName")}
                  />
                  <FormErrorMessage>{errors?.fullName?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={!!errors?.email}>
                  <FormLabel htmlFor="email">Your Email</FormLabel>
                  <Input
                    id="email"
                    focusBorderColor={`${colorScheme}.400`}
                    size="lg"
                    bg={inputBG}
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
              </Stack>

              <Stack
                direction={["column", "column", "row"]}
                spacing={[2, 4, 8, 10]}
              >
                <FormControl isInvalid={!!errors?.companyName}>
                  <FormLabel fontSize="lg" htmlFor="companyName">
                    Company Name{" "}
                    <Text as="span" fontSize="sm" color="gray.400">
                      (Optional)
                    </Text>
                  </FormLabel>
                  <Input
                    id="companyName"
                    focusBorderColor={`${colorScheme}.400`}
                    size="lg"
                    bg={inputBG}
                    {...register("companyName")}
                  />
                  <FormErrorMessage>
                    {errors?.companyName?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors?.phone}>
                  <FormLabel fontSize="lg" htmlFor="phone">
                    Phone Number{" "}
                    <Text as="span" fontSize="sm" color="gray.400">
                      (Optional)
                    </Text>
                  </FormLabel>
                  <Input
                    id="phone"
                    bg={inputBG}
                    // color="gray.500"
                    size="lg"
                    focusBorderColor={`${colorScheme}.400`}
                    {...register("phone")}
                  />
                  <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
                </FormControl>
              </Stack>

              <FormControl isRequired isInvalid={!!errors?.message}>
                <FormLabel fontSize="lg">Your message</FormLabel>
                <Textarea
                  {...register("message")}
                  placeholder="Briefly describe how we can help you ..."
                  resize="vertical"
                  size="lg"
                  minHeight={32}
                  bg={inputBG}
                  focusBorderColor={`${colorScheme}.400`}
                />
                <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
              </FormControl>
              <Box>
                <Stack mt={[4, 6, 8, 10]} align="center" justify="center">
                  <Button
                    type="submit"
                    size="lg"
                    colorScheme={colorScheme}
                    isLoading={isSubmitting}
                  >
                    Send message
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </chakra.form>
        </Box>
      </Flex>
    </Container>
  );
};

export default memo(ContactForm);