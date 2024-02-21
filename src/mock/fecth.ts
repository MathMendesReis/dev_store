import data from '@/mock/data.json'
export interface produto {
  id: number
  nome: string
  preco: number
  url_img: string
}

interface ResponseFecth {
  produtos: produto[]
}
export async function GetAllProds(): Promise<ResponseFecth> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return data
}
