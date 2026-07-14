function Login() {
    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Fazer Login
                    </h2>
                </div>

                <form className="mt-8 space-y-6" >
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Endereço de email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="seu-email@exemplo.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex gap-1.5 center">
                            <h3>Lembre-me</h3>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Fazer Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login