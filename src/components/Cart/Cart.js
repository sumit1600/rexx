import React,{useEffect,useState} from 'react'
import CartItems from './CartItems'

const Cart = () => {
    const ApiUrl = "http://localhost:8000/cart"
    const [data,SetData]= useState([])

    useEffect(()=>{
        getData()
    },[])
    function getData(){
        fetch(ApiUrl).then((result)=>{
            result.json().then((res)=>{
                //console.warn("x",res)
                SetData(res)
            })
        })
    }
    
    return (
        <div>
            {
                data.map((item)=>{
                   return <CartItems data={item}/>
                })
            }
        </div>
    )
}

export default Cart
