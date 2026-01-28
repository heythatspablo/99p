import { NextRequest, NextResponse } from 'next/server'
import { createCheckout } from '@/lib/lemonsqueezy'
import type { CheckoutSessionRequest, CheckoutSessionResponse } from '@/lib/types/lemonsqueezy'

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutSessionRequest = await request.json()
    const { variantId, customerEmail, customData } = body

    if (!variantId || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: variantId and customerEmail' },
        { status: 400 }
      )
    }

    const storeId = process.env.LEMONSQUEEZY_STORE_ID
    if (!storeId) {
      return NextResponse.json(
        { error: 'Lemon Squeezy store not configured' },
        { status: 500 }
      )
    }

    const checkout = await createCheckout(storeId, {
      checkoutData: {
        email: customerEmail,
        custom: customData || {},
      },
      productOptions: {
        enabledVariants: [variantId],
      },
      checkoutOptions: {
        embed: false,
        buttonColor: '#2383E2',
      },
    })

    if (!checkout.data) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    const response: CheckoutSessionResponse = {
      checkoutUrl: checkout.data.attributes.url,
      checkoutId: checkout.data.id,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Checkout creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
