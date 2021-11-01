import React from 'react'
import { CardContainer, TitleDiv } from '../styled-components/CardContainer';
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { HomeDiv } from '../styled-components/HomeStyle'

import { useDispatch } from 'react-redux';

export default function Home(props) {
    const { itemData } = props;
    const dispatch = useDispatch();
    return (
        <HomeDiv>
            <CardContainer>
            <TitleDiv>
               <h2>Tools</h2> 
            </TitleDiv>
            {itemData[0].map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <p>{tool.name}</p>
                        <h4>${tool.price}.00</h4>
                        <CardButtonDiv>
                        <Cardbutton onClick={() => dispatch({type: "ADD_TO_CART", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Cart</Cardbutton>
                        <Cardbutton onClick={() => dispatch({type: "PUT_WISHLIST", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
                    )
                }
            )}
            </CardContainer>
            <CardContainer>
            <TitleDiv>
               <h2>Yarn</h2> 
            </TitleDiv>
            {itemData[1].map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <p>{tool.name}</p>
                        <h4>${tool.price}.00</h4>
                        <CardButtonDiv>
                        <Cardbutton onClick={() => dispatch({type: "ADD_TO_CART", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Cart</Cardbutton>
                        <Cardbutton onClick={() => dispatch({type: "PUT_WISHLIST", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
                    )
                
            })}
            </CardContainer>
            <CardContainer>
            <TitleDiv>
               <h2>Accessories</h2> 
            </TitleDiv>
            {itemData[2].map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <p>{tool.name}</p>
                        <h4>${tool.price}.00</h4>
                        <CardButtonDiv>
                        <Cardbutton onClick={() => dispatch({type: "ADD_TO_CART", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Cart</Cardbutton>
                        <Cardbutton onClick={() => dispatch({type: "PUT_WISHLIST", payload: {name: tool.name, type:tool.type, price: tool.price, img: tool.img}})}>Add to Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
                    )
            })}
            </CardContainer>
        </HomeDiv>
    );
}
