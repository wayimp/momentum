import React, { useContext, useLayoutEffect, useState } from "react";

import {
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
  type ChakraProps,
  type ThemingProps,
} from '@chakra-ui/react';

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import MotionBox from "src/components/MotionBox";
import useBoundingRect from "src/definitions/hooks/useBoundingRect";

interface ParallaxProps extends ChakraProps, ThemingProps {
  children: React.ReactNode;
  offset?: number;
  min?: number;
  max?: number;
}

const Parallax = ({
  children,
  // offset = 50,
  min = 50,
  max = 150,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [ref, { top }] = useBoundingRect();

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  // const final = elementTop + offset;
  const final = elementTop + max;

  // useTransform(x, input, output)
  const yRange = useTransform(scrollY, [initial, final], [min, max]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    if (window && top) {
      setElementTop(top + window.scrollY || window.pageYOffset);
    }
    setClientHeight(window.innerHeight);
  }, [top]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }
  return (
    <MotionBox ref={ref} style={{ y }} {...rest}>
      {children}
    </MotionBox>
  );
};

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'100vw'}
      h={'90vh'}
      backgroundImage={
        'images/tiny1.png'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Custom-Built Modular Trailers
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Parallax max={500} pos="absolute" left={0} top="10%" zIndex={2}>
              <Heading color="whiteAlpha.700" fontSize="clamp(16px, 12vw, 10rem)">&nbsp;Big</Heading>
            </Parallax>
            <Parallax max={500} pos="absolute" top="10%" right={0} zIndex={2}>
              <Heading color="whiteAlpha.700" fontSize="clamp(16px, 12vw, 10rem)">Tiny&nbsp;</Heading>
            </Parallax>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}