import Card from './components/Card'

// Example of how to use the optimized Card component
const CardExample = () => {
    const handleAddToCart = (productId: string | number) => {
        console.log(`Added product ${productId} to cart`)
        // Here you would typically dispatch an action to your state management
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Card Component Examples</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Basic Card */}
                <Card 
                    id="1"
                    name="Basic Product"
                    price={500}
                    currency="DZD"
                    onAddToCart={handleAddToCart}
                />
                
                {/* Card with Image */}
                <Card 
                    id="2"
                    name="Product with Image"
                    price={750}
                    currency="DZD"
                    image="https://via.placeholder.com/300x300"
                    onAddToCart={handleAddToCart}
                />
                
                {/* Sale Card */}
                <Card 
                    id="3"
                    name="Sale Product with Very Long Name That Will Be Truncated"
                    price={300}
                    originalPrice={500}
                    currency="DZD"
                    isOnSale={true}
                    image="https://via.placeholder.com/300x300"
                    onAddToCart={handleAddToCart}
                />
                
                {/* Card with Custom Class */}
                <Card 
                    id="4"
                    name="Custom Styled Product"
                    price={1200}
                    currency="DZD"
                    className="transform hover:rotate-1"
                    onAddToCart={handleAddToCart}
                />
            </div>
        </div>
    )
}

export default CardExample
