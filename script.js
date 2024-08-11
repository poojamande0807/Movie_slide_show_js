const movieImages = [
"https://via.placeholder.com/800x400.png?text=Movie+1",
  "https://via.placeholder.com/800x400.png?text=Movie+2",
  "https://via.placeholder.com/800x400.png?text=Movie+3",
  "https://via.placeholder.com/800x400.png?text=Movie+4",
  "https://via.placeholder.com/800x400.png?text=Movie+5",
    
];

let currentIndex = 0;
const slideshowElement = document.getElementById("slideshow");
slideshowElement.src = movieImages[currentIndex];
function updateSlideshow() {
  currentIndex = (currentIndex + 1) % movieImages.length;
  slideshowElement.src = movieImages[currentIndex];
}
setInterval(updateSlideshow, 2000);

