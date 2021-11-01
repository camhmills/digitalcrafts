import React from 'react'
import { useDispatch } from 'react-redux';

import { WishlistDiv } from '../styled-components/WishlistStyle'
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { CardContainer, TitleDiv } from '../styled-components/CardContainer';

export default function Wishlist(props) {
    const dispatch = useDispatch()
    const {wishList} = props;
    console.log(wishList)
    return (
        <WishlistDiv>
            <TitleDiv>
            <h2>Your Wishlist:</h2>
            </TitleDiv>
            <CardContainer>
            {wishList.map(item => {
                return (
                    <Card>
                        <img src = {item.img}/>
                        <p>{item.name}</p>
                        <h4>${item.price}.00</h4>
                        <CardButtonDiv>
                            <Cardbutton onClick={() => dispatch({type:"ADD_TO_CART", payload: {name: item.name, type:item.type, price: item.price, img: item.img}})}>Add to Cart</Cardbutton>
                            <Cardbutton onClick={() => dispatch({type:"REMOVE_FROM_WISHLIST", payload: item.name})}>Remove from Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
            )
        })}
            </CardContainer>
        </WishlistDiv>
    )
}
