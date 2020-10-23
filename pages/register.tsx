import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import {
    FormButton,
    FormInput,
    FormInputGroup,
    FormLabel,
    FormLogoImage,
    FormNavitagion,
    FormNavitagionItem,
    InitialForm,
} from '../styles/InitialForm/styles'
import {
    PageLoginRegisterContent,
    PageLoginRegisterContainer,
} from '../styles/PageLoginRegister/styles'

const Login = () => {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/assets/logo.svg" />
            </Head>
            <PageLoginRegisterContainer>
                <PageLoginRegisterContent>
                    <FormLogoImage src="/assets/logo.svg" />
                    <InitialForm>
                        <FormInputGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput id="email" />
                        </FormInputGroup>
                        <FormInputGroup>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <FormInput id="password" />
                        </FormInputGroup>
                        <FormButton>Cadastrar</FormButton>
                    </InitialForm>
                    <FormNavitagion>
                        <Link href="/login">
                            <FormNavitagionItem>
                                Já sou cadastrado
                            </FormNavitagionItem>
                        </Link>
                        <Link href="/">
                            <FormNavitagionItem>Voltar</FormNavitagionItem>
                        </Link>
                    </FormNavitagion>
                </PageLoginRegisterContent>
            </PageLoginRegisterContainer>
        </>
    )
}

export default Login
