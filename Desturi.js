
const images = [
  "https://bit.ly/48fvDw6",
  "https://bit.ly/480ngoz",
  "https://bit.ly/3GPChgJ"
];
let currentIndex = 0;

function changeImage() {
  const displayedImage = document.getElementById("displayedImage");

  currentIndex = (currentIndex + 1) % images.length;
  displayedImage.src = images[currentIndex];
}

