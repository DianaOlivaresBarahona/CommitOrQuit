import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id)
      setProduct(data)
    }
    fetchData()
  }, [id])

  if (!product) return <p>Laddar...</p>

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={product.image} alt={product.title} className="h-60 mx-auto md:h-80" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold mt-2">{product.price} SEK</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
