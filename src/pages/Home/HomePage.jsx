import './HomePage.css'
import Footer from "../../components/Footer/Footer"
import ItemsList from "../../components/ItemsList/ItemsList"
import NavBar from "../../components/NavBar/NavBar"
import Carousel from '../../components/Carousel/Carousel'

const HomePage = () => {

    return (
        <>
                <NavBar />
                <h1 >Deal of the Day </h1>
                <Carousel />
                <ItemsList />
                <Footer />
        </>

    )
}


export default HomePage
