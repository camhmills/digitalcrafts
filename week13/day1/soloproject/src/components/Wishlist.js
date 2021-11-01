import React from 'react'
import { useDispatch } from 'react-redux';

import { WishlistDiv } from '../styled-components/WishlistStyle'
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { CardContainer } from '../styled-components/CardContainer';

export default function Wishlist(props) {
    const dispatch = useDispatch()
    const {wishList} = props;
    console.log(wishList)
    return (
        <WishlistDiv>
            <h2>Your Wishlist:</h2>
            <CardContainer>
            {wishList.map(item => {
                return (
                    <Card>
                        <img src = {item.img}/>
                        <h4>${item.price}.00</h4>
                        <CardButtonDiv>
                            <Cardbutton>Add to Cart</Cardbutton>
                            <Cardbutton onClick={() => dispatch({})}>Remove from Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
            )
        })}
            </CardContainer>
        </WishlistDiv>
    )
}
