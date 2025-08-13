import { FaCartPlus } from "react-icons/fa6"

interface CardProps {
    id?: string | number
    name?: string
    price?: number
    currency?: string
    image?: string
    isOnSale?: boolean
    originalPrice?: number
    onAddToCart?: (productId: string | number) => void
    className?: string
}

const Card = ({ 
    id = "1",
    name = "Product name", 
    price = 500, 
    currency = "DZD",
    image,
    isOnSale = false,
    originalPrice,
    onAddToCart,
    className = ""
}: CardProps) => {
    
    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(id)
        }
    }

    return (
        <div className={`group ${className}`}>
            <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="relative w-full h-64 sm:h-72 bg-gray-100 rounded-t-xl overflow-hidden">
                    {image ? (
                        <img 
                            src={image} 
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-medium">No Image</span>
                        </div>
                    )}
                    
                    {/* Sale Badge */}
                    {isOnSale && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            SALE
                        </div>
                    )}
                </div>
                
                {/* Product Info */}
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                        {name}
                    </h3>
                    
                    {/* Price Section */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">
                                {price}{currency}
                            </span>
                            {isOnSale && originalPrice && (
                                <span className="text-sm sm:text-base text-gray-500 line-through">
                                    {originalPrice}{currency}
                                </span>
                            )}
                        </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                        onClick={handleAddToCart}
                        className="w-full bg-black text-white font-semibold rounded-full py-3 px-4 sm:py-3 sm:px-6 
                                 flex items-center justify-center gap-2 
                                 hover:bg-gray-800 active:bg-gray-900 
                                 transform hover:scale-[1.02] active:scale-[0.98]
                                 transition-all duration-200 
                                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        aria-label={`Add ${name} to cart`}
                    >
                        <FaCartPlus className="text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
