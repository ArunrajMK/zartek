import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData } from "../redux/action";
import { useDispatch } from "react-redux";
import { Box, Button,  Heading, Text } from "@chakra-ui/react";
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




return (
    <>
    <Navbar  count={cartItems.length}/>
    <NavTab elem={data[0]?.table_menu_list} setSelectedCategory={setSelectedCategory}/>
<Box>


<>




</>

{data[0]?.table_menu_list.map((category) => (
 <Box>

{category.menu_category===selectedCategory&&<>

{category?.category_dishes?.map((dish) => (
<Box>
    <Cards elem={dish}/>

{cartItems.some((item) => item.dish_id === dish.dish_id) ? (
<div>
<Button  onClick={() => handleRemoveFromCart(dish)}>-</Button>
{cartItems.find((item) => item.dish_id === dish.dish_id).count}
<Button  onClick={() => handleAddToCart(dish)}>+</Button>
</div>
) : ( <>
<Button  onClick={() => handleRemoveFromCart(dish)}>-</Button>
0
<Button  onClick={() => handleAddToCart(dish)}>+</Button>
</> )}
{dish.addonCat.length > 0 ? (
 <Box>
<Text>Customizations available</Text>
</Box>
) : null}
</Box>
))}


</>}


</Box>
))}

</Box>
</>
);
};

export default Dashboard;