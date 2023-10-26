import {env} from '@/env'
export default function api(path:string, init: RequestInit):Promise<Response> {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL
  const url = new URL(path, baseUrl)
  return fetch(url,init)
}