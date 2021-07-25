import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addCart,removeCart } from '../../Actions'

const ShopItems = (prop) => {
    const dispatch = useDispatch()

    return (
        <div style={{ textAlign:"-webkit-center" }}>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{prop.data.brand}</Card.Title>
                    <Card.Text>{prop.data.model}</Card.Text>
                    <span>
                        <Button variant="primary" onClick={()=>dispatch(addCart(prop.data))}>Add To Cart</Button>&nbsp;&nbsp;
                        <Button variant="primary" onClick={()=>dispatch(removeCart(prop.data))}>Remove From Cart</Button>
                    </span>
                </Card.Body>
            </Card>
            <br/>
        </div>
    )
}

export default ShopItems
