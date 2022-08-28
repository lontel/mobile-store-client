import { Routes, Route } from 'react-router-dom'
import ItemForm from '../components/ItemForm/ItemForm'
import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import HomePage from '../pages/Home/HomePage'


const AppRoutes = () => {

    return (

       <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/account/sign-up' element={<RegisterForm />} />
            <Route path='/account/login' element={<LoginForm />} />
            <Route path='/item/save' element={<ItemForm />} />

       </Routes>

    )
}
export default AppRoutes