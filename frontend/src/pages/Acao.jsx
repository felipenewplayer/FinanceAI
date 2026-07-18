import { useEffect, useState } from "react";
import { buscarAcao } from "../services/acaoService";

function Acao() {

    const [acao, setAcao] = useState(null);


    useEffect(() => {

        async function carregarAcao(){

            const dados = await buscarAcao("PETR4");

            setAcao(dados);
        }

        carregarAcao();

    }, []);


    return (
        <div>

            <h1>Minha Ação</h1>

            {
                acao && (
                    <div>
                        <h2>{acao.ticker}</h2>

                        <p>
                            Empresa: {acao.nome}
                        </p>

                        <p>
                            Preço: R$ {acao.preco}
                        </p>

                        <p>
                            Variação: {acao.variacao}%
                        </p>
                    </div>
                )
            }

        </div>
    )
}

export default Acao;