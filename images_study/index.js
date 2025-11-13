const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
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