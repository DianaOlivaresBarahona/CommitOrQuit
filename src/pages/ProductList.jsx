import { useEffect, useState } from 'react'
import { getProducts } from '../services/api'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produkter</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-500">{product.price} SEK</p>
            <Link to={`/product/${product.id}`} className="text-blue-500">
              Se detaljer
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
