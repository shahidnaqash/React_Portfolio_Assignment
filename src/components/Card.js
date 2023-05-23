import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack background={'white'} borderRadius={'10px'} color={'black'} overflow={'hidden'}>
      <Image src={imageSrc} alt='Dan Abramov' />
      <VStack padding={'20px'} alignItems='flex-start'>
        <Heading as='h4' size='md'>
          {title}
        </Heading>
        <Text fontSize='md' color={'gray.400'}>{description}</Text>
        <HStack >
          <Text fontWeight={500} >see more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
