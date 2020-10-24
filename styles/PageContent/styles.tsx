import styled from 'styled-components'

export const PageContainer = styled.div`
    background: linear-gradient(330deg, #29B6D1 0%, #88C7C7 100%);
    width: 100vw;
    min-height: 100vh;

    display: flex;         
    justify-content: center;     
`

export const PageWithSideBar = styled(PageContainer)`
    display: grid;
    grid-template-columns: 1fr 3fr;    
`

export const PageWithSideBarAndMap = styled(PageWithSideBar)`
    position: relative;

    .leaflet-container {
        z-index: 5;
    }
`
