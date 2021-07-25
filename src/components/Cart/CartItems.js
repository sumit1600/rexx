import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addCart,removeCart } from '../../Actions'

const CartItems = (prop) => {
    const dispatch = useDispatch()

    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{prop.data.brand}</Card.Title>
                    <Card.Text>{prop.data.model}</Card.Text>
                    <span>
                        <Button variant="primary" onClick={()=>dispatch(addCart())}>Add To Cart</Button>&nbsp;&nbsp;
                        <Button variant="primary" onClick={()=>dispatch(removeCart())}>Remove From Cart</Button>
                    </span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItems
