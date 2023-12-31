var images = [
  'https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg',
  'https://gartcod.cloud/_next/static/media/mobile.548cdf6e.svg',
  'https://gartcod.cloud/_next/static/media/chrome.db58996d.svg'
];
var colors = ['#d4d4d4', '#fca5a5', '#fde047']; // Replace with your desired colors
var currentIndex = 0;
var imageElement = document.getElementById('image');
var specialTextElements = document.querySelectorAll('.special-text');
var specialBackground = document.getElementById('special-background');

function changeImageAndColor() {
  // Fade out the image
  imageElement.style.opacity = 0;

  // After a short delay, change the image and colors, then fade in
  setTimeout(function () {
    imageElement.src = images[currentIndex];
    specialBackground.style.background = colors[currentIndex];

    specialTextElements.forEach(function (element) {
      element.style.color = colors[currentIndex];
    });

    // Fade in the image
    imageElement.style.opacity = 1;

    currentIndex = (currentIndex + 1) % images.length;
  }, 500); // Adjust the delay as needed
}

changeImageAndColor();
setInterval(changeImageAndColor, 2000);



// Set the date and time for the event (January 31 at 13:00:00)
var eventDate = new Date('2024-01-31T13:00:00').getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  var currentDate = new Date().getTime();
  var timeDifference = eventDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Event has started!';
  } else {
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }
}