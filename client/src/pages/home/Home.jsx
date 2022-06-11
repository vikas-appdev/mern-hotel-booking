import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertylist/PropertyList"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse By Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties />
            </div>
        </div>
    )
}

export default Home