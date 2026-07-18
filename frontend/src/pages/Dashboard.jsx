import { useState} from "react"
import { useNavigate } from "react-router-dom"

function Dashboard(){
    const navigate = useNavigate()

    const [token, setToken] = useState("")

    function handleLogout(){
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return(
        <div className="h-screen">
            {/*Header*/} 
            <header className="bg-gray-200 p-3 flex justify-between items-center">
                <div className="flex justify-start"><h1 className="roboto-black text-2xl">FinanceAI</h1>
                </div>
                <nav>
                    <ul className="flex justify-end gap-10 px-8 items-center">
                        <li className="roboto-regular text-lg">
                            <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded cursor-pointer">Perfil</button>
                        </li>
                        <li className="roboto-regular text-lg">
                            <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200 cursor-pointer">Logout</button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/*Section*/}
            
            <section className="h-[90vh]">
                <div className="flex justify-center h-full items-center">
                    <div className="bg-slate-400 p-5 rounded-lg">
                        <h1 className="text-4xl">DashBoard</h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard