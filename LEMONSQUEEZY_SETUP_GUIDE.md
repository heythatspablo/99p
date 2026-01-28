# Lemon Squeezy Integration - Setup Guide

## Overview
This guide covers the complete Lemon Squeezy payment integration for your portfolio services.

---

## Products Configured

1. **Clarity Session** - $275
   - 90-minute strategic consultation
   - Variant ID: Set in environment variables

2. **Client Onboarding System** - $147
   - Complete onboarding system with templates
   - Variant ID: Set in environment variables

---

## Environment Variables Setup

### Local Development (.env.local)
Already configured with placeholders. Update these values:

```bash
# Lemon Squeezy Configuration
LEMONSQUEEZY_API_KEY=your_api_key_here
LEMONSQUEEZY_STORE_ID=your_store_id_here
LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_secret_here

# Product Variant IDs
LEMONSQUEEZY_CLARITY_SESSION_VARIANT_ID=your_clarity_variant_id_here
LEMONSQUEEZY_ONBOARDING_VARIANT_ID=your_onboarding_variant_id_here
```

### Production (Fly.io)
Set secrets using Fly CLI:

```bash
fly secrets set \
  LEMONSQUEEZY_API_KEY=your_api_key \
  LEMONSQUEEZY_STORE_ID=your_store_id \
  LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_secret \
  LEMONSQUEEZY_CLARITY_SESSION_VARIANT_ID=your_clarity_variant_id \
  LEMONSQUEEZY_ONBOARDING_VARIANT_ID=your_onboarding_variant_id
```

---

## Getting Your Credentials

### 1. API Key
1. Go to Lemon Squeezy Dashboard
2. Navigate to Settings → API
3. Create new API key
4. Copy and save securely

### 2. Store ID
1. In Lemon Squeezy Dashboard
2. Go to Settings → Stores
3. Your Store ID is in the URL or store settings

### 3. Webhook Secret
1. Go to Settings → Webhooks
2. Create new webhook endpoint: `https://99pablos.fly.dev/api/webhooks/lemonsqueezy`
3. Select events to listen for:
   - `order_created`
   - `order_refunded`
   - `subscription_created` (if using subscriptions)
   - `subscription_updated`
   - `subscription_cancelled`
4. Copy the signing secret

### 4. Product Variant IDs
1. Go to Products in dashboard
2. Click on "Clarity Session"
3. Copy the Variant ID from the URL or variant settings
4. Repeat for "Client Onboarding System"

---

## Implementation Files

### API Routes
- `/app/api/checkout/route.ts` - Creates checkout sessions
- `/app/api/webhooks/lemonsqueezy/route.ts` - Handles payment webhooks

### Components
- `/components/purchase/PurchaseButton.tsx` - Reusable purchase button
- `/components/purchase/ProductCard.tsx` - Product display card

### Types & Config
- `/lib/types/lemonsqueezy.ts` - TypeScript types and product config
- `/lib/lemonsqueezy.ts` - Lemon Squeezy client setup

---

## Usage Examples

### Basic Purchase Button

```tsx
import { PurchaseButton } from '@/components/purchase/PurchaseButton'
import { PRODUCTS } from '@/lib/types/lemonsqueezy'

export function MyPage() {
  return (
    <PurchaseButton
      variantId={PRODUCTS.CLARITY_SESSION.variantId}
      productName={PRODUCTS.CLARITY_SESSION.name}
      price={PRODUCTS.CLARITY_SESSION.price}
      customerEmail="user@example.com"
      customData={{
        booking_date: '2026-02-15',
        session_type: 'clarity'
      }}
    >
      Book Clarity Session
    </PurchaseButton>
  )
}
```

### Product Card with Email Input

```tsx
import { ProductCard } from '@/components/purchase/ProductCard'

export function ServicesPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <ProductCard productId="CLARITY_SESSION" />
      <ProductCard productId="ONBOARDING_SYSTEM" />
    </div>
  )
}
```

