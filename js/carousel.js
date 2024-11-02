document.addEventListener('DOMContentLoaded', function() {
    const carouselData = {
        'carousel-image-one': [
            'assets/images/Wymer_Fam_01/image (1).jpg',
            'assets/images/Wymer_Fam_01/image (2).jpg',
            'assets/images/Wymer_Fam_01/image (3).jpg',
            'assets/images/Wymer_Fam_01/image (4).jpg',
            'assets/images/Wymer_Fam_01/image (5).jpg',
            'assets/images/Wymer_Fam_01/image (6).jpg',
            'assets/images/Wymer_Fam_01/image (7).jpg',
            'assets/images/Wymer_Fam_01/image (8).jpg',
            'assets/images/Wymer_Fam_01/image (9).jpg',
            'assets/images/Wymer_Fam_01/image (10).jpg',
            'assets/images/Wymer_Fam_01/image (11).jpg',
            'assets/images/Wymer_Fam_01/image (12).jpg',
            'assets/images/Wymer_Fam_01/image (13).jpg',
            'assets/images/Wymer_Fam_01/image (14).jpg',
            'assets/images/Wymer_Fam_01/image (15).jpg',
            'assets/images/Wymer_Fam_01/image (16).jpg',
            'assets/images/Wymer_Fam_01/image (17).jpg',
            'assets/images/Wymer_Fam_01/image (18).jpg',
            'assets/images/Wymer_Fam_01/image (19).jpg',
            'assets/images/Wymer_Fam_01/image (20).jpg',
            'assets/images/Wymer_Fam_01/image (21).jpg',
            'assets/images/Wymer_Fam_01/image (22).jpg',
            'assets/images/Wymer_Fam_01/image (23).jpg',
            'assets/images/Wymer_Fam_01/image (24).jpg',
            'assets/images/Wymer_Fam_01/image (25).jpg',
            'assets/images/Wymer_Fam_01/image (26).jpg',
            'assets/images/Wymer_Fam_01/image (27).jpg',
            'assets/images/Wymer_Fam_01/image (28).jpg',
            'assets/images/Wymer_Fam_01/image (29).jpg',
            'assets/images/Wymer_Fam_01/image (30).jpg',
            'assets/images/Wymer_Fam_01/image (31).jpg',
            'assets/images/Wymer_Fam_01/image (32).jpg',
            'assets/images/Wymer_Fam_01/image (33).jpg',
            'assets/images/Wymer_Fam_01/image (34).jpg',
            // Add more image paths as needed
        ],
        'carousel-image-two': [
            'assets/images/Wymer_Fam_02/image (1).jpg',
            'assets/images/Wymer_Fam_02/image (2).jpg',
            'assets/images/Wymer_Fam_02/image (3).jpg',
            'assets/images/Wymer_Fam_02/image (4).jpg',
            'assets/images/Wymer_Fam_02/image (5).jpg',
            'assets/images/Wymer_Fam_02/image (6).jpg',
            'assets/images/Wymer_Fam_02/image (7).jpg',
            'assets/images/Wymer_Fam_02/image (8).jpg',
            'assets/images/Wymer_Fam_02/image (9).jpg',
            'assets/images/Wymer_Fam_02/image (10).jpg',
            'assets/images/Wymer_Fam_02/image (11).jpg',
            'assets/images/Wymer_Fam_02/image (12).jpg',
            'assets/images/Wymer_Fam_02/image (13).jpg',
            'assets/images/Wymer_Fam_02/image (14).jpg',
            'assets/images/Wymer_Fam_02/image (15).jpg',
            'assets/images/Wymer_Fam_02/image (16).jpg',
            'assets/images/Wymer_Fam_02/image (17).jpg',
            'assets/images/Wymer_Fam_02/image (18).jpg',
            'assets/images/Wymer_Fam_02/image (19).jpg',
            'assets/images/Wymer_Fam_02/image (20).jpg',
            'assets/images/Wymer_Fam_02/image (21).jpg',
            'assets/images/Wymer_Fam_02/image (22).jpg',
            'assets/images/Wymer_Fam_02/image (23).jpg',
            'assets/images/Wymer_Fam_02/image (24).jpg',
            'assets/images/Wymer_Fam_02/image (25).jpg',
            'assets/images/Wymer_Fam_02/image (26).jpg',
            'assets/images/Wymer_Fam_02/image (27).jpg',
            'assets/images/Wymer_Fam_02/image (28).jpg',
            'assets/images/Wymer_Fam_02/image (29).jpg',
            'assets/images/Wymer_Fam_02/image (30).jpg',
            'assets/images/Wymer_Fam_02/image (31).jpg',
            'assets/images/Wymer_Fam_02/image (32).jpg',
            'assets/images/Wymer_Fam_02/image (33).jpg'
            // Add more image paths as needed
        ]
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    Object.keys(carouselData).forEach(carouselId => {
        const images = carouselData[carouselId];
        shuffleArray(images); // Randomize the order of images

        const carouselInner = document.getElementById(`carousel-inner-${carouselId.split('-').pop()}`);
        const carouselIndicators = document.getElementById(`carousel-indicators-${carouselId.split('-').pop()}`);

        images.forEach((image, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
            carouselItem.innerHTML = `<img src="${image}" class="d-block w-100 carousel-image-small" alt="Image ${index + 1}" onclick="util.modal(this)">`;

            // Append to carousel inner
            carouselInner.appendChild(carouselItem);

            // Create indicator
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', `#${carouselId}`);
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.className = index === 0 ? 'active' : '';
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            if (index === 0) {
                indicator.setAttribute('aria-current', 'true');
            }

            // Append to carousel indicators
            carouselIndicators.appendChild(indicator);
        });
    });
});