import React from 'react'
import ShopItems from './ShopItems'
import {useSelector} from 'react-redux'

const ShopCart = () => {
    const CartList = useSelector((state) => state.modifyCart)
    
    return (
        <div>
            <h3>Your Cart</h3>
            {
                CartList.cartItemList.map((item)=>{
                   return <ShopItems data={item}/>
                })
            }
        </div>
    )
}

export default ShopCart
