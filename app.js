const altitudeEl = document.querySelector('.alt');
const longitudeEl = document.querySelector('.long');
const latitudeEl = document.querySelector('.lat');
const errorEl = document.querySelector('.error');

const success = result => {
  const altitude = result.coords.altitude;
  const latitude = result.coords.latitude;
  const longitude = result.coords.longitude;
  altitudeEl.textContent = `Altitude: ${altitude}`;
  latitudeEl.textContent = `Latitude: ${latitude}`;
  longitudeEl.textContent = `Longitude: ${longitude}`;
};

const error = err => {
  errorEl.textContent = err.message;
};

if ('geolocation' in navigator) {
  window.navigator.geolocation.getCurrentPosition(success, error);
}
