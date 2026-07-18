import { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        try {

            const data = {
                email,
                senha
            }

            const response = await registerUser(data)

            console.log(response)

            setError("")

        } catch (error) {

            if (error.response) {
                setError(error.response.data.detail)
            } else {
                setError("Erro ao conectar com servidor")
            }
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">

                <div>
                    <h2 className="roboto-black mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Crie sua conta
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4 rounded-md">
                        <div>
                            <label 
                            htmlFor="email-address"
                            className="roboto-black block text-sm font-medium text-gray-700">
                                Email :
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="roboto-medium mt-1 w-full rounded border p-2"
                            placeholder="seu-email@exemplo.com"
                            />
                        </div>

                        <div>
                            <label 
                            htmlFor="senha"
                            className="roboto-black block text-sm text-gray-700">
                                Senha :
                            </label>
                            <input
                            id="senha"
                            name="senha"
                            type="password"
                            value={senha}
                            required
                            onChange={(e) => setSenha(e.target.value)}
                            className="roboto-medium mt-1 w-full rounded border p-2"
                            placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label 
                            htmlFor="remember-me" 
                            className="ml-2 block text-sm text-gray-900">
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="roboto-medium w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-500 cursor-pointer"
                        >
                            Cadastrar
                        </button>
                    </div>

                    <div>
                        <p className="roboto-medium text-center mt-6">Já tem uma conta? <button
                            onClick={() => navigate("/login")}
                            className="roboto-medium text-indigo-600 hover:text-indigo-500">Faça login.</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
