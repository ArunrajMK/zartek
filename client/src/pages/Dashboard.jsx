import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../redux/action";
import { useDispatch } from "react-redux";
import { Box, Flex, Text } from "@chakra-ui/react";
import Cards from "../components/Cards";
import NavTab from "../components/NavTab";
import Navbar from "../components/Navbar";

function Dashboard() {
    const dispatch = useDispatch() 
    const data = useSelector((store)=>store.data.data);
    const [selectedCategory, setSelectedCategory] = useState('Salads and Soup')
    
const [cartCount, setCartCount] = useState(0);
const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (dish) => {
const itemIndex = cartItems.findIndex((item) => item.dish_id === dish.dish_id);
if (itemIndex === -1) {
setCartItems([...cartItems, { ...dish, count: 1 }]);
} else {
const newCartItems = [...cartItems];
newCartItems[itemIndex].count += 1;
setCartItems(newCartItems);
}
setCartCount(cartCount + 1);
};

const handleRemoveFromCart = (dish) => {
const itemIndex = cartItems.findIndex((item) => item.dish_id === dish.dish_id);
if (itemIndex !== -1) {
const newCartItems = [...cartItems];
const item = newCartItems[itemIndex];
item.count -= 1;
if (item.count === 0) {
newCartItems.splice(itemIndex, 1);
}
setCartItems(newCartItems);
setCartCount(cartCount - 1);
}
};



useEffect(()=>{
    dispatch(getData())

},[dispatch])

console.log("Data",data[0]?.table_menu_list)


return (
    <>
    <Navbar cart={cartItems} title={data[0]?.branch_name} count={cartItems.length}/>
    <NavTab elem={data[0]?.table_menu_list} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
   
<Box paddingTop={'70px'} paddingBottom={'50px'}>

<>
</>
<Box >
{data[0]?.table_menu_list.map((category) => (
 <Box>

{category.menu_category===selectedCategory&&<>

{category?.category_dishes?.map((dish) => (
<Box borderBottom={'1px solid grey'} marginBottom={'5px'}>
    <Cards elem={dish}/>
    {dish.dish_Availability===true?<>
    
        {cartItems.some((item) => item.dish_id === dish.dish_id) ? (
<Flex  marginBottom={'10px'} color={'white'}  marginTop="15px" bg='green'  borderRadius={'10px'} width={'100px'} marginLeft={'15px'}>
<Box  cursor={'pointer'} w='50px'  onClick={() => handleRemoveFromCart(dish)}>-</Box>
<Text color={'white'}>{cartItems.find((item) => item.dish_id === dish.dish_id).count}</Text>
<Box  cursor={'pointer'}  w='50px' onClick={() => handleAddToCart(dish)}>+</Box>
</Flex>

) : ( <Flex marginBottom={'10px'} color={'white'} marginTop="15px" bg='green' borderRadius={'10px'} width={'100px'} marginLeft={'15px'}>
<Box  cursor={'pointer'}  w='50px' onClick={() => handleRemoveFromCart(dish)}>-</Box>
 <Text>0</Text>
<Box  cursor={'pointer'}  w='50px' onClick={() => handleAddToCart(dish)}>+</Box>

</Flex >


 )}
 </>:
 <Box   marginBottom={'10px'} color={'white'}  marginTop="15px" bg='red'  borderRadius={'10px'} width={'100px'} marginLeft={'15px'}>
   <Text></Text>
   Out of stoke
 </Box>
}


{dish.addonCat.length > 0 ? (
 <Box>
<Text fontSize={{ base: '10', sm: '11', md: '17' }} marginLeft={'15px'} color={'red'} textAlign={'left'}>Customizations available</Text>
</Box>
) : null}
</Box>
))}


</>}


</Box>
))}
</Box>
</Box>
</>
);
};

export default Dashboard;