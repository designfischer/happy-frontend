import axios from 'axios'

export const config = axios.create({
    baseURL: 'http://localhost:3333'
})

export const user = {

    async create(userData: INewUser) {

        const { email, password } = userData
        const newUser = { email, password, id: new Date() }

        try {

            const response = await config.post('users', newUser)            
            if (response.status === 201) {
                alert('Usuário cadastrado com sucesso')
            }         
            return response

        } catch(err) {

            return err

        }
    }

}

interface INewUser {
    email: string,
    password: string    
}
