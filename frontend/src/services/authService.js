import api from './api'

export async function registerUser(data){
    const response = await api.post(
        '/auth/register',
        data
    )

    return response.data
}