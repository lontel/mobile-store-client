import './HomePage.css'
import Footer from "../../components/Footer/Footer"
import ItemsList from "../../components/ItemsList/ItemsList"
import NavBar from "../../components/NavBar/NavBar"
import Carousel from '../../components/CarouselCard/CarouselCard'
import CarouselList from '../../components/CarouselList/CarouselList'

const HomePage = () => {

    return (
        <>
            <NavBar />
            <CarouselList />
            <ItemsList />
            <Footer />
        </>

    )
}


export default HomePage
