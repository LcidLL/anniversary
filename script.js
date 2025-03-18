    // Create floating hearts and pictures
    const elementsContainer = document.getElementById('floatingElements');
    const numberOfHearts = 150; // Reduced number to make room for pictures
    const numberOfPictures = 40; // Number of floating pictures
    const picturePaths = [
        './assets/Floating1.jpg',
        './assets/Floating2.jpg',
        './assets/Floating3.jpg',
        './assets/Floating4.jpg',
        './assets/Floating5.jpg',
        './assets/Floating6.jpg',
        './assets/Floating7.jpg',
        './assets/Floating8.jpg',
        './assets/Floating9.jpg',
        './assets/Floating10.jpg',
        './assets/Floating11.jpg',
        './assets/Floating12.jpg',
        './assets/Floating13.jpg',
        './assets/Floating14.jpg',
        './assets/Floating15.jpg',
        './assets/Floating16.jpg',
        './assets/Floating17.jpg',
        './assets/Floating18.jpg',
        './assets/Floating19.jpg',
        './assets/Floating20.jpg',
    ];
    
    // Create hearts
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${10 + Math.random() * 15}s`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        elementsContainer.appendChild(heart);
    }
    
    // Create floating pictures
    for (let i = 0; i < numberOfPictures; i++) {
        const img = document.createElement('img');
        img.classList.add('floating-image');
        img.src = picturePaths[Math.floor(Math.random() * picturePaths.length)];
        img.style.left = `${Math.random() * 100}%`;
        img.style.animationDuration = `${15 + Math.random() * 20}s`;
        img.style.animationDelay = `${Math.random() * 10}s`;
        // Random size variation
        const size = 60 + Math.random() * 40;
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;
        elementsContainer.appendChild(img);
    }