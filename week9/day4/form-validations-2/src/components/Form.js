import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Button, FormContainer, InputContainer } from '../styled-components/FormStyle'

export default function Form() {

    const [formData, setformData] = useState({})

    return (
        <FormContainer>
            <h1>Form</h1>
            <InputContainer>
                <input
                onChange = {(e)=>setformData({...formData, [e.target.name]:e.target.value})} 
                type="text" 
                placeholder = "username" 
                name = "username"
                value = {formData?.username}
                />
                <input 
                onChange = {(e)=>setformData({...formData, [e.target.name]:e.target.value})} 
                type="text" 
                placeholder = "email" 
                name = "email"
                value = {formData?.email}
                />
                <input 
                onChange = {(e)=>setformData({...formData, [e.target.name]:e.target.value})} 
                type="password" 
                placeholder = "password" 
                name = "password"
                value = {formData?.password}
                />
            </InputContainer>
            <div>
                <Button><input type="submit"/></Button>
            </div>
        </FormContainer>
    )
}
