document.addEventListener('DOMContentLoaded', function() {
    // Set current time
    const timeElements = document.querySelectorAll('#current-time, #footer-time');
    
    function updateTime() {
        const now = new Date();
        const formattedTime = now.toISOString().replace('T', ' ').substring(0, 19);
        
        timeElements.forEach(el => {
            el.textContent = formattedTime;
        });
    }
    
    // Set initial time
    updateTime();
    
    // Update time every minute
    setInterval(updateTime, 60000);
    
    // Get modal elements
    const modal = document.getElementById('prank-modal');
    const viewButtons = document.querySelectorAll('.view-btn');
    const closeButton = document.querySelector('.close-modal');
    const prankVideo = document.getElementById('prank-video');
    
    // Function to show the prank modal
    function showPrankModal() {
        modal.style.display = 'block';
        
        // Attempt to play the video
        if (prankVideo) {
            try {
                prankVideo.play();
            } catch (error) {
                console.log('Auto-play prevented by browser. User needs to interact.');
            }
        }
        
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide the prank modal
    function hidePrankModal() {
        modal.style.display = 'none';
        
        // Pause the video
        if (prankVideo) {
            prankVideo.pause();
        }
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    }
    
    // Add click event to all view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', showPrankModal);
    });
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', hidePrankModal);
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            hidePrankModal();
        }
    });
    
    // Share buttons functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = "I just got pranked at nayal277.me! Check it out! 😂";
            const url = window.location.href;
            
            // Get the platform from the button icon
            const platform = this.querySelector('i').className;
            
            if (platform.includes('facebook')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
            } else if (platform.includes('twitter')) {
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
            } else if (platform.includes('whatsapp')) {
                window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
            }
        });
    });
    
    // Randomly change the number of online users every 30 seconds
    const onlineStatus = document.querySelector('.online-status span:last-child');
    
    function updateOnlineUsers() {
        const baseNumber = 14000;
        const randomVariation = Math.floor(Math.random() * 2000);
        const newOnlineCount = baseNumber + randomVariation;
        onlineStatus.textContent = `${newOnlineCount.toLocaleString()} online now`;
    }
    
    // Update initially
    updateOnlineUsers();
    
    // Update every 30 seconds
    setInterval(updateOnlineUsers, 30000);
});