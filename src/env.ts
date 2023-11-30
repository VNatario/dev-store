import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

//Verifica se as variáveis de ambiente estão corretas de acordo com o schema
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    //Exibe os erros de uma forma mais amigável
    parsedEnv.error.flatten().fieldErrors
  )
  //Encerra o processo
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
