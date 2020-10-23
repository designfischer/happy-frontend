import Link from 'next/link'
import Head from 'next/head'

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
    PageLoginRegisterContainer,
    PageLoginRegisterContent,
} from '../styles/PageLoginRegister/styles'

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
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
                        <FormButton>Entrar</FormButton>
                    </InitialForm>
                    <FormNavitagion>
                        <Link href="/register">
                            <FormNavitagionItem>
                                Ainda não sou cadastrado
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
