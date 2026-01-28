import { NextRequest, NextResponse } from 'next/server'
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

    const apiKey = process.env.LEMONSQUEEZY_API_KEY
    const storeId = process.env.LEMONSQUEEZY_STORE_ID

    if (!apiKey || !storeId) {
      return NextResponse.json(
        { error: 'Lemon Squeezy configuration missing' },
        { status: 500 }
      )
    }

    const checkoutPayload = {
      data: {
        type: 'checkouts',
        attributes: {
          checkout_data: {
            email: customerEmail,
            custom: customData || {},
          },
        },
        relationships: {
          store: {
            data: {
              type: 'stores',
              id: storeId,
            },
          },
          variant: {
            data: {
              type: 'variants',
              id: variantId,
            },
          },
        },
      },
    }

    const apiResponse = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(checkoutPayload),
    })

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json()
      console.error('Lemon Squeezy API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create checkout', details: errorData },
        { status: apiResponse.status }
      )
    }

    const data = await apiResponse.json()
    const checkoutUrl = data.data.attributes.url
    const checkoutId = data.data.id

    const response: CheckoutSessionResponse = {
      checkoutUrl,
      checkoutId,
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
