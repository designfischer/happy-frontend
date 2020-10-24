import styled from "styled-components"

export const SideBar = styled.aside`
    display: flex;
    flex-direction: column;

    padding: 50px;
    
`

export const SideBarHeader = styled.div`    
    justify-content: space-between;
    align-items: center;

    margin-bottom: 50px;
    display: fixed;
`

export const SideBarLogoImage = styled.img`
    max-width: 50%;
    cursor: pointer;
`

export const SideBarTitle = styled.h2`
    font-size: 24px;
    line-height: 24px;
    max-width: 70%;
    margin-bottom: 60%;
`

export const SideBarDescription = styled.p`
    font-size: 18px;
    max-width: 70%;
`