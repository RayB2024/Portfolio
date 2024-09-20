// You can add JavaScript code here for interactive elements
// For example, to create an image lightbox or handle the discussion section.

// Example: Simple image lightbox
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Create a lightbox element
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            // Create a lightbox image
            const lightboxImg = document.createElement('img');
            lightboxImg.src = image.src;
            
            // Add image to lightbox
            lightbox.appendChild(lightboxImg);
            
            // Append lightbox to body
            document.body.appendChild(lightbox);
            
            // Close lightbox on click
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});
