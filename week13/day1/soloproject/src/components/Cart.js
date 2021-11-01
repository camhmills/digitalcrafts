import React from 'react'
import { useDispatch } from 'react-redux'

import { CartDiv } from '../styled-components/CartStyle'
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { CardContainer, TitleDiv } from '../styled-components/CardContainer';

export default function Cart(props) {
    const dispatch = useDispatch()
    const {cartList} = props;
    console.log(cartList)
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
                        <h4>${item.price}.00</h4>
                        <CardButtonDiv>
                            <Cardbutton onClick={() => dispatch({})}>Remove from Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
            )
        })}
            </CardContainer>
        </CartDiv>
    )
}
