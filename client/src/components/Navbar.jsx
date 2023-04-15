
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  HStack,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsCart4 } from 'react-icons/bs';
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>

            <Stack direction={'row'} spacing={7}>
              
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Center>
              <Text>My orders</Text>
              </Center>
              <Center>
             
              <BsCart4/>
                
              </Center>
           
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}