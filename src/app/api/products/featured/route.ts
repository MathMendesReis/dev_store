import data from '@/app/api/products/data.json'
export async function GET() {
  const featuredProducts = data.products.filter(prod => prod.featured === true)
  return Response.json({ products: featuredProducts })
}