// Loading Animation
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Portfolio Item Hover Effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03) rotateY(5deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Service Card Enhanced Animations
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.color = '#f59e0b';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon i');
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '';
    });
});

// Enhanced CTA Button Animation
document.querySelectorAll('.cta-button, .submit-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 20px 60px rgba(99, 102, 241, 0.4)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Animate button
    submitBtn.textContent = 'Sending...';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        this.reset();
        
        // Reset button after delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);
    }, 2000);
});

// Testimonials Navigation Buttons
const testimonialsSection = document.querySelector('.testimonials .container');
const testimonialsContainer = document.querySelector('.testimonials-container');

// Add navigation buttons
const navButtonsHTML = `
    <div class="testimonials-nav" style="
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    ">
        <button class="nav-btn prev-btn" style="
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
        ">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
        <button class="nav-btn next-btn" style="
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
        ">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    </div>
`;

testimonialsSection.insertAdjacentHTML('beforeend', navButtonsHTML);

// Navigation button functionality
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', function() {
    testimonialsContainer.scrollBy({
        left: -420,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', function() {
    testimonialsContainer.scrollBy({
        left: 420,
        behavior: 'smooth'
    });
});

// Style navigation buttons on hover
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(99, 102, 241, 0.3)';
        this.style.borderColor = 'rgba(99, 102, 241, 0.5)';
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        this.style.transform = 'translateY(0)';
    });
});

// Remove problematic auto-scroll functionality
// (Removing the auto-scroll interval and related code)

// Enhanced Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
scrollIndicator.addEventListener('click', function() {
    document.querySelector('.services').scrollIntoView({
        behavior: 'smooth'
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / window.innerHeight;
    }
});

// Dynamic Text Animation for Hero
const heroTitle = document.querySelector('.hero h1');
const words = ['Creative Advertising That Converts', 'Powerful Campaigns That Inspire', 'Bold Ideas That Drive Results'];
let currentWordIndex = 0;

function changeHeroText() {
    heroTitle.style.opacity = 0;
    setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        heroTitle.textContent = words[currentWordIndex];
        heroTitle.style.opacity = 1;
    }, 500);
}

// Change hero text every 4 seconds
setInterval(changeHeroText, 4000);

// Add floating animation to service icons
document.querySelectorAll('.service-icon').forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
    icon.style.animation = 'float 6s ease-in-out infinite';
});

// CSS for floating animation (add to existing styles)
const floatingKeyframes = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;

const style = document.createElement('style');
style.textContent = floatingKeyframes;
document.head.appendChild(style);

// Enhanced form validation with real-time feedback
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#6366f1';
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
        if (this.value.trim() === '' && this.required) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 5px 15px rgba(239, 68, 68, 0.1)';
        } else {
            this.style.borderColor = '#10b981';
            this.style.boxShadow = '0 5px 15px rgba(16, 185, 129, 0.1)';
        }
    });
});

// Add success animation for successful form submission
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            animation: successPop 0.5s ease-out;
        ">
            <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
            <h3 style="margin-bottom: 0.5rem;">Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Add keyframes for success animation
const successKeyframes = `
    @keyframes successPop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
`;

const successStyle = document.createElement('style');
successStyle.textContent = successKeyframes;
document.head.appendChild(successStyle);
