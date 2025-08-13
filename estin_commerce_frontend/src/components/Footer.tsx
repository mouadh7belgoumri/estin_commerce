import { Link } from "react-router"
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa6"
import logo from "../assets/IMG_20250806_151038_101.jpg"

const Footer = () => {
  return (
    <footer className="color-footer pb-4 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 ">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="logo" 
              className="w-32 sm:w-40 lg:w-48 xl:w-56 h-auto object-contain rounded-lg" 
            />
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-24 text-white text-center sm:text-left flex-1">
            {/* Links Section */}
            <div className="flex flex-col gap-4 lg:gap-6 xl:ml-80 lg:ml-44">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 lg:mb-4">
                Links
              </h2>
              <ul className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl xl:text-2xl font-light">
                <li>
                  <Link 
                    to={'/'} 
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    Home page
                  </Link>
                </li>
                <li>
                  <Link 
                    to={'/shop'} 
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link 
                    to={'/about'} 
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Social Media Section */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 lg:mb-4">
                We're also on
              </h2>
              <ul className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl xl:text-2xl font-light">
                <li>
                  <Link 
                    to={'https://www.instagram.com/belgoumrimouadh/'} 
                    target="_blank"
                    className="flex items-center justify-center sm:justify-start gap-2 hover:text-gray-300 transition-colors duration-200"
                  >
                    <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link 
                    to={'https://www.facebook.com/mouadh.belgoumri.1'}
                    target="_blank"
                    className="flex items-center justify-center sm:justify-start gap-2 hover:text-gray-300 transition-colors duration-200"
                  >
                    <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link 
                    to={'https://github.com/mouadh7belgoumri/'}
                    target="_blank"
                    className="flex items-center justify-center sm:justify-start gap-2 hover:text-gray-300 transition-colors duration-200"
                  >
                    <FaGithub className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" />
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-600">
          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-2xl text-center font-light">
            Copyright &#169; {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
  

export default Footer
