document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submitAnswerBtn').addEventListener('click', function () {
    // Check if Geolocation is supported
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Access the user's latitude and longitude
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log('User Coordinates:', latitude, longitude);

          // Call a function to handle the location data
          handleLocation(latitude, longitude);
        },
        function (error) {
          // Handle errors if any
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      // Geolocation is not supported
      alert('Geolocation is not supported in this browser.');
    }
  });

  // Function to handle the location data
  function handleLocation(latitude, longitude) {
    // Add logic to check if the user is near the specific location
    const locationCoordinates = { latitude: 48.73303109761628, longitude: -122.48631537301446 };

    console.log('Location Coordinates:', locationCoordinates.latitude, locationCoordinates.longitude);

    if (isNearLocation(latitude, longitude, locationCoordinates)) {
      // Redirect to a new page (replace 'next_location.html' with the actual page URL)
      window.location.href = 'next_location.html';
    } else {
      alert('You are not near the specified location.');
    }
  }

  // Function to check if the user is near the specified location
  function isNearLocation(userLatitude, userLongitude, locationCoordinates) {
    const threshold = 0.001; // Adjust this value based on your proximity criteria
    const latDiff = Math.abs(userLatitude - locationCoordinates.latitude);
    const lonDiff = Math.abs(userLongitude - locationCoordinates.longitude);

    console.log('Latitude Difference:', latDiff);
    console.log('Longitude Difference:', lonDiff);

    return latDiff < threshold && lonDiff < threshold;
  }
});
