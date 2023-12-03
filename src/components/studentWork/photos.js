const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { url: "https://www.nifafinearts.com/images/homegallery/img1.jpg", width: 860, height: 800 },

    { url: "https://www.nifafinearts.com/images/homegallery/img2.jpg", width: 860, height: 1620 },

    { url: "https://www.nifafinearts.com/images/homegallery/img3.jpg", width: 860, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img4.jpg", width: 860, height: 721 },
    { url: "https://www.nifafinearts.com/images/homegallery/img5.JPG", width: 8000, height: 2160 },
    { url: "https://www.nifafinearts.com/images/homegallery/img6.JPG", width: 1080, height: 607 },
    { url: "https://www.nifafinearts.com/images/homegallery/img7.jpg", width: 1080, height: 608 },
    { url: "https://www.nifafinearts.com/images/homegallery/img8.jpg", width: 1080, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img9.jpg", width: 1080, height: 1549 },
    { url: "https://www.nifafinearts.com/images/homegallery/img10.jpg", width: 1080, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img11.jpg", width: 900, height: 694 },
    { url: "https://www.nifafinearts.com/images/homegallery/img12.jpg", width: 2160, height: 1620 },
    { url: "https://www.nifafinearts.com/images/homegallery/img13.jpg", width: 1080, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img14.jpeg", width: 1080, height: 1440 },
    { url: "https://www.nifafinearts.com/images/homegallery/img15.jpeg", width: 1080, height: 1620 },
    { url: "https://www.nifafinearts.com/images/homegallery/img16.jpeg", width: 1080, height: 810 },
    { url: "https://www.nifafinearts.com/images/homegallery/img17.jpg", width: 900, height: 1440 },

    { url: "https://www.nifafinearts.com/images/homegallery/img18.jpeg", width: 1080, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img19.jpg", width: 900, height: 1080 },
    { url: "https://www.nifafinearts.com/images/homegallery/img20.jpeg", width: 800, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img21.jpeg", width:600, height: 720 },
    { url: "https://www.nifafinearts.com/images/homegallery/img22.jpg", width:1920, height: 650 },

];

const photos = unsplashPhotos.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
}));

export default photos;
