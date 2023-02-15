import {
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
} from '@chakra-ui/react';
import {
    IoThumbsUpSharp
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                minWidth={30}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function SplitWithImage() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Plenty of Ammenities
                    </Text>
                    <Heading>Luxury Tiny Living</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Maintenance-free black corrugated metal siding with treated cedar porch.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Unique mono-slope metal roof rated for snow and high winds. EMF blocking.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Closed cell Sprayfoam floors, walls, and ceiling, with added R19 insulation, ZIP system, and reflective padding.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'12 Dual Pane, tempered, low-E windows. 4 operable 8 fixed. Sliding glass door, insulated exterior door side entry.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'White 8" Pine Nickel-gap shiplap interior with aromatic cedar accent.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'White cabinets with soft close drawers, authentic butcher block countertop.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'300 Sqft of livable space, on portable triple axel chassis.'}
                        />
                        <Feature
                            icon={<Icon as={IoThumbsUpSharp} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Sleeps up to 4, with code-compliant stairs to the loft.'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'interior perspective'}
                        src={
                            '/images/interior.jpg'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}