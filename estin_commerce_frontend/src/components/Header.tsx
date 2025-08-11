import { FaCircleUser } from "react-icons/fa6"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router"
const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-between mt-8 mx-10 text-xl ">
                <h1><Link to={'/'}>logo </Link></h1>
                <div className="flex gap-30">
                    <ul className="flex flex-row gap-15">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li><Link to={'/suggest'}>Suggest</Link></li>
                        <li><Link to={'/about'}>About us</Link></li>
                    </ul>
                    <div className="flex gap-10">
                        <FaCartShopping className="text-3xl text-[]"/>
                        <FaCircleUser className="text-3xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
