import api from "./api"

export async function buscarAcao(ticker) {
    const response = await api.get(`acoes/${ticker}`)
    return response.data;
}