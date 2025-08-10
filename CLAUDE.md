# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a theatrical portfolio website hosted on GitHub Pages for Samuel. It's a static website designed to showcase professional headshots, performance reels, production photos, and resume documents. The site is currently in early development with placeholder content.

## Architecture

- **Static HTML/CSS/JS**: Simple three-file structure without build tools or frameworks
- **Asset Organization**: Structured media directories for different types of portfolio content
- **GitHub Pages Hosting**: Deployed directly from the main branch

## File Structure

```
/
├── index.html          # Main portfolio page (currently placeholder)
├── css/style.css       # Basic styling
├── js/script.js        # Client-side functionality
├── setup-portfolio-structure.sh  # Initial setup script (already run)
└── assets/
    ├── images/         # Photos organized by type
    │   ├── headshots/
    │   ├── production-photos/
    │   ├── behind-scenes/
    │   └── profile/
    ├── videos/         # Video content by category
    │   ├── reels/
    │   ├── scenes/
    │   └── auditions/
    └── documents/      # Resumes, press materials
```

## Development Workflow

Since this is a static site with no build process:

1. **Edit files directly**: Modify HTML, CSS, and JS files in place
2. **Test locally**: Open `index.html` in a browser or use a simple HTTP server
3. **Deploy**: Commit and push to main branch for automatic GitHub Pages deployment

## Asset Guidelines

- **Images**: JPG for photos, PNG for graphics, keep under 2MB
- **Videos**: MP4 format preferred, consider external hosting (YouTube/Vimeo) for large files
- **Documents**: PDF format for resumes and press materials
- **File naming**: Use descriptive names without spaces (e.g., `hamlet-scene2-2024.jpg`)

## Common Commands

```bash
# Serve locally for testing (if Python is available)
python -m http.server 8000

# OR with Node.js
npx http-server

# Deploy changes
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Site URL

The portfolio is accessible at: `https://SamuelReelsandResume.github.io`

## Content Strategy

This portfolio is designed for theatrical professionals and should emphasize:
- Professional headshots and performance photos
- Video reels showcasing range and ability  
- Clean, accessible design that loads quickly
- Mobile-responsive layout for industry professionals on various devices