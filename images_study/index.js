const images = ['img_1.png', 'img_2.png', 'img_3.png'];
        let currentIndex = 0;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                document.getElementById('slider').src = images[currentIndex];
            } else if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                document.getElementById('slider').src = images[currentIndex];
            }
        });