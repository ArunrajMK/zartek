import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


function Cards({item}) {



  return (
    <>

  {item.map((elem)=>(
 <Flex margin={'20px'} justifyContent={'space-between'}>
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
 src={'https://cdn.healthnwell.com/healthnwell/wp-content/uploads/2018/04/8bef1965-2404-4929-ab29-1fdb1eb3b69f.jpg'}/>
 </Flex>

</Flex>
  ))}



    </>
  )
}

export default Cards