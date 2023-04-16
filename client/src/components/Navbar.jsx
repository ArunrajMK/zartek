
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsCart4 } from 'react-icons/bs';
export default function Navbar({count}) {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Box position={'fixed'} bg={useColorModeValue('gray.100', 'gray.900')} paddingRight={'40px'}  width={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box></Box>

          <Flex alignItems={'center'}>

            <Stack direction={'row'} spacing={7}>
              
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Center>
              <Text>My orders</Text>
              </Center>
              <Center>
             <Box >

             <Box h="15px" bg={'red'} w="15px" marginLeft={'5px'} marginBottom={'-7px'} borderRadius={'50%'} border={'1px solid red'}>
             <Text color={'white'} fontWeight={'bold'} fontSize={'2xs'}>{count}</Text>
             </Box>
            
              <BsCart4/>
             </Box>
            
              </Center>
           
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}