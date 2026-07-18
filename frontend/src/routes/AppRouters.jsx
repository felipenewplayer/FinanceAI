import {Route, Routes} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import TelaInicial from '../pages/TelaInicial'
import ProtectedRoute from './ProtectedRoute'

function AppRouters(){
    return(
    <Routes>
        <Route path='' element={<TelaInicial/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        }/>
    </Routes>
    )
}

export default AppRouters