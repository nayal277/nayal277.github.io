// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCursor();
    
    // Initialize typewriter effect
    initTypewriter();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize form handling
    initContactForm();
    
    // Animate skill bars on scroll
    animateSkillBars();
});

// Custom cursor
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
    
    // Change cursor appearance on hover
    const links = document.querySelectorAll('a, button, .project-card, .social-icon');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.border = '1px solid var(--accent-color)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.border = '1px solid var(--primary-color)';
        });
    });
}

// Typewriter effect
function initTypewriter() {
    const typewriterText = document.getElementById('typewriter-text');
    const phrases = ['websites.', 'experiences.', 'digital solutions.', 'beautiful code.'];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        isEnd = false;
        typewriterText.textContent = currentPhrase.join('');
        
        if (i < phrases.length) {
            
            // If not deleting and haven't reached the end of the phrase
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                typewriterText.textContent = currentPhrase.join('');
            }
            
            // If deleting
            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
                typewriterText.textContent = currentPhrase.join('');
            }
            
            // If reached the end of the phrase
            if (j == phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }
            
            // If deleted the entire phrase
            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                
                // Loop back to the first phrase
                if (i === phrases.length) {
                    i = 0;
                }
            }
        }
        
        // Speed control
        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (150 - 100) + 100;
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
        
        setTimeout(typeWriter, time);
    }
    
    typeWriter();
}

// Scroll animations
function initScrollAnimations() {
    const header = document.querySelector('header');
    
    // Change header style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const menuToggle = document.querySelector('.menu-toggle');
                
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Mouse scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Scroll to top button
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile navigation
function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('.form-submit');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(function() {
                contactForm.reset();
                submitBtn.textContent = 'Message Sent!';
                
                // Reset button after 3 seconds
                setTimeout(function() {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillsSection && skillBars.length) {
        // Reset width to 0
        skillBars.forEach(bar => {
            bar.style.width = '0';
        });
        
        // Function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Function to animate skill bars
        function animateSkills() {
            if (isInViewport(skillsSection)) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    // Only animate if not already animated
                    if (width === '0px' || width === '0%' || width === '') {
                        const finalWidth = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
                        setTimeout(() => {
                            bar.style.width = finalWidth + '%';
                        }, 200);
                    }
                });
            }
        }
        
        // Initial check
        animateSkills();
        
        // Check on scroll
        window.addEventListener('scroll', animateSkills);
    }
}