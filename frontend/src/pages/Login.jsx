import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(event) {
        event.preventDefault();

        if (!email || !senha) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const data = {
                email,
                senha,
            }

            const response = await loginUser(data)
            localStorage.setItem("token", response.access_token);
            navigate("/dashboard");
        } catch (error) {
            if(error.response){
                setError(error.response.data.detail)
            }else{
                setError("Erro ao conectar com o servidor")
            }
            console.error(error);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">

                <div>
                    <h2 className="roboto-black mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Fazer Login
                    </h2>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">

                    <div>
                        <label 
                        htmlFor="email"
                        className="roboto-medium">
                            Email : 
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            className="roboto-medium mt-1 w-full rounded border p-2"
                            required
                        />
                    </div>

                    <div>
                        <label 
                        htmlFor="senha"
                        className="roboto-medium">
                            Senha : 
                        </label>

                        <input
                            id="senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="mt-1 w-full rounded border p-2"      
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="roboto-medium w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-500 cursor-pointer"
                    >
                        Fazer Login
                    </button>

                </form>

                <div>
                    <p className="roboto-regular text-center mt-6">Não tem uma conta? <button 
                    onClick={() => navigate("/register")}
                    className="roboto-medium text-indigo-600 hover:text-indigo-500">Crie uma agora.</button></p>
                </div>
            </div>
        </div>
    );
}

export default Login;