---

## Payment Flow

1. **User clicks purchase button**
   - Email validation
   - Loading state shown

2. **Client sends request to `/api/checkout`**
   - Includes: variantId, customerEmail, customData
   - Server validates request

3. **Server creates checkout session**
   - Calls Lemon Squeezy API
   - Returns checkout URL

4. **User redirected to Lemon Squeezy**
   - Hosted checkout page
   - Secure payment processing

5. **Payment completed**
   - Lemon Squeezy sends webhook to `/api/webhooks/lemonsqueezy`
   - Server verifies signature
   - Order fulfillment triggered

6. **User redirected back**
   - Success/failure page
   - Order confirmation

---

## Webhook Event Handling

The webhook handler currently logs events. Implement fulfillment logic in:

### Order Created (`order_created`)
```typescript
async function handleOrderCreated(event: LemonSqueezyWebhookEvent) {
  const order = event.data.attributes
  const customData = event.meta.custom_data

  // TODO: Implement fulfillment
  // - Send confirmation email
  // - Grant product access
  // - Create calendar booking (Clarity Session)
  // - Send onboarding materials (Onboarding System)
  // - Update database
}
```

### Order Refunded (`order_refunded`)
```typescript
async function handleOrderRefunded(event: LemonSqueezyWebhookEvent) {
  // TODO: Revoke access, send refund email
}
```

---

## Testing

### Local Testing
1. Start dev server: `npm run dev`
2. Use test mode in Lemon Squeezy
3. Test card: `4242 4242 4242 4242`
4. Use ngrok for webhook testing:
   ```bash
   ngrok http 3000
   # Update webhook URL to: https://your-ngrok-url.ngrok.io/api/webhooks/lemonsqueezy
   ```

### Production Testing
1. Deploy to Fly.io: `fly deploy`
2. Configure webhook: `https://99pablos.fly.dev/api/webhooks/lemonsqueezy`
3. Test with real/test purchases
4. Monitor logs: `fly logs`

---

## Security Checklist

- [x] API key stored in environment variables
- [x] Webhook signature verification implemented
- [x] HTTPS enforced on production
- [x] Email validation on client
- [x] Server-side request validation
- [ ] Rate limiting (consider adding)
- [ ] CORS configuration (if needed)

---

## Troubleshooting

### Checkout creation fails
- Verify API key is correct
- Check store ID matches your account
- Ensure variant IDs are valid
- Review API logs for error details

### Webhook not receiving events
- Verify webhook URL is correct
- Check webhook secret matches
- Ensure HTTPS is enabled
- Review Lemon Squeezy webhook logs

### Signature verification fails
- Confirm webhook secret is correct
- Check raw body is being used (not parsed)
- Verify timing-safe comparison

### Environment variables not loading
- Restart dev server after .env.local changes
- For Fly.io: `fly secrets list` to verify
- Check variable names match exactly

---

## Next Steps

1. **Get Credentials**
   - Obtain API key, store ID, webhook secret
   - Get variant IDs for both products

2. **Update Environment Variables**
   - Local: Update `.env.local`
   - Production: Set Fly.io secrets

3. **Configure Webhook**
   - Add webhook URL in Lemon Squeezy dashboard
   - Test webhook delivery

4. **Implement Fulfillment**
   - Add order fulfillment logic in webhook handler
   - Send confirmation emails
   - Grant product access

5. **Add to Service Pages**
   - Integrate ProductCard or PurchaseButton components
   - Test complete purchase flow

6. **Deploy & Test**
   - Deploy to production
   - Complete test purchase
   - Verify webhook processing

---

## Support Resources

- **Lemon Squeezy Docs:** https://docs.lemonsqueezy.com
- **API Reference:** https://docs.lemonsqueezy.com/api
- **Webhook Guide:** https://docs.lemonsqueezy.com/guides/developer-guide/webhooks
- **Dashboard:** https://app.lemonsqueezy.com
