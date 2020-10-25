import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FormEvent, useState, useEffect } from 'react'
import InputField from '../components/Input'
import api from '../services/api'
import {
    FormButton,    
    FormLogoImage,
    FormNavitagion,
    FormNavitagionItem,
    InitialForm,
} from '../styles/InitialForm/styles'
import {
    PageLoginRegisterContent,
    PageLoginRegisterContainer,
} from '../styles/PageLoginRegister/styles'

const Register = () => {

    const router = useRouter()
    const [email, setEmail] = useState<string>('')  
    const [password, setPassword] = useState<string>('')    

    async function handleRegister(event: FormEvent) {
        event.preventDefault()
        
        try {
            const newUser = await api.post('users', {
                email,
                password
            })
            alert('Usuário cadastrado com sucesso')
            router.push('/')
        } catch(err) {
            alert(err)
        }
    }

    useEffect(() => {
        console.log(email)
    }, [email])

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
                        <InputField                             
                            inputValue={email}
                            inputID={'email'}
                            inputTitle={'Email'}
                            setInputValue={setEmail}
                            inputType={'text'}
                        />                        
                        <InputField 
                            inputValue={password}
                            inputID={'password'}
                            inputTitle={'Senha'}
                            setInputValue={setPassword}
                            inputType={'password'}
                        />
                        <FormButton
                            onClick={handleRegister}
                        >Cadastrar</FormButton>
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

export default Register
