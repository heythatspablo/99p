import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get("x-signature");
    const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Webhook secret not configured");
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }

    const rawBody = await request.text();

    if (signature && !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventName = event.meta.event_name;

    console.log(`Received webhook: ${eventName}`);

    switch (eventName) {
      case "order_created":
        await handleOrderCreated(event.data);
        break;
      case "order_refunded":
        await handleOrderRefunded(event.data);
        break;
      case "subscription_created":
        await handleSubscriptionCreated(event.data);
        break;
      case "subscription_updated":
        await handleSubscriptionUpdated(event.data);
        break;
      case "subscription_cancelled":
        await handleSubscriptionCancelled(event.data);
        break;
      case "subscription_resumed":
        await handleSubscriptionResumed(event.data);
        break;
      case "subscription_expired":
        await handleSubscriptionExpired(event.data);
        break;
      case "license_key_created":
        await handleLicenseKeyCreated(event.data);
        break;
      default:
        console.log(`Unhandled event type: ${eventName}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

async function handleOrderCreated(order: any) {
  console.log("Order created:", {
    id: order.id,
    customer_id: order.attributes.customer_id,
    total: order.attributes.total,
    status: order.attributes.status,
  });
}

async function handleOrderRefunded(order: any) {
  console.log("Order refunded:", order.id);
}

async function handleSubscriptionCreated(subscription: any) {
  console.log("Subscription created:", subscription.id);
}

async function handleSubscriptionUpdated(subscription: any) {
  console.log("Subscription updated:", subscription.id);
}

async function handleSubscriptionCancelled(subscription: any) {
  console.log("Subscription cancelled:", subscription.id);
}

async function handleSubscriptionResumed(subscription: any) {
  console.log("Subscription resumed:", subscription.id);
}

async function handleSubscriptionExpired(subscription: any) {
  console.log("Subscription expired:", subscription.id);
}

async function handleLicenseKeyCreated(licenseKey: any) {
  console.log("License key created:", licenseKey.id);
}
