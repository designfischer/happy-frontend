import styled from 'styled-components'

export const DefaultButton = styled.button`
    background: #ffd666;    
    
    border-radius: 10px;
    height: 50px;

    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    &:hover {
        background: #96feff;
    }
`