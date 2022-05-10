import React from "react";
import { Box, VStack, Heading, Image, Text } from "native-base";

const Welcome = ({ image, title }) => {
  return (
    <VStack h="250px" pb={5}>
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="250px"
        resizeMode="cover"
        source={image}
        alt="Welcome"
      />
      <Box flex={1} />
      <Heading color="white" p={6} pb={2} size="xl">
        <Text>{title}</Text>
      </Heading>
    </VStack>
  );
};

export default Welcome;
