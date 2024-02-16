// Fetch data from People in Space API
fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        const people = data.people;
        const total = data.number;

        // Display number of people in space
        const totalDiv = document.getElementById('total');
        totalDiv.innerHTML = `<h2>Total number of people in space: ${total}</h2>`;

        // Display astronaut profiles
        const peopleDiv = document.getElementById('people');

people.forEach(person => {
    const personElement = document.createElement('div');
    personElement.classList.add('people');
    const nameHeader = document.createElement('h3');
    const craftParagraph = document.createElement('p');
    
    nameHeader.textContent = person.name;
    
    
    personElement.appendChild(nameHeader);
    personElement.appendChild(craftParagraph);
    
    // Add click event listener to the name header
    nameHeader.addEventListener('click', () => {
        alert(`On board: ${person.craft}`);
    });
    
    peopleDiv.appendChild(personElement);
});

    })
    .catch(error => console.error('Error fetching data:', error));

// Initialize Leaflet map
// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Fetch ISS position data and add marker to the map
// Fetch ISS position data from an API (for example)
fetch('http://api.open-notify.org/iss-now.json')
  .then(response => response.json())
  .then(data => {
    const lat = data.iss_position.latitude;
    const lon = data.iss_position.longitude;
    
    // Perform reverse geocoding to get the address from latitude and longitude
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
      .then(response => response.json())
      .then(locationData => {
        const address = locationData.display_name;
        
        // Add marker for ISS with current location as address
        L.marker([lat, lon]).addTo(map)
          .bindPopup('<b>International Space Station (ISS)</b><br>Current location: ' + lat + ", "  + lon )
          .openPopup();
      })
      .catch(error => console.error('Error fetching location:', error));
  })
  .catch(error => console.error('Error fetching ISS position:', error));

// Fetch data from APOD API to get the image URL
