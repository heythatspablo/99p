# Case Study Template System

This folder contains reusable case study templates that follow an Apple Newsroom aesthetic.

## Structure

```
app/case-study/
├── template/          # Base template (aviation case study)
├── [case-name]/       # Clone this structure for new case studies
└── README.md
```

## Creating a New Case Study

1. **Copy the template folder:**
   ```bash
   cp -r app/case-study/template app/case-study/[your-case-name]
   ```

2. **Update the content in `page.tsx`:**
   - Replace all hardcoded content with your case study data
   - Keep the same component structure and styling
   - Maintain the 10-section format (Hero, Nav, Situation, Problems, Insight, Solution, Decisions, Execution, Results, Takeaway)

3. **Access your case study:**
   - URL: `http://localhost:3000/case-study/[your-case-name]`

## Template Sections

### 1. Hero Banner
- Eyebrow badge
- Large headline (6xl-8xl)
- Subhead
- Meta line
- Two CTAs (Read study, Skip to outcomes)

### 2. Sticky Navigation
- Auto-appears after scrolling past hero
- Section anchors with active state tracking
- Progress bar indicator

### 3. Situation (Split Layout)
- Left: Headline + body paragraphs
- Right: 3 stat counters

### 4. Problems (2x2 Bento Grid)
- 4 problem cards with icons
- Title + description per card

### 5. Insight (Gradient Section)
- Centered headline
- Stack of supporting text
- Quote carousel (2-3 quotes)

### 6. Solution (Split Layout)
- Left: Headline + body paragraphs
- Right: Device mockup + caption

### 7. Decisions (3-Column Grid)
- 3 decision cards with icons
- Title + why + bullet points

### 8. Execution (Timeline)
- 4 timeline nodes
- Each with: title, conflict, resolution

### 9. Results (4-Column Grid)
- 4 metric cards with icons
- Metric + label + description

### 10. Takeaway (Centered)
- Headline
- Body paragraphs
- CTA to contact page

## Design System

- **Colors:** Neutral palette (50, 100, 900)
- **Typography:** 5xl-8xl headlines, tight tracking
- **Spacing:** py-24 to py-32 between sections
- **Motion:** Framer Motion fade-ins on scroll
- **Layout:** max-w-7xl containers, responsive grids

## Example Case Studies

- `/case-study/template` - Aviation: Private jet itinerary personalization
