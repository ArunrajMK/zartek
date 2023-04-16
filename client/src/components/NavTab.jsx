import { Tab, TabIndicator, TabList, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

function NavTab({elem,setSelectedCategory}) {
 
  return (
    <Tabs position="fixed" variant="unstyled">
    <TabList>
      {elem?.map((item)=>(

     <Tab onClick={()=>setSelectedCategory(item.menu_category)}>{item.menu_category}</Tab>

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