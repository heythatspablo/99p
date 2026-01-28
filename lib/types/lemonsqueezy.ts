// Lemon Squeezy Product Types
export interface LemonSqueezyProduct {
  id: string
  name: string
  description: string
  price: number
  variantId: string
}

// Checkout Session Types
export interface CheckoutSessionRequest {
  variantId: string
  customerEmail: string
  customData?: {
    userId?: string
    sessionType?: string
    bookingDate?: string
    [key: string]: any
  }
}

export interface CheckoutSessionResponse {
  checkoutUrl: string
  checkoutId: string
}

// Webhook Event Types
export interface LemonSqueezyWebhookEvent {
  meta: {
    event_name: string
    custom_data?: Record<string, any>
  }
  data: {
    id: string
    type: string
    attributes: {
      store_id: number
      customer_id: number
      order_id: number
      order_number: number
      product_id: number
      variant_id: number
      product_name: string
      variant_name: string
      user_name: string
      user_email: string
      status: string
      status_formatted: string
      refunded: boolean
      refunded_at: string | null
      subtotal: number
      discount_total: number
      tax: number
      total: number
      subtotal_usd: number
      discount_total_usd: number
      tax_usd: number
      total_usd: number
      tax_name: string
      tax_rate: string
      currency: string
      currency_rate: string
      first_order_item: {
        id: number
        order_id: number
        product_id: number
        variant_id: number
        product_name: string
        variant_name: string
        price: number
        created_at: string
        updated_at: string
      }
      urls: {
        receipt: string
      }
      created_at: string
      updated_at: string
    }
  }
}

// Product Configuration
export const PRODUCTS = {
  CLARITY_SESSION: {
    id: 'clarity-session',
    name: 'Clarity Session',
    description: '90-minute strategic consultation to clarify your product vision',
    price: 275,
    variantId: process.env.LEMONSQUEEZY_CLARITY_SESSION_VARIANT_ID || '',
  },
  ONBOARDING_SYSTEM: {
    id: 'onboarding-system',
    name: 'Client Onboarding System',
    description: 'Complete onboarding system with templates and automation',
    price: 147,
    variantId: process.env.LEMONSQUEEZY_ONBOARDING_VARIANT_ID || '',
  },
} as const

export type ProductId = keyof typeof PRODUCTS
