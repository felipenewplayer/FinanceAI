import { useNavigate } from "react-router-dom"

function TelaInicial(){
    const navigate = useNavigate()
    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
    
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
                <h1 className="roboto-bold text-4xl mb-6">FinanceAI</h1>
                <p className="roboto-regular text-lg mb-6">
                    Dashboard de ações 
                    brasileiro com IA integrada. Acompanhe suas ações favoritas 
                    em tempo real e faça perguntas em linguagem natural sobre o mercado financeiro.</p>

                    <div className="flex gap-4">
                        <button 
                            className="roboto-medium w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-500 cursor-pointer"
                            onClick={() => {navigate("/login")}}>Login
                        </button>
                        <button 
                            className="roboto-medium w-full rounded bg-indigo-600 py-2 text-white hover:bg-indigo-500 cursor-pointer"
                            onClick={() => {navigate("/register")}}>Register
                        </button>
                    </div>
                    
            </div>
        </div>
    )
}

export default TelaInicial

