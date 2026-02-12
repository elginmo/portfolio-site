// Select all project icons
const icons = document.querySelectorAll('.project-icon');

// Select elements for preview
const previewVideo = document.querySelector('.preview-video');
const defaultScreen = document.querySelector('.default-screen');
const videoTint = document.querySelector('.video-tint'); // new tint element

// Project info box elements
const projectInfo = document.querySelector('.project-info');
const projectTitle = document.querySelector('.project-info h2');
const projectDesc = document.querySelector('.project-info p');

// Loop through icons and add hover functionality
icons.forEach(icon => {

    icon.addEventListener('mouseenter', () => {
        // Get video & text content
        const videoSrc = icon.getAttribute('data-video');
        const title = icon.getAttribute('data-title');
        const desc = icon.getAttribute('data-desc');

        // Update video
        previewVideo.src = videoSrc;
        previewVideo.style.display = 'block';
        previewVideo.play();

        // Show tint
        videoTint.style.display = 'block';

        // Update text box
        projectTitle.textContent = title;
        projectDesc.textContent = desc;
        projectInfo.style.display = 'block';

        // Hide default error screen
        defaultScreen.style.display = 'none';
    });

    icon.addEventListener('mouseleave', () => {
        // Stop video
        previewVideo.pause();
        previewVideo.style.display = 'none';

        // Hide tint
        videoTint.style.display = 'none';

        // Hide info box
        projectInfo.style.display = 'none';

        // Show default screen again
        defaultScreen.style.display = 'flex';
    });
});