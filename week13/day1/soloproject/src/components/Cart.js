import React from 'react'
import { useDispatch } from 'react-redux'

import { CartDiv, CartTotal } from '../styled-components/CartStyle'
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { CardContainer, TitleDiv } from '../styled-components/CardContainer';

export default function Cart(props) {
    const dispatch = useDispatch()
    const {cartList} = props;
    const totalDue = 0
    return (
        <CartDiv>
            <TitleDiv>
            <h2>Your Cart:</h2>
            </TitleDiv>
            <CardContainer>
            {cartList.map(item => {
                return (
                    <Card>
                        <img src = {item.img}/>
                        <p>{item.name}</p>
                        <h4>${item.price}.00</h4>
                        <CardButtonDiv>
                            <Cardbutton onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: item.name})}>Remove from Cart</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
            )
        })}
            </CardContainer>
            <CartTotal>{cartList.map(item => {return(totalDue+item.price)})}</CartTotal>
        </CartDiv>
        
    )
}
