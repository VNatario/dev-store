import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import { zinc } from 'tailwindcss/colors'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 15, //15 minutos
    },
  })
  const product = await response.json()
  return product
}

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)

  const productimageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productimageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
