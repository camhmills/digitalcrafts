import React from 'react'
import { WishlistDiv } from '../styled-components/WishlistStyle'

export default function Wishlist(props) {
    const {wishList} = props;
    console.log(wishList)
    return (
        <WishlistDiv>
            Wishlist
        </WishlistDiv>
    )
}
