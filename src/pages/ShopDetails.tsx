import { useParams } from 'react-router-dom'
import { useShopDetails } from '../hooks/useShopDetails'
import ProductCard from '../components/ProductCard'

export default function ShopDetails() {
  const { shopId } = useParams<{ shopId: string }>()
  const { shop, products, loading } = useShopDetails(shopId!)

  if (loading) {
    return <div className="text-center py-12">Loading shop details...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center gap-6">
          <img
            src={shop?.logo}
            alt={shop?.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{shop?.name}</h1>
            <p className="text-gray-600 mt-2">{shop?.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {shop?.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}