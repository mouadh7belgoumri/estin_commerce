import { useState, type FormEvent } from 'react';
import { FaShoppingCart, FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import {toast, ToastContainer} from 'react-toastify'
import racket from '../assets/without_bg/racket1.png';

// TypeScript interfaces
interface Color {
  name: string;
  value: "black" | "red" | "green";
  bgClass: string;
}

interface ProductDetailsProps {
  productId?: string | number;
  onAddToCart?: (productId: string | number, quantity: number, color: string) => void;
  className?: string;
}

const ProductDetails = ({ 
  productId = 1,
  onAddToCart,
  className = ""
}: ProductDetailsProps) => {
  // State management
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<"black" | "red" | "green">("black");
  const [isLoading, setIsLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Product data
  const product = {
    name: "Premium Ping Pong Racket",
    description: "Experience precision and power with our premium ping pong racket. Designed with a comfortable grip and high-quality rubber for superior spin, speed, and control, this racket is perfect for both casual games and competitive matches. Lightweight yet durable, it's your perfect partner for every rally.",
    price: 500,
    currency: "DZD",
    image: racket,
    inStock: true
  };

  const colors: Color[] = [
    { name: "Black", value: "black", bgClass: "bg-black" },
    { name: "Red", value: "red", bgClass: "bg-red-600" },
    { name: "Green", value: "green", bgClass: "bg-green-700" }
  ];

  // Handlers
  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleColorSelect = (colorValue: "black" | "red" | "green") => {
    setSelectedColor(colorValue);
  };

  const handleAddToCart = async (e: FormEvent) => {
    e.preventDefault();
    if (!product.inStock) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onAddToCart) {
        onAddToCart(productId, quantity, selectedColor);
      }
      
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Product Image Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-start space-y-8">
            
            {/* Product Title & Price */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600">
                  {product.price} {product.currency}
                </span>
                {product.inStock && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 w-fit">
                    <FaCheck className="w-3 h-3 mr-1" />
                    In Stock
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {product.description}
              </p>
            </div>

            {/* Product Form */}
            <form onSubmit={handleAddToCart} className="space-y-8">
              
              {/* Color Selection */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                  Color: <span className="font-normal text-gray-600 capitalize">{selectedColor}</span>
                </h3>
                <div className="flex gap-4" role="radiogroup" aria-label="Product color options">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => handleColorSelect(color.value)}
                      className={`
                        relative w-12 h-12 sm:w-14 sm:h-14 rounded-full ${color.bgClass} 
                        transition-all duration-200 hover:scale-110 focus:outline-none 
                        focus:ring-4 focus:ring-offset-2 focus:ring-gray-400
                        ${selectedColor === color.value ? 'ring-4 ring-offset-2 ring-gray-600' : ''}
                      `}
                      aria-label={`Select ${color.name} color`}
                      role="radio"
                      aria-checked={selectedColor === color.value}
                    >
                      {selectedColor === color.value && (
                        <FaCheck className="absolute inset-0 m-auto text-white text-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-full bg-white">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-full transition-colors duration-200"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 text-lg font-semibold text-gray-900 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-100 rounded-r-full transition-colors duration-200"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!product.inStock || isLoading}
                  className={`
                    w-full sm:w-auto flex items-center justify-center gap-3 
                    px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-200
                    focus:outline-none focus:ring-4 focus:ring-offset-2
                    ${addedToCart 
                      ? 'bg-green-600 text-white focus:ring-green-500' 
                      : product.inStock
                        ? 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500 active:scale-95'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Adding...</span>
                    </>
                  ) : addedToCart ? (
                    <>
                      <FaCheck className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <FaShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
