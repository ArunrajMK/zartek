import { Tab, TabIndicator, TabList,  Tabs } from '@chakra-ui/react'
import React from 'react'

function NavTab({elem,setSelectedCategory}) {
 
  return (
    <Tabs position="relative"
     overflowY={'auto'} className='scroll'  justifyContent={'space-between'} variant="unstyled">
    <TabList>
      {elem?.map((item)=>(

     <Tab w="300px"   minW={'100px'}  fontSize={{ base: '8', sm: '9', md: '15' }}   onClick={()=>setSelectedCategory(item.menu_category)}>{item.menu_category}</Tab>

      ))}
     
      
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
   
  </Tabs>
  )
}

export default NavTab