import React, {useEffect, useState} from 'react';
import { HeaderDiv } from './styledcomponents/HeaderStyle';
import { HeaderButton } from './styledcomponents/HeaderButtonStyle';
import { RightSideHeader } from './styledcomponents/RightSideHeader';
import { useDispatch, useSelector } from "react-redux";

const URL = "https://randomuser.me/api/";

export default function Header(props) {
    const viewSidebar = props.viewSidebar;
    const setViewSidebar = props.setViewSidebar;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userData)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const getUserData = async () => {
            const getUser = await fetch (URL, {
                method: 'GET',
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        const jsonUser = await getUser.json();

        dispatch({
            type: "GET_USER", 
            payload: {...jsonUser.results[0]},
        })
        }
    
    getUserData();
    return () => {}
}, [counter, dispatch]);

console.log(user)

    return (
        <HeaderDiv>
            <HeaderButton onClick={() => setViewSidebar(!viewSidebar)}/>
            <RightSideHeader>
            <p>
                Welcome
            </p>
            <HeaderButton onClick={() => setCounter(counter+1)}>Get New User</HeaderButton>
            </RightSideHeader>
        </HeaderDiv>
    )
}