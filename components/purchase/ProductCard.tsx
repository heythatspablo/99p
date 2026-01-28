'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PurchaseButton } from '@/components/purchase/PurchaseButton'
import { PRODUCTS } from '@/lib/types/lemonsqueezy'

interface ProductCardProps {
  productId: 'CLARITY_SESSION' | 'ONBOARDING_SYSTEM'
  showEmailInput?: boolean
}

export function ProductCard({ productId, showEmailInput = true }: ProductCardProps) {
  const [email, setEmail] = useState('')
  const product = PRODUCTS[productId]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold">${product.price}</div>
        
        {showEmailInput && (
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <PurchaseButton
          variantId={product.variantId}
          productName={product.name}
          price={product.price}
          customerEmail={email}
          customData={{
            product_id: product.id,
          }}
          className="w-full"
        >
          Purchase Now - ${product.price}
        </PurchaseButton>
      </CardFooter>
    </Card>
  )
}
