# Consulting Page - Content Plan

## 📊 Content Analysis Summary

### Source 1: Matt Gray (mattgray.com)
**Focus:** Content marketing systems and organic growth
**Key Elements:**
- Proven track record (8-9 figures generated)
- Content GPS System methodology
- Results-focused messaging
- Testimonials from founders
- Clear benefits list
- Strong CTA (Talk to Matt)

### Source 2: The Futur Private Coaching
**Focus:** Mentorship and coaching for creative entrepreneurs
**Key Elements:**
- Value of mentorship/coaching
- Multiple coaches available
- Clear 3-step process
- Preparation requirements
- Post-session deliverables

### Source 3: Chris Do Personal Page
**Focus:** Personal brand + consulting expertise
**Key Elements:**
- 22+ years experience ($80M+ billings)
- Personal letter/story approach
- Specific preparation checklist
- Credentials and recognition
- Honest, direct messaging ("If you're thinking what does he know...")

---

## 🎯 Synthesized Page Intent

**Primary Goal:** Position the consultant as a proven expert who helps entrepreneurs/founders overcome specific business challenges through personalized coaching.

**Target Audience:** Entrepreneurs, founders, and business owners who:
- Feel stuck or stagnant in their business
- Need strategic guidance on growth
- Want to skip common mistakes
- Are ready to invest in expert guidance

**Core Message:** "Don't go it alone. Get personalized guidance from someone who's been there, built that, and can help you avoid costly mistakes."

---

## 📋 Suggested Page Structure

### **Section 1: Hero**
**Content:**
- Headline: "Stop Going in Circles. Get the Strategic Guidance You Need."
- Subheadline: "Personalized consulting for entrepreneurs ready to break through their biggest challenges."
- Primary CTA: "Book a Consultation"
- Secondary CTA: "See How It Works"

**shadcn Components:**
- `Hero` component (existing)
- `Button` (primary + outline variants)

---

### **Section 2: The Problem (Empathy)**
**Content:**
- Headline: "You Don't Have to Figure It All Out Alone"
- Pain points (3-4 cards):
  - "You're running in place, working harder but not seeing results"
  - "Every decision feels like a gamble without a proven roadmap"
  - "You're making mistakes that could have been avoided"
  - "You need objective perspective but don't have a trusted advisor"

**shadcn Components:**
- `Card` component
- Grid layout (2x2 on desktop, 1 column on mobile)

---

### **Section 3: Why Work With [Consultant Name]**
**Content:**
- Headline: "Experience That Speaks for Itself"
- Credentials section:
  - Years of experience
  - Revenue generated/businesses built
  - Notable clients or achievements
  - Industry recognition
- Personal story/approach (2-3 paragraphs)
  - "I'm not just another consultant..."
  - Personal journey and lessons learned
  - Philosophy on helping others

**shadcn Components:**
- `Card` with stats/numbers
- `Badge` for credentials/achievements
- Text content area

---

### **Section 4: What You'll Gain**
**Content:**
- Headline: "Here's What You'll Walk Away With"
- Benefits list (6-8 items):
  - Clear, actionable strategy for your specific situation
  - Objective perspective on your biggest challenges
  - Proven frameworks that have generated [X] in results
  - Confidence to make better business decisions
  - A roadmap to avoid costly mistakes
  - Direct answers to your burning questions
  - Post-session resources and action plan
  - Ongoing support (if applicable)

**shadcn Components:**
- Grid layout with icons
- `Card` or simple list with checkmarks
- Icons from `lucide-react`

---

### **Section 5: How It Works (Process)**
**Content:**
- Headline: "Simple, Focused, Results-Driven"
- 3-step process:
  
  **Step 1: Preparation**
  - Fill out pre-session questionnaire
  - Gather business financials/metrics
  - Define 3 main objectives for the call
  - Schedule at your convenience
  
  **Step 2: The Session**
  - 60-90 minute focused consultation
  - Deep dive into your specific challenges
  - Strategic guidance and frameworks
  - Real-time problem solving
  
  **Step 3: Follow-Up**
  - Session recording + transcript
  - Detailed notes and action items
  - Relevant resources and links
  - Email support for questions

**shadcn Components:**
- `Card` for each step (numbered)
- Timeline/stepper layout
- Icons for each phase

---

### **Section 6: Preparation Checklist**
**Content:**
- Headline: "Come Prepared to Get Maximum Value"
- Checklist items:
  - [ ] Year's worth of revenue data
  - [ ] Monthly overhead/expenses
  - [ ] Current cash reserves
  - [ ] Average deal/project size
  - [ ] 3 specific goals for the session
  - [ ] Quiet environment with good audio
  - [ ] Notepad for action items

