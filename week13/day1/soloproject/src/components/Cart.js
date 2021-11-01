import React from 'react'
import { useDispatch } from 'react-redux'

import { CartDiv } from '../styled-components/CartStyle'
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { CardContainer, TitleDiv } from '../styled-components/CardContainer';

export default function Cart(props) {
    const dispatch = useDispatch()
    const {cartList} = props;

    return (
        <CartDiv>
            <CardContainer>
            <TitleDiv>
            <h2>Your Cart:</h2>
            </TitleDiv>    
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
        </CartDiv>
    )
}
