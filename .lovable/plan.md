## Changes to `public/villa.html`

Replace all occurrences of the villa name and location:

1. **Name**: `Villa Solaris` → `Villa Varellia`
   - `<title>` tag (line 6)
   - Logo text (line 348)
   - Main heading / hero (line 356)
   - Any other in-copy mentions throughout the file

2. **Location**: `Halkidiki` → `Kallithea, Halkidiki`
   - `<title>` meta
   - Subtitle "Private Estate · Halkidiki" (line 349) → "Private Estate · Kallithea, Halkidiki"
   - Any body copy / footer / contact sections referencing just "Halkidiki"

## Changes to `src/routes/index.tsx`

Update `head()` meta:
- `title`: "Villa Varellia — Private Beachfront Estate, Kallithea, Halkidiki"
- `description`: matching updated copy

## Out of scope

No layout, styling, or structural changes — only text replacements.