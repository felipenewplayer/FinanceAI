import api from './api'

export async function registerUser(data){
    const response = await api.post(
        '/auth/register',
        data
    )

    return response.data
}

export async function loginUser(data) {

    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Email ou senha inválidos.");
    }

    return await response.json();
}