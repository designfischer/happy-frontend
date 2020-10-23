import styled from 'styled-components'
import { DefaultButton } from '../DefaultButton/styles'

export const FormLogoImage = styled.img`
    max-width: 100px;
    margin-bottom: 25px;
`

export const InitialForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
`

export const FormInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 50px;
    margin: 10px 0;
    padding: 0 10px;

    background: white;

    border-radius: 10px;
`

export const FormLabel = styled.label`
    color: #333;

    font-size: 10px;
`

export const FormInput = styled.input`
    border: none;
    outline: none;
`

export const FormButton = styled(DefaultButton)`
    margin: 10px 0;
    width: 100%;
`

export const FormNavitagion = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const FormNavitagionItem = styled.a`
    margin: 10px 0;
    color: white;
    cursor: pointer;

    font-size: 14px;

    transition: 0.5s;

    &:hover {
        color: #ffd666;
    }
`
