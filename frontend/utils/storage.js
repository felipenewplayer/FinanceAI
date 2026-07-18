export function salvarToken(token) {
    localStorage.setItem("token", token);

}

export function obterToken(){
    const token = localStorage.getItem("token")
    return token
}