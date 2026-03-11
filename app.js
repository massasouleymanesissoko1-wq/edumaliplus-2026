
    const images = [
        "images/image 20.jpg",
        "images/image 16.jpg",
        "images/image 17.jpg",
        "images/image 10.jpg",
        "images/image 15.jpg"
    ];

    let index = 0;
    const slide = document.getElementById("slide");

    setInterval(() => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slide.src = images[index];
    }, 4000); // change toutes les 4 secondes

