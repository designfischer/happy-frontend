import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import styled from 'styled-components'
import { CallToAction } from '.'
import LeafletMap from '../components/Map'
import { PageWithSideBarAndMap } from '../styles/PageContent/styles'
import { SideBar, SideBarDescription, SideBarHeader, SideBarLogoImage, SideBarTitle } from '../styles/SideBar/styles'

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
            <Link href="/orphanage/template">
                <CreateNewOrphanage>
                    <FiPlus size={25} color="#fff" />
                </CreateNewOrphanage>
            </Link>
        </PageWithSideBarAndMap>
    )
}

export default Orphanages

const CreateNewOrphanage = styled(CallToAction)`
    position: absolute;
    z-index: 10;

    right: 50px;
    bottom: 50px;

    width: 50px;
    height: 50px;
`
