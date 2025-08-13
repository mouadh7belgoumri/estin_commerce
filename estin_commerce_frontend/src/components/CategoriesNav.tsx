import { Link } from 'react-router'

interface Category {
    name: string
    href: string
    count?: number
}

interface CategoriesNavProps {
    selectedCategory?: string
    onCategoryChange?: (category: string) => void
    className?: string
}

const CategoriesNav = ({ 
    selectedCategory = 'all', 
    onCategoryChange,
    className = '' 
}: CategoriesNavProps) => {
    const categories: Category[] = [
        { name: "All Products", href: "#all", count: 0 },
        { name: "Entertainment", href: "#entertainment", count: 0 },
        { name: "Studies", href: "#studies", count: 0 },
        { name: "Sports", href: "#sports", count: 0 }
    ]

    const handleCategoryClick = (categoryName: string) => {
        if (onCategoryChange) {
            onCategoryChange(categoryName.toLowerCase().replace(' products', '').replace(' ', ''))
        }
    }

    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Categories
            </h2>
            
            {/* Desktop Layout */}
            <ul className="hidden md:flex md:flex-col md:space-y-3">
                {categories.map((category, index) => {
                    const categoryKey = category.name.toLowerCase().replace(' products', '').replace(' ', '')
                    const isActive = selectedCategory === categoryKey || 
                                   (selectedCategory === 'all' && category.name === 'All Products')
                    
                    return (
                        <li key={index}>
                            {onCategoryChange ? (
                                <button
                                    onClick={() => handleCategoryClick(category.name)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-black text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                                >
                                    {category.name}
                                    {category.count !== undefined && (
                                        <span className={`ml-2 text-sm ${
                                            isActive ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            ({category.count})
                                        </span>
                                    )}
                                </button>
                            ) : (
                                <Link
                                    to={category.href}
                                    className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-black text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                                >
                                    {category.name}
                                    {category.count !== undefined && (
                                        <span className={`ml-2 text-sm ${
                                            isActive ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                            ({category.count})
                                        </span>
                                    )}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>

            {/* Mobile Layout - Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto">
                <div className="flex space-x-3 pb-2">
                    {categories.map((category, index) => {
                        const categoryKey = category.name.toLowerCase().replace(' products', '').replace(' ', '')
                        const isActive = selectedCategory === categoryKey || 
                                       (selectedCategory === 'all' && category.name === 'All Products')
                        
                        return (
                            <div key={index} className="flex-shrink-0">
                                {onCategoryChange ? (
                                    <button
                                        onClick={() => handleCategoryClick(category.name)}
                                        className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                                            isActive
                                                ? 'bg-black text-white shadow-sm'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ) : (
                                    <Link
                                        to={category.href}
                                        className={`block px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                                            isActive
                                                ? 'bg-black text-white shadow-sm'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category.name}
                                    </Link>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoriesNav
