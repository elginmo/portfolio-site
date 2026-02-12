const icons = document.querySelectorAll('.project-icon');

const defaultScreen = document.querySelector('.default-screen');
const videoTint = document.querySelector('.video-tint');
const projectInfo = document.querySelector('.project-info');
const projectTitle = document.querySelector('.project-info h2');
const projectDesc = document.querySelector('.project-info p');

let slideshowInterval; // store interval globally
let slideshowImg = null; // will hold the <img> element for slideshow

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const title = icon.getAttribute('data-title');
        const desc = icon.getAttribute('data-desc') || '';
        const images = JSON.parse(icon.getAttribute('data-images') || '[]');

        projectTitle.textContent = title;
        projectDesc.textContent = desc;
        projectInfo.style.display = 'block';
        videoTint.style.display = 'block';
        defaultScreen.style.display = 'none';

        if (images.length > 0) {
            // Create slideshow img if it doesn't exist
            if (!slideshowImg) {
                slideshowImg = document.createElement('img');
                slideshowImg.classList.add('slideshow-img');
                document.querySelector('.preview-screen').appendChild(slideshowImg);
            }

            let index = 0;
            slideshowImg.src = images[index];
            slideshowImg.style.display = 'block';

            slideshowInterval = setInterval(() => {
                index = (index + 1) % images.length;
                slideshowImg.src = images[index];
            }, 1000); // change every 1 second
        }
    });

    icon.addEventListener('mouseleave', () => {
        projectInfo.style.display = 'none';
        videoTint.style.display = 'none';
        defaultScreen.style.display = 'flex';

        // Stop slideshow
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
        if (slideshowImg) {
            slideshowImg.style.display = 'none';
        }
    });
});