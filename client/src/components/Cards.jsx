import { Box,  Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


function Cards({elem}) {

  return (
    <Box>
 <Flex paddingLeft={'50px'} paddingRight={'50px'} px={{ base: 2, sm: 12, md: 17 }} paddingTop={'30px'} justifyContent={'space-between'} >
 <Box fontSize={{ base: '10', sm: '11', md: '17' }}>
     <Text  textAlign={'left'} fontWeight={'bold'} >{elem.dish_name}</Text>
     <Text textAlign={'left'} fontWeight={'bold'}>{elem.dish_currency} {elem.dish_price}</Text>
     <Text textAlign={'left'} fontSize={'1xs'} color={'grey'} >{elem.dish_description}</Text>
    
 </Box>
 <Flex w='30%' justifyContent={'space-between'} >
     <Center>
     <Text fontSize={{ base: '10', sm: '11', md: '17' }}>{elem.dish_calories} Calories</Text>
     </Center>
 <Image  h='100px' w='100px' 
 src={elem.dish_image}/>
 </Flex>

</Flex>
 



    </Box>
  )
}

export default Cards