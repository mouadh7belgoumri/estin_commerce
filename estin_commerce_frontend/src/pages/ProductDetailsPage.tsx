// import Card from './components/Card'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetails from "../components/ProductDetails"
// Example of how to use the optimized Card component
const CardExample = () => {
    

    return (
        <div>
            <Header/>
            <main className="flex justify-center">
                <ProductDetails/>
            </main>
            <Footer/>
        </div>
    )
}

export default CardExample
