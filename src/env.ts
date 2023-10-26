import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url()
})

const parsEnv = envSchema.safeParse(process.env)

if (!parsEnv.success) {
  console.error(
    'Invalid enviroment variables',
    parsEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid enviroment variables')
}

export const env = parsEnv.data