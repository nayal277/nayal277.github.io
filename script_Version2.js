// Create stars background
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    glitchEffect();
    setupScrambleReveal();
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        star.style.position = 'absolute';
        star.style.backgroundColor = '#ffffff';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        star.style.animation = 'twinkle 1s infinite alternate';
        
        starsContainer.appendChild(star);
    }
    
    // Add CSS for twinkling animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function glitchEffect() {
    const glitchTexts = document.querySelectorAll('.glitch');
    
    // Occasionally trigger glitch animation
    setInterval(() => {
        glitchTexts.forEach(text => {
            // Temporarily add stronger glitch class
            text.classList.add('glitching');
            
            // Remove after short duration
            setTimeout(() => {
                text.classList.remove('glitching');
            }, 200);
        });
    }, 3000);
}

function setupScrambleReveal() {
    const revealBtn = document.getElementById('reveal-btn');
    const scrambledTexts = document.querySelectorAll('.scramble');
    
    revealBtn.addEventListener('click', function() {
        let authenticated = false;
        
        // Simple "authentication"
        const password = prompt("Enter access password:");
        if (password === "sigma" || password === "" || password === null) {
            authenticated = true;
        }
        
        if (authenticated) {
            scrambledTexts.forEach(text => {
                text.classList.add('revealed');
                text.textContent = text.getAttribute('data-text');
            });
            
            revealBtn.textContent = "AUTHENTICATED";
            revealBtn.style.backgroundColor = "#00ff00";
            revealBtn.disabled = true;
        } else {
            alert("ACCESS DENIED");
            // Add shake animation to button
            revealBtn.classList.add('shake');
            setTimeout(() => {
                revealBtn.classList.remove('shake');
            }, 500);
        }
    });
    
    // Add CSS for shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake {
            animation: shake 0.5s;
        }
    `;
    document.head.appendChild(style);
}

// Enhance header with random glitch effect
setInterval(() => {
    const header = document.querySelector('h1');
    
    if (Math.random() > 0.9) {
        header.style.textShadow = "2px 2px #ff00ff, -2px -2px #00ffff";
        setTimeout(() => {
            header.style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00";
        }, 150);
    }
}, 2000);

// Random cursor trail effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.position = 'absolute';
        trail.style.width = '5px';
        trail.style.height = '5px';
        trail.style.backgroundColor = '#00ff00';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.opacity = '0.8';
        trail.style.transition = 'transform 0.5s, opacity 0.5s';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.transform = 'scale(2)';
            trail.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    }
});
