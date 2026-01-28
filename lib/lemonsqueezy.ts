import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js'

const apiKey = process.env.LEMONSQUEEZY_API_KEY

if (!apiKey) {
  throw new Error('LEMONSQUEEZY_API_KEY is not set')
}

lemonSqueezySetup({
  apiKey,
  onError: (error) => {
    console.error('Lemon Squeezy API Error:', error)
    throw error
  },
})

export { createCheckout, getProduct, listProducts } from '@lemonsqueezy/lemonsqueezy.js'
