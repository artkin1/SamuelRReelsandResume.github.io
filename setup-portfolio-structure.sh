#!/bin/bash

# Portfolio Directory Setup Script
# This script creates the folder structure for a theatrical portfolio and commits to Git

echo "🎭 Setting up theatrical portfolio directory structure..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a Git repository. Please run this script from your cloned repository folder."
    exit 1
fi

# Create main directories
echo "📁 Creating main directories..."
mkdir -p assets/images/headshots
mkdir -p assets/images/production-photos
mkdir -p assets/images/behind-scenes
mkdir -p assets/images/profile
mkdir -p assets/videos/reels
mkdir -p assets/videos/scenes
mkdir -p assets/videos/auditions
mkdir -p assets/documents
mkdir -p css
mkdir -p js

# Create placeholder files to ensure directories are tracked by Git
echo "📝 Creating placeholder files..."

# Create .gitkeep files in directories (Git doesn't track empty directories)
touch assets/images/headshots/.gitkeep
touch assets/images/production-photos/.gitkeep
touch assets/images/behind-scenes/.gitkeep
touch assets/images/profile/.gitkeep
touch assets/videos/reels/.gitkeep
touch assets/videos/scenes/.gitkeep
touch assets/videos/auditions/.gitkeep
touch assets/documents/.gitkeep

# Create helpful README files for each directory
cat > assets/images/README.md << 'EOF'
# Images Directory

## Folder Organization:
- **headshots/**: Professional headshot photos
- **production-photos/**: Photos from shows and performances
- **behind-scenes/**: Rehearsal and backstage photos
- **profile/**: Bio and other profile images

## File Guidelines:
- Use JPG for photos, PNG for graphics
- Keep file sizes under 2MB
- Use descriptive names (no spaces): `hamlet-scene2-2024.jpg`
- Optimize images for web before uploading
EOF

cat > assets/videos/README.md << 'EOF'
# Videos Directory

## Folder Organization:
- **reels/**: Demo reels and highlight videos
- **scenes/**: Individual scene performances
- **auditions/**: Audition tapes

## File Guidelines:
- Use MP4 format for best compatibility
- Keep files under 25MB (GitHub limit is 100MB)
- Consider hosting large files on YouTube/Vimeo and embedding
- Use descriptive names: `monologue-hamlet-2024.mp4`
EOF

cat > assets/documents/README.md << 'EOF'
# Documents Directory

Store important documents here:
- Resume (PDF format recommended)
- Press releases
- Reviews and testimonials
- Show programs

## File Guidelines:
- Use PDF format for resumes
- Keep file sizes reasonable
- Use descriptive names
EOF

# Create a basic .gitignore file
cat > .gitignore << 'EOF'
# System files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.temp
*~

# Large video files (consider hosting externally)
*.mov
*.avi
*.wmv

# Backup files
*.bak
*.backup

# Environment files
.env
.env.local

# Node modules (if using build tools later)
node_modules/
EOF

# Create basic index.html placeholder
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Samuel's Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Portfolio Coming Soon!</h1>
    <p>This portfolio is currently under construction.</p>
    
    <script src="js/script.js"></script>
</body>
</html>
EOF

# Create basic CSS file
mkdir -p css
cat > css/style.css << 'EOF'
/* Basic styling for portfolio */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    text-align: center;
    color: #666;
}
EOF

# Create basic JavaScript file
mkdir -p js
cat > js/script.js << 'EOF'
// Basic JavaScript for portfolio
console.log('Portfolio JavaScript loaded');

// Add any interactive functionality here
EOF

echo "✅ Directory structure created successfully!"
echo ""
echo "📋 Created directories:"
echo "   assets/images/ (headshots, production-photos, behind-scenes, profile)"
echo "   assets/videos/ (reels, scenes, auditions)"
echo "   assets/documents/"
echo "   css/"
echo "   js/"
echo ""

# Add all files to git
echo "📤 Adding files to Git..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "⚠️  No changes to commit."
else
    # Commit the changes
    echo "💾 Committing changes..."
    git commit -m "Initial portfolio structure setup

- Created organized directory structure for theatrical portfolio
- Added placeholder files and documentation
- Set up basic HTML, CSS, and JS files
- Added .gitignore for common unwanted files"

    echo "🚀 Pushing to GitHub..."
    git push origin main

    echo ""
    echo "🎉 Portfolio structure setup complete!"
    echo "🌐 Your site will be available at: https://$(basename $(pwd) .github.io).github.io"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Add your photos to assets/images/ folders"
    echo "   2. Add your videos to assets/videos/ folders"
    echo "   3. Replace index.html with your custom portfolio design"
    echo "   4. Run 'git add . && git commit -m \"Added content\" && git push' to update"
fi

echo ""
echo "✨ Setup complete! Happy portfolio building! 🎭"
