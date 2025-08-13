import { useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "entertainment" | "sports" | "studies">('all')
  
  // Sample products data - replace with your actual data
  const products = [
    { id: 1, name: "Wireless Headphones", price: 5999, currency: "DZD", image: "", category: "entertainment", },
    { id: 2, name: "Gaming Laptop", price: 89999, currency: "DZD", image: "", category: "studies", isOnSale: true, originalPrice: 99999 },
    { id: 3, name: "Running Shoes", price: 8999, currency: "DZD", image: "", category: "sports" },
    { id: 4, name: "Bluetooth Speaker", price: 3999, currency: "DZD", image: "", category: "entertainment" },
    { id: 5, name: "Study Desk", price: 25999, currency: "DZD", image: "", category: "studies" },
    { id: 6, name: "Yoga Mat", price: 2999, currency: "DZD", image: "", category: "sports" },
    { id: 7, name: "Tablet", price: 39999, currency: "DZD", image: "", category: "studies" },
    { id: 8, name: "Basketball", price: 1999, currency: "DZD", image: "", category: "sports" },
    { id: 9, name: "Smart Watch", price: 12999, currency: "DZD", image: "", category: "entertainment" },
  ]

  const handleAddToCart = (productId: string | number) => {
    console.log(`Added product ${productId} to cart`)
    
  }

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Shop
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing products for all your needs
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              {/* Categories Filter */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'all'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('entertainment')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'entertainment'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Entertainment ({products.filter(p => p.category === 'entertainment').length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('studies')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'studies'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Studies ({products.filter(p => p.category === 'studies').length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('sports')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'sports'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Sports ({products.filter(p => p.category === 'sports').length})
                  </button>
                </div>
              </div>

              {/* Filter Summary */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium text-gray-900 mb-2">Active Filters</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-black text-white">
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="ml-2 hover:text-gray-300"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedCategory === 'all' && (
                    <span className="text-gray-500 text-sm">No filters applied</span>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Products Grid */}
          <div className="flex-1">
            {/* Products Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCategory === 'all' 
                    ? 'All Products' 
                    : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
                  }
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {/* Sort/Filter Controls */}
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    currency={product.currency}
                    image={product.image}
                    isOnSale={product.isOnSale}
                    originalPrice={product.originalPrice}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🛍️</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or browse all categories.</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Shop

