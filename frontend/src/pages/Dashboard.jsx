import { useState } from "react";
import { buscarAcao } from "../services/acaoService";

function Dashboard(){

    const [ticker, setTicker] = useState("");
    const [acao, setAcao] = useState(null);


    async function handleBuscar(){

        const dados = await buscarAcao(ticker);

        setAcao(dados);
    }


    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
                <h1  className="roboto-bold text-4xl mb-6">
                     FinanceAI Dashboard
                </h1>
                <p className="roboto-regular py-2">
                    Acompanhe suas ações favoritas em tempo real e faça perguntas em linguagem natural sobre o mercado financeiro.
                </p>
                <label className="roboto-medium py-2">Busca de ações</label>
              <input
                value={ticker}
                onChange={(e)=>setTicker(e.target.value)}
                placeholder="Digite PETR4"
                className="border rounded-md px-3 py-2 w-[300px] mb-4"
            />

            <button onClick={handleBuscar}
            className="bg-indigo-600 text-white  px-4 py-2 rounded-lg cursor-pointer font-bold hover:opacity-80 transition">
                Buscar
            </button>


            {
                acao && (

                    <div>

                        <h2>
                            {acao.ticker}
                        </h2>


                        <p>
                            {acao.nome}
                        </p>


                        <p>
                            R$ {acao.preco}
                        </p>


                        <p>
                            {acao.variacao}%
                        </p>


                        <button className="bg-indigo-600 text-white  px-4 py-2 rounded-lg cursor-pointer font-bold hover:opacity-80 transition">
                            Analisar com IA
                        </button>


                    </div>

                )
            }


            </div>
        </div>
    )
}


export default Dashboard;