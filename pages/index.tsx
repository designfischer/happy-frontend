import Link from 'next/link'
import Head from 'next/head'
import { FiSearch, FiLogIn } from 'react-icons/fi'
import styled from 'styled-components'
import { PageContainer } from '../styles/PageContent/styles'
import { DefaultButton } from '../styles/DefaultButton/styles'

const LandingPage = () => {
    return (
        <>
            <Head>
                <title>Happy</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>

            <PageContainer>
                <PageWrapper>
                    <LeftContainer>
                        <HappyLogo src="/assets/logo.svg" />
                        <Headline>Leve felicidade para o mundo</Headline>
                        <Subtitle>
                            Visite orfanatos e mude o dia de muitas crianças
                        </Subtitle>
                        <LandingActions>
                            <Link href="/orphanages">
                                <NavigateToMap>
                                    <span>Ver Orfanatos</span>
                                    <FiSearch size={18} color="#fff" />
                                </NavigateToMap>
                            </Link>
                            <Link href="/login">
                                <NavigateToLogin>
                                    <FiLogIn size={18} color="#fff" />
                                </NavigateToLogin>
                            </Link>
                        </LandingActions>
                    </LeftContainer>

                    <RightContainer>
                        <HeroImage src="/assets/landing-ilustra.svg" />
                    </RightContainer>
                </PageWrapper>
            </PageContainer>
        </>
    )
}

export default LandingPage

const PageWrapper = styled.div`
    max-width: 1100px;
    margin: 50px 25px;

    display: flex;
    justify-content: center;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
`

const HappyLogo = styled.img`
    align-self: flex-start;

    width: 125px;
`

const Headline = styled.h1`
    font-size: 72px;
    line-height: 72px;
    max-width: 70%;
`

const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
`

const LandingActions = styled.div`
    display: flex;
`

export const CallToAction = styled(DefaultButton)`
    cursor: pointer;
    margin: 0 10px;
    color: white;

    span {
        margin-right: 10px;
        font-weight: bold;
    }
`

const NavigateToMap = styled(CallToAction)`
    width: 200px;
`

const NavigateToLogin = styled(CallToAction)`
    width: 50px;

    background: #f8dc90;
`

const HeroImage = styled.img`
    max-width: 100%;
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
`
