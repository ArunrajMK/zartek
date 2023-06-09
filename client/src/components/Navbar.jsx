
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
import MyOrderModal from './MyOrderModal';
export default function Navbar({count,title,cart}) {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("cart",cart)


let cartCount = cart.reduce((acc, item)=>{
  return acc + item.count
},0)


  return (
    <>
      <Box paddingLeft={'15px'} paddingRight={'15px'} fontSize={{ base: '10', sm: '11', md: '17' }} bg={useColorModeValue('gray.100', 'gray.900')}   width={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text>{title}</Text>

          <Flex alignItems={'center'}>

            <Stack direction={'row'} spacing={7}>
            <Center>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              </Center>
              <Center>
             <MyOrderModal cart={cart}/>
              </Center>
              <Center>
             <Box >

             <Box h="25px" bg={'red'} w="25px" marginLeft={'5px'} marginBottom={'-7px'} borderRadius={'50%'} border={'1px solid red'}>
             <Text color={'white'} fontWeight={'bold'} fontSize={'1xs'}>{cartCount}</Text>
             </Box>
            
              <BsCart4 size="25px"/>
             </Box>
            
              </Center>
           
             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}