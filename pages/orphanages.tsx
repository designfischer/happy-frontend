import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import styled from 'styled-components'
import { CallToAction } from '.'
import LeafletMap from '../components/Map'
import { PageWithSideBarAndMap } from '../styles/PageContent/styles'

const Orphanages = () => {
    return (
        <PageWithSideBarAndMap>
            <SideBar>
                <SideBarHeader>
                    <Link href="/">
                        <SideBarLogoImage src="/assets/logo.svg" />                    
                    </Link>
                </SideBarHeader>
                <SideBarTitle>Escolha um orfanato no mapa</SideBarTitle>
                <SideBarDescription>
                    Muitas crianças estão esperando a sua visita.
                </SideBarDescription>
            </SideBar>
            <LeafletMap />
            <Link href="/login">
                <CreateNewOrphanage>
                    <FiPlus size={25} color="#fff" />
                </CreateNewOrphanage>
            </Link>
        </PageWithSideBarAndMap>
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
    cursor: pointer;
`

const SideBarTitle = styled.h2`
    font-size: 24px;
    line-height: 24px;
    max-width: 70%;
    margin-bottom: 60%;
`

const SideBarDescription = styled.p`
    font-size: 18px;
    max-width: 70%;
`

const CreateNewOrphanage = styled(CallToAction)`
    position: absolute;
    z-index: 10;

    right: 50px;
    bottom: 50px;

    width: 50px;
    height: 50px;
`
