import React from 'react'
import { CardContainer } from '../styled-components/CardContainer';
import { Card, Cardbutton, CardButtonDiv } from '../styled-components/Card'
import { HomeDiv } from '../styled-components/HomeStyle'

import { useDispatch } from 'react-redux';

export default function Home(props) {
    const { toolData } = props;
    console.log(toolData);
    const dispatch = useDispatch();
    return (
        <HomeDiv>
            <h2>Tools</h2>
            <h2>Yarn</h2>
            <h2>Accessories</h2>
            <CardContainer>
            {toolData.map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <h4>{tool.price}</h4>
                        <CardButtonDiv>
                        <Cardbutton>Add to Cart</Cardbutton>
                        <Cardbutton onClick={() => dispatch({type: "PUT_WISHLIST", payload: {type:tool.type, price: tool.price}})}>Add to Wishlist</Cardbutton>  
                        </CardButtonDiv>
                    </Card>
                    )
                
            })}
            </CardContainer>
            <CardContainer>
            {toolData.map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <h4>{tool.price}</h4> 
                    </Card>
                    )
                
            })}
            </CardContainer>
            <CardContainer>
            {toolData.map((tool) => {
                return (
                    <Card>
                        <img src = {tool.img}/>
                        <h4>{tool.price}</h4> 
                    </Card>
                    )
                
            })}
            </CardContainer>
        </HomeDiv>
    );
}
