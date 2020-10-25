import Link from 'next/link'
import React from 'react'
import { FiCalendar, FiAlertCircle, FiMessageSquare } from 'react-icons/fi'

import styled from 'styled-components'
import { CallToAction } from '..'

import { PageWithSideBarAndMap } from '../../styles/PageContent/styles'
import {
    SideBar,
    SideBarDescription,
    SideBarHeader,
    SideBarLogoImage,
    SideBarTitle,
} from '../../styles/SideBar/styles'

const Orphanages = () => {
    return (
        <PageWithSideBarAndMap>
            <SideBar>
                <SideBarHeader>
                    <Link href="/orphanages">
                        <SideBarLogoImage src="/assets/logo.svg" />
                    </Link>
                </SideBarHeader>                
            </SideBar>
            <OrphanageProfileContainer>
                <OrphanageProfileInfo>
                    <OrphanageImage src="https://conteudo.imguol.com.br/c/noticias/6d/2017/09/11/smyllum-park-orfanato-na-escocia-1505135822115_768x433.jpg" />
                    
                    <OrphanageTitleInfo>
                        <OrphanageTitle>
                            Lar das Meninas
                        </OrphanageTitle>                        
                        <OrphanageDescription>
                            Presta assistência a crianças de 0 a 6 anos.
                        </OrphanageDescription>
                    </OrphanageTitleInfo>                        
                        
                    <OrphanageGeoInfo>
                        Curitiba, Paraná
                    </OrphanageGeoInfo>
                    
                    <OrphanageInstructions>
                        <OrphanageDetails>
                            <FiCalendar size={50} color="#333" />
                            <p>Segunda à Sexta, das 8h às 18h.</p>
                        </OrphanageDetails>
                        <OrphanageClose>
                            <FiAlertCircle size={50} color="#fff" />
                            <p>Não atendemos aos fins de semana.</p>                            
                        </OrphanageClose>
                    </OrphanageInstructions>

                    <OrphanageContact>
                        <FiMessageSquare size={25} color="#fff"/>
                        Entre em contato
                    </OrphanageContact>

                </OrphanageProfileInfo>
            </OrphanageProfileContainer>
        </PageWithSideBarAndMap>
    )
}

export default Orphanages

const OrphanageProfileContainer = styled.main`
    display: flex;
    
    justify-content: center;
    background: #ebf2f5;    
`

const OrphanageProfileInfo = styled.div`
    max-width: 500px;
    width: 100%;
    background: white;
    color: #333;    
    border-radius: 30px;
    margin: 50px 0;
    border: 1px solid #D3E2E5;
    box-shadow: 0px 0px 10px #fff;
`

const OrphanageImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 30px;
`

const OrphanageTitleInfo = styled.div`
    margin: 25px 50px;
`

const OrphanageTitle = styled.h2`    
    font-size: 24px;
    font-weight: 800;
`

const OrphanageDescription = styled.p`
    margin: 10px 0;
`

const OrphanageGeoInfo = styled.p`
    font-size: 14px;
    margin: 0 50px;
`

const OrphanageInstructions = styled.div`
    margin: 25px 50px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`

const OrphanageDetails = styled.div`    
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D3E2E5;
    background:#ebf2f5;
    font-size: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin-left: 10px;
    }
`

const OrphanageClose = styled(OrphanageDetails)`
    background: #e2e2e2;
    color: white;
`

const OrphanageContact = styled(CallToAction)`
    margin-left: 0;
    height: 90px;
    border-radius: 30px; 
    width: 100%;

    svg {
        margin-right: 25px;
    }
`
