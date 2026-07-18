import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            });

            if (!response.ok) {
                throw new Error("Email ou senha inválidos.");
            }

            const data = await response.json();
            localStorage.setItem("token", data.access_token);
            navigate("/dashboard");

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">

                <h2 className="mb-8 text-center text-3xl font-bold">
                    Fazer Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-6">

                    <div>
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full rounded border p-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha">
                            Senha
                        </label>

                        <input
                            id="senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="mt-1 w-full rounded border p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-500"
                    >
                        Fazer Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;