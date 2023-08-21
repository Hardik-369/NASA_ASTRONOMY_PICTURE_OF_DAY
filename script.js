const form = document.getElementById('date-form');
const imageInfo = document.getElementById('image-info');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const dateInput = form.elements.date.value;
  const apiKey = 'API_KEY_HERE'; // Replace with your NASA API key

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    imageInfo.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.explanation}</p>
      <img src="${data.url}" alt="${data.title}">
    `;

    imageInfo.style.display = 'block'; // Display the box
  } catch (error) {
    console.error('Error fetching data:', error);
    imageInfo.innerHTML = '<p>Error fetching APOD image data.</p>';
  }
});
