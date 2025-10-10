# Soultide Therapy

A minimalist therapy website built with React and Vite, hosted on Netlify.

## Project Structure

```
soultide-therapy/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/    # Place hero image and logo here
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS/styling files
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   ├── package.json
│   └── vite.config.js
├── netlify.toml           # Netlify deployment configuration
├── .gitignore
└── README.md
```

## Getting Started

### Install Dependencies
```bash
cd client
npm install
```

### Development Server
```bash
cd client
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
cd client
npm run build
```

## Adding Images

Place your images in `client/src/assets/images/`:
- **hero.jpg** or **hero.png** - Hero/banner image (recommended: 1920x1080px)
- **logo.png** or **logo.svg** - Soultide Therapy logo (recommended: 400x400px with transparent background)

## Deploying to Netlify

1. Push this repository to GitHub
2. Connect the repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Your site will be deployed automatically on every push to main

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Netlify** - Hosting platform
