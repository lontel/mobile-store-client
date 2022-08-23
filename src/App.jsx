import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'

function App () {
  return (
    <>
      <AppRoutes />
      <UserMessage />
    </>
  )
}

export default App
