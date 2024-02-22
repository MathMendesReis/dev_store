import data from '@/mock/data.json'
export interface produto {
  id: number
  nome: string
  preco: number
  url_img: string
  imagens: string[]
}

export async function searchProducts(query: string): Promise<produto[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return data.produtos.filter(p =>
    p.nome.toLowerCase().includes(query.toLowerCase()),
  )
}
