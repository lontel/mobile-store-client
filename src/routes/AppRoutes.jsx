import { Routes, Route } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import HomePage from '../pages/Home/HomePage'

const AppRoutes = () => {

    return (

       <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/account/sign-up' element={<RegisterForm />} />

       </Routes>

    )
}
export default AppRoutes