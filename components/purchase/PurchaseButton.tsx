'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import type { CheckoutSessionRequest } from '@/lib/types/lemonsqueezy'

interface PurchaseButtonProps {
  variantId: string
  productName: string
  price: number
  customerEmail?: string
  customData?: Record<string, any>
  className?: string
  children?: React.ReactNode
}

export function PurchaseButton({
  variantId,
  productName,
  price,
  customerEmail,
  customData,
  className,
  children,
}: PurchaseButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = async () => {
    if (!customerEmail) {
      toast.error('Please provide your email address')
      return
    }

    setIsLoading(true)

    try {
      const requestBody: CheckoutSessionRequest = {
        variantId,
        customerEmail,
        customData: {
          ...customData,
          product_name: productName,
        },
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create checkout')
      }

      const { checkoutUrl } = await response.json()

      // Redirect to Lemon Squeezy checkout
      window.location.href = checkoutUrl
    } catch (error) {
      console.error('Purchase error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to start checkout')
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePurchase}
      disabled={isLoading}
      className={className}
      size="lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || `Purchase ${productName} - $${price}`
      )}
    </Button>
  )
}
