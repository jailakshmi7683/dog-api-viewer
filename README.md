# 🐶 Dog API Viewer

A modern, responsive web application that displays random dog images using the [Dog CEO Public API](https://dog.ceo/dog-api/). Users can refresh to load new images and filter them by breed using a search bar.

---

## 🚀 Live Demo

👉 [Click here to view the app](https://jailakshmi7683.github.io/dog-api-viewer/)

---

## 📡 API Used

This project uses the [Dog CEO API](https://dog.ceo/dog-api/), a free public API for dog images.

### Main Endpoints:
- `https://dog.ceo/api/breeds/image/random/10`  
  ➤ Fetches 10 random dog images.
  
- `https://dog.ceo/api/breeds/list/all` *(optional)*  
  ➤ Returns a list of all available dog breeds (not used in this project but useful for enhancements).

---

## 🛠 How It Works

1. **Image Loading**: On page load and when the "Refresh" button is clicked, the app fetches 10 random dog images from the API.
2. **Display**: Images are displayed in a responsive grid layout using CSS Grid.
3. **Filtering**: The user can type a breed name into the input field to filter the images based on the breed (detected from the image URL).
4. **Styling**: The UI features a modern look with glassmorphism design, rounded cards, and responsive layout that adapts to different screen sizes.

---

## ✨ Features

- 🔄 Refresh button for new images  
- 🔍 Live breed name filter  
- 🖼 Clean, modern user interface  
- 📱 Fully responsive layout  
- 💡 Built with plain HTML, CSS & JavaScript (no frameworks)
