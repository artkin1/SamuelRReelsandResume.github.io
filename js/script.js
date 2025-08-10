// Samuel's Theatrical Portfolio JavaScript
console.log('🎭 Samuel\'s Portfolio loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const currentLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add sparkle effect to hero section
    function createSparkle() {
        const heroSection = document.querySelector('.hero-section');
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        
        // Random position
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        // Animation
        sparkle.style.animation = 'sparkleFloat 4s ease-in-out forwards';
        
        heroSection.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 4000);
    }
    
    // Add sparkle animation CSS
    const sparkleCSS = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            20% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            80% {
                opacity: 1;
                transform: translateY(-60px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-80px) scale(0);
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = sparkleCSS;
    document.head.appendChild(style);
    
    // Create sparkles periodically
    setInterval(createSparkle, 2000);
    
    // Add hover effect to production cards
    const productionCards = document.querySelectorAll('.production-card');
    productionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to gallery placeholders
    const galleryPlaceholders = document.querySelectorAll('.gallery-placeholder');
    galleryPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const message = this.querySelector('p').textContent;
            
            // Create temporary message
            const tempMessage = document.createElement('div');
            tempMessage.textContent = `${message} - Coming Soon! 🎬`;
            tempMessage.style.position = 'fixed';
            tempMessage.style.top = '50%';
            tempMessage.style.left = '50%';
            tempMessage.style.transform = 'translate(-50%, -50%)';
            tempMessage.style.background = 'rgba(26, 26, 26, 0.9)';
            tempMessage.style.color = '#d4af37';
            tempMessage.style.padding = '20px 40px';
            tempMessage.style.borderRadius = '10px';
            tempMessage.style.fontSize = '18px';
            tempMessage.style.zIndex = '1000';
            tempMessage.style.animation = 'fadeInOut 2s ease-in-out forwards';
            
            document.body.appendChild(tempMessage);
            
            setTimeout(() => {
                if (tempMessage.parentNode) {
                    tempMessage.parentNode.removeChild(tempMessage);
                }
            }, 2000);
        });
    });
    
    // Add fade in/out animation for messages
    const messageCSS = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    
    const messageStyle = document.createElement('style');
    messageStyle.textContent = messageCSS;
    document.head.appendChild(messageStyle);
    
    // Add typing effect to tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);
    }
    
    console.log('🎭 All interactive features loaded!');
});
