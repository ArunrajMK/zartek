import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import Cards from '../components/Cards';



function Dashboard() {


    const dispatch = useDispatch() 
    const data = useSelector((store)=>store.data.data);
    const [dataArray, setDataArray] = useState([])
    const [category, setCategory] = useState("Salads and Soup")
      
    useEffect(()=>{
        dispatch(getData())
    },[dispatch])
    


let categoryFilter = data[0]?.table_menu_list?.filter((item)=>{
    return item?.menu_category === category
})
console.log(categoryFilter)

let arr = []
useEffect(()=>{
if(categoryFilter!==undefined){
  arr.push(categoryFilter[0].category_dishes)
  setDataArray(arr)
}
},[data,category])



  return (
    <Box>
   <Button onClick={()=>setCategory('From The Barnyard')}>From The Barnyard</Button>
   <Button onClick={()=>setCategory('From the Hen House')}>From the Hen House</Button>
   <Button onClick={()=>setCategory('Fresh From The Sea')}>Fresh From The Sea</Button>
   <Button onClick={()=>setCategory('Biryani')}>Biryani</Button>
   <Button onClick={()=>setCategory('Fast Food')}>Fast Food</Button>
 {dataArray.map((item)=>(
 <Cards item={item}/>
))} 
    
        
        </Box>
  )
}

export default Dashboard