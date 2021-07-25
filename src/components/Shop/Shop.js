import React,{useEffect,useState} from 'react'
import ShopItems from './ShopItems'

const Shop = () => {
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
            <h3>Welcome to the Rexx Shop</h3>
            {
                data.map((item)=>{
                   return <ShopItems data={item}/>
                })
            }
        </div>
    )
}

export default Shop
