# Complete Setup Guide - Lilac Template Clone

## Step-by-Step Installation & Setup

### Step 1: Extract Project Files

1. Extract the downloaded `lilac-clone-project.zip` file
2. Open your terminal/command prompt
3. Navigate to the extracted folder:

```bash
cd lilac-clone-project
```

### Step 2: Install Node.js (if not installed)

Check if Node.js is installed:

```bash
node --version
```

If you see a version number (v18.17.0 or higher), you're good! If not:

- Download from [nodejs.org](https://nodejs.org/)
- Install the LTS version
- Restart your terminal

### Step 3: Install Dependencies

Choose one of these commands based on your package manager:

```bash
# Using npm (comes with Node.js)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

This will install all required packages (~5 minutes).

### Step 4: Add Images

**IMPORTANT:** The project won't work without images!

1. Create the images folder (if not exists):

```bash
mkdir -p public/images
```

2. Download 9 images from [Unsplash](https://unsplash.com):

| Filename | Search Term | Aspect Ratio |
|----------|-------------|--------------|
| `hero-flower.jpg` | "purple lilac flowers close up" | 2:3 (portrait) |
| `section-2-flower.jpg` | "pink flowers nature" | 3:4 (portrait) |
| `specialty-1.jpg` | "person meditating nature" | 1:1 (square) |
| `specialty-2.jpg` | "couple holding hands" | 1:1 (square) |
| `specialty-3.jpg` | "woman peaceful nature" | 1:1 (square) |
| `section-3-person.jpg` | "therapist office plants" | 3:4 (portrait) |
| `about-person.jpg` | "professional portrait woman" | 2:3 (portrait) |
| `white-lilac.jpg` | "white lilac flowers" | 1:1 (square) |
| `faq-flower.jpg` | "purple flowers close up" | 2:3 (portrait) |

3. **Quick Download Method:**

Visit each link, click the download button, and rename:

- https://unsplash.com/s/photos/lilac-flowers
- https://unsplash.com/s/photos/therapy
- https://unsplash.com/s/photos/wellness

4. Place all images in `public/images/` folder

**Folder structure should look like:**

```
public/
└── images/
    ├── hero-flower.jpg
    ├── section-2-flower.jpg
    ├── specialty-1.jpg
    ├── specialty-2.jpg
    ├── specialty-3.jpg
    ├── section-3-person.jpg
    ├── about-person.jpg
    ├── white-lilac.jpg
    └── faq-flower.jpg
```

### Step 5: Run Development Server

```bash
npm run dev
```

You should see:

```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 6: Open in Browser

Open your browser and go to:

**http://localhost:3000**

You should see the Lilac Template homepage!

## 🐛 Troubleshooting

### Problem: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Problem: Images not showing

**Solution:**
- Check that images are in `public/images/` folder
- Check that filenames match exactly (case-sensitive)
- Make sure images are .jpg format
- Try refreshing the browser with Ctrl+Shift+R

### Problem: Port 3000 already in use

**Solution:**
```bash
# Use a different port
npm run dev -- -p 3001
```

Then open http://localhost:3001

### Problem: TypeScript errors

**Solution:**
```bash
# This is normal during development
# TypeScript will show errors until all files are properly imported
# Just make sure the app runs!
```

### Problem: Styles not loading

**Solution:**
```bash
# Restart the dev server
# Press Ctrl+C to stop
npm run dev
```

## 📱 Testing Responsiveness

1. **Desktop:** Open normally
2. **Tablet:** Press F12 → Click device toolbar icon → Select iPad
3. **Mobile:** Press F12 → Click device toolbar icon → Select iPhone

Or manually resize your browser window!

## 🎨 Customization Quick Start

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#9b8ba6",  // Change this!
  }
}
```

### Change Text

Edit files in `src/components/sections/`

For example, to change hero text:
- Open `src/components/sections/HeroSection.tsx`
- Find the text you want to change
- Edit and save
- Browser auto-refreshes!

### Change Fonts

Edit `src/app/layout.tsx`:

```typescript
// Replace Playfair_Display with another font
import { Your_Font } from "next/font/google";
```

Browse fonts: https://fonts.google.com/

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage - order of sections |
| `src/components/Header.tsx` | Top navigation bar |
| `src/components/Footer.tsx` | Bottom footer |
| `src/components/sections/` | All page sections (hero, about, etc.) |
| `src/app/globals.css` | Global styles and CSS |
| `tailwind.config.ts` | Theme colors and settings |

## 🚀 Ready for Development!

You're all set! The project should be running perfectly.

### Next Steps:

1. ✅ Verify all sections load correctly
2. ✅ Test on mobile/tablet/desktop
3. ✅ Check all accordions work
4. ✅ Test navigation menu
5. ✅ Complete the Part 1 checklist in README.md

### When Ready for Part 2:

Let me know and we'll proceed with the creative redesign phase!

## 📞 Need Help?

Common commands:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Stop the server
Press Ctrl + C
```

---

**Happy Coding! 🎉**
