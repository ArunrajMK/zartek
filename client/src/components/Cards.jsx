import { Box,  Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


function Cards({elem}) {



  return (
    <>
 <Flex paddingLeft={'10px'} paddingTop={'100px'} justifyContent={'space-between'} >
 <Box>
     <Text fontWeight={'bold'} fontSize={'2xl'}>{elem.dish_name}</Text>
     <Text fontWeight={'bold'}>{elem.dish_currency} {elem.dish_price}</Text>
     <Text fontSize={'1xs'} color={'grey'} >{elem.dish_description}</Text>
    
 </Box>
 <Flex w='30%' justifyContent={'space-between'} >
     <Center>
     <Text>Calories</Text>
     </Center>
 <Image alt="" h='100px' w='100px' 
 src={elem.dish_image}/>
 </Flex>

</Flex>
 



    </>
  )
}

export default Cards