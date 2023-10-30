import data from '@/app/api/products/data.json'
export async function GET() {
  await new Promise((reslve) => {
    setTimeout(() => {
      console.log("this is the first message");
    }, 10000);
  })
  const featuredProducts = data.products.filter(prod => prod.featured === true)
  return Response.json({ products: featuredProducts })
}