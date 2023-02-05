import {
    Avatar,
    Box,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

const bodyColor = "#000"

export default function Team() {
    const items = [
        {
          image: "/images/handel.jpg",
          name: "Handel Humphrey",
          occupation: "Founder & CEO",
          body: "Lorem ipsum dolor sit amet consectetur adipisici elit sed eiusmod tempor.",
        },
        {
            image: "/images/keith.jpg",
            name: "Keith Humphrey",
            occupation: "Engineering",
            body: "Lorem ipsum dolor sit amet consectetur adipisici elit sed eiusmod tempor.",
          },
          {
            image: "/images/curtis.jpg",
            name: "Curtis Humphrey",
            occupation: "Research & Development",
            body: "Lorem ipsum dolor sit amet consectetur adipisici elit sed eiusmod tempor.",
          },
      ];
      return (
        <Box>
          <Container maxW="container.xl">
            <VStack align="stretch" width="full" spacing={[10, 10, 20]}>
              <VStack>
                <Heading as="h3" size="xl">
                  Our Team
                </Heading>
                <Text as="h4" fontSize="xl">
                    Momentum Modular is a family business with decades of innovation in alternative construction. We make practical application of various disciplines to achieve custom solutions for business and personal use.
                </Text>
              </VStack>
              <SimpleGrid
                width="full"
                columns={[1, 1, 2, 4]}
                spacing={[10, 10, 5, 10]}
              >
                {items.map((item) => (
                  <Flex
                  bg="#FFF"
                    key={item.name}
                    p={8}
                    // shadow="2xl"
                    boxShadow="0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%)"
                    // borderWidth="1px"
                    rounded="lg"
                  >
                    <VStack
                      width="full"
                      spacing={[1]}
                      align={["center", "center", "stretch"]}
                      textAlign={["center", "center", "start"]}
                    >
                      <Flex>
                        <Avatar
                          as={Box}
                          size="lg"
                          src={item.image}
                          name={item.name}
                          mb={4}
                        />
                      </Flex>
                      <Text
                        color={bodyColor}
                        fontSize="sm"
                        textTransform="uppercase"
                        fontWeight="semibold"
                      >
                        {item.occupation}
                      </Text>
                      <Text fontSize="xl" fontWeight="semibold">
                        {item.name}
                      </Text>
                      <Text color={bodyColor}>{item.body}</Text>
                      <Box>
                      </Box>
                    </VStack>
                  </Flex>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      );
    };

