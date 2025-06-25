const dogContainer = document.getElementById('dogContainer');
const breedInput = document.getElementById('breedInput');

async function loadImages() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await response.json();
  displayImages(data.message);
}

function displayImages(images) {
  const filter = breedInput.value.toLowerCase();
  dogContainer.innerHTML = ''; // Clear previous

  const filtered = images.filter(url => url.includes(filter));

  filtered.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    dogContainer.appendChild(img);
  });

  if (filtered.length === 0) {
    dogContainer.innerHTML = '<p>No dogs match that breed.</p>';
  }
}

breedInput.addEventListener('input', loadImages);

// Load images on page load
loadImages();