**shadcn Components:**
- `Card` with checklist
- `Checkbox` (visual only, not interactive)
- Or simple list with checkmark icons

---

### **Section 7: Who This Is For / Not For**
**Content:**
- Headline: "Is This Right for You?"

**This is for you if:**
- You're serious about growth and willing to invest
- You have a specific challenge or decision to work through
- You're ready to implement advice, not just collect it
- You value experience and want to skip the trial-and-error

**This is NOT for you if:**
- You're just starting out and need basic business education
- You're not willing to be honest about your numbers
- You're looking for someone to do the work for you
- You already have a mentor who's getting you results

**shadcn Components:**
- Two-column layout
- `Card` for each side (green border for "for you", red/muted for "not for")
- `Badge` for emphasis

---

### **Section 8: Testimonials**
**Content:**
- Headline: "What Founders Are Saying"
- 3-4 testimonials with:
  - Quote
  - Name, title, company
  - Photo (optional)
  - Result/outcome if applicable

**shadcn Components:**
- `Card` for each testimonial
- Grid layout (1-2-3 columns responsive)
- Avatar/image component

---

### **Section 9: Pricing & Investment**
**Content:**
- Headline: "Your Investment"
- Pricing card:
  - "60-Minute Strategy Session"
  - Price: $[X]
  - What's included (bullet list)
  - CTA: "Book Your Session"
- Optional: Package options (single session vs. multi-session)
- Money-back guarantee or satisfaction statement

**shadcn Components:**
- `Card` with pricing
- `Button` for CTA
- `Badge` for "Most Popular" or "Best Value"

---

### **Section 10: FAQ**
**Content:**
- Headline: "Common Questions"
- 6-8 FAQs:
  - "How long is a typical session?"
  - "What if I need more time?"
  - "Do you offer ongoing support?"
  - "What if I'm not sure what to ask?"
  - "Can I record the session?"
  - "What's your refund policy?"
  - "How soon can I book?"
  - "Do you work with [specific industry]?"

**shadcn Components:**
- `Accordion` (existing FAQ component)

---

### **Section 11: Final CTA**
**Content:**
- Headline: "Ready to Get Unstuck?"
- Subheadline: "Book your strategy session and get the clarity you need to move forward."
- Primary CTA: "Schedule Your Session"
- Trust elements: "100% confidential" | "No long-term commitment" | "Satisfaction guaranteed"

**shadcn Components:**
- `Card` or section with centered content
- `Button` (large, primary)
- `Badge` for trust elements

---

## 🎨 Design Notes (Using Growing Design UI)

### Color Palette
- Use existing Growing Design colors
- Primary: `#1A1A1A` for CTAs
- Background: `#F5F1E8` for sections
- Cards: `#FFFFFF` for content blocks

### Typography
- Hero: 4xl-5xl font size
- Section headers: 3xl-4xl
- Body: lg-xl for readability
- Use existing Inter font

### Spacing
- Use `.section-padding` utility
- Use `.container-custom` for width constraints
- Generous whitespace between sections

### Components to Reuse
- Navigation (existing)
- Footer (existing)
- Hero (existing)
- FAQ (existing)
- Button styles (existing)
- Card styles (existing)

### New Components Needed
- Stats/credentials cards
- Process steps (numbered cards)
- Testimonial cards
- Pricing card
- Checklist component

---

## 📦 Required shadcn Components

### Already Installed:
- ✅ `button`
- ✅ `card`
- ✅ `accordion`
- ✅ `badge`
- ✅ `dialog`

### Need to Install:
- `checkbox` (for visual checklist)
- `avatar` (for testimonials)
- `separator` (for dividing sections)

---

## 🎯 Key Messaging Principles

1. **Results-Focused**: Lead with outcomes, not features
2. **Honest & Direct**: Don't oversell, be transparent about fit
3. **Personal Touch**: Use first-person, tell a story
4. **Social Proof**: Testimonials and credentials throughout
5. **Clear Process**: Remove uncertainty about what happens
6. **Strong CTAs**: Multiple opportunities to book
7. **Objection Handling**: Address concerns proactively (FAQ, "not for you")

---

## 📄 Suggested Page Route

**URL:** `/consulting` or `/private-coaching`

**Navigation:** Add to main nav as "Consulting" or "Work With Me"

---

## ✅ Ready for Your Review

This content plan synthesizes the best elements from all three sources:
- **Matt Gray's** results-driven approach and clear benefits
- **The Futur's** structured process and preparation requirements  
- **Chris Do's** personal storytelling and honest messaging

The structure uses existing Growing Design components while maintaining the brand's warm, approachable aesthetic.

**Awaiting your approval to proceed with building the page.**
