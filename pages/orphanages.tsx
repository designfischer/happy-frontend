import Link from 'next/link'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import styled from 'styled-components'
import { CallToAction } from '.'
import { PageWithSideBar } from '../styles/PageContent/styles'

const Orphanages = () => {
    return (
        <PageWithSideBar>
            <SideBar>
                <SideBarHeader>
                    <SideBarLogoImage src="/assets/logo.svg" />
                    <Link href="/">
                        <NavigateBack>
                            <FiLogOut size={10} color="#fff" />
                        </NavigateBack>
                    </Link>
                </SideBarHeader>
                <SideBarTitle>Escolha um orfanato no mapa</SideBarTitle>
                <SideBarDescription>
                    Muitas crianças estão esperando a sua visita.
                </SideBarDescription>
            </SideBar>
            <Map />
        </PageWithSideBar>
    )
}

export default Orphanages

const SideBar = styled.aside`
    display: flex;
    flex-direction: column;

    padding: 50px;
`

const SideBarHeader = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 50px;
`

const SideBarLogoImage = styled.img`
    max-width: 50%;
`

const SideBarTitle = styled.h2`
    font-size: 24px;
    line-height: 24px;
    max-width: 70%;
    margin-bottom: 25px;
`

const SideBarDescription = styled.p`
    font-size: 18px;
    max-width: 70%;
`

const Map = styled.div`
    background: white;
`

const NavigateBack = styled(CallToAction)`
    width: 30px;
    height: 30px;
`
