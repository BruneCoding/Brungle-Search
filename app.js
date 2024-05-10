console.log("there is a near 100% chance of errors occurring. I (wilbur) do not know why, but i'm not brunecoding so :shrug:");

//Initalise Variables
var count = 2;
var checker = 0;
var lastIncrementTime = 0;

// Function to change background color
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to display custom color input
function showCustomColor() {
  var customColorInput = document.getElementById('custom-color');
  customColorInput.style.display = 'inline-block';
}

// Function to add custom color
function addCustomColor() {
  var customColorInput = document.getElementById('custom-color');
  var customColor = customColorInput.value;
  
  if (/^#[0-9A-F]{6}$/i.test(customColor)) {
    var colorCircle = document.createElement('div');
    colorCircle.className = 'color-circle';
    colorCircle.style.backgroundColor = customColor;
    colorCircle.setAttribute('onclick', 'changeColor("' + customColor + '")');
    var addButton = document.getElementById('add-button');
    document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
    customColorInput.value = '';
    customColorInput.style.display = 'none';
  } else {
    alert('Please enter a valid 6-digit hex color code.');
  }
}

// Function to update the clock
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  if (!hourHand || !minuteHand || !secondHand) {
    console.error("Clock hands not found in the DOM");
    return;
  }

  // Calculate rotation angles for hour, minute, and second hands
  const hourRotation = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteRotation = minute * 6 + (second / 60) * 6;
  const secondRotation = second * 6;

  // Apply rotation transform to the clock hands
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Function to toggle theme changer
function toggleThemeChanger() {
  const layoutContainer = document.querySelector('.website-layout-container');
  layoutContainer.classList.toggle('show');
}

// Function to handle click on color element
function handleColorElementClick() {
  const colorNavElement = document.getElementById("pro-feature");
  
  if (colorNavElement.style.display === "none") {
    colorNavElement.style.display = "block";
    wait(10000, () => {
      colorNavElement.style.display = "none";
    });
  } else {
    colorNavElement.style.display = "none";
  }
}

// Wait function
function wait(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}

// Function to increment the counter
function incrementCounter() {
  const currentTime = Date.now();
  
  if (currentTime - lastIncrementTime >= 2500 && checker % 2 === 0) {
    // Get the current counter value from localStorage or initialize it to 0
    let currentValue = parseInt(localStorage.getItem('counter')) || 0;
    // Increment the counter value by 1
    currentValue++;
    // Update the counter value in localStorage
    localStorage.setItem('counter', currentValue);
    // Update the counter value on the page
    document.getElementById('counter').textContent = currentValue;
    // Update last increment time
    lastIncrementTime = currentTime;
  }
  checker++;
}

// Load the counter value from localStorage on page load
window.onload = function() {
  var currentValue = parseInt(localStorage.getItem('counter')) || 0;
  document.getElementById('counter').textContent = currentValue;
  document.getElementById('brunglePoints').textContent = currentValue;
};

// Function to reset the counter
function resetCounter() {
  const currentValue = 0;
  localStorage.setItem('counter', currentValue);
  document.getElementById('counter').textContent = currentValue;
}

// Function to move both elements
function moveBoth() {
  const open = document.querySelector('.open');
  const sidebar = document.querySelector('.sidebar');

  if (count % 2 === 0) {
    open.style.transform = 'translate(40vw, 0px) rotate(270deg)';
    sidebar.style.transform = 'translate(45vw, 0px)';
    sidebar.style.height = "80%";
    sidebar.style.width = "12.5%";
    console.log('Sidebar opened');
  } else {
    open.style.transform = 'translate(49vw, 0px) rotate(90deg)';
    sidebar.style.transform = 'translate(53vw, 0px)';
    sidebar.style.height = "auto";
    sidebar.style.width = "auto";
    console.log('Sidebar closed');
  }

  count++;
}

// Function to toggle tables
function toggleTables() {
  const table1 = document.getElementById('table1');
  const table2 = document.getElementById('table2');

  if (table1.style.display === 'block') {
    table1.style.display = 'none';
    table2.style.display = 'block';
  } else {
    table1.style.display = 'block';
    table2.style.display = 'none';
  }
}

// Function to increase the counter value by 10000
function increaseCounterBy10000() {
  let currentValue = parseInt(localStorage.getItem('counter')) || 0;
  currentValue += 10000;
  localStorage.setItem('counter', currentValue.toString());
  console.log('Counter increased by 10000. New value: ' + currentValue);
}


// Main function to set up event listeners and initial state
document.addEventListener("DOMContentLoaded", function() {
  // Initial clock update
  updateClock();
  setInterval(updateClock, 1000);

  var searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keyup", function(event) {
    const searchIcons = document.querySelectorAll('.search-icons');
    const assDiv = document.querySelector('.ass');
    assDiv.classList.add('searchIcon');
    setTimeout(() => {
      assDiv.classList.remove('searchIcon');

      if (event.keyCode === 13) {
        incrementCounter();
        var query = searchInput.value;
        var encodedQuery = encodeURIComponent(query);
        var searchURL = "https://www.google.com/search?q=" + encodedQuery; // Google search URL
        window.location.href = searchURL; // Redirect to Google search URL on the current tab
        var currentValue = parseInt(localStorage.getItem('counter')) || 0;
        brunglePoints = currentValue+1;
      };
    });
  });
});

// Event listener for toggle theme changer
try {
  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', toggleThemeChanger);
} catch {
  console.log("Error occurred while adding event listener for theme changer toggle");
}

// Event listener for color element click
try {
  const colorElement = document.getElementById("brunebot");
  colorElement.addEventListener("click", handleColorElementClick);
} catch {
  console.log("Error occurred while adding event listener for color element");
}

try {
  const abras = document.querySelector('.timetable-container');
  abras.style.display = "none";
} catch {
  console.log("Error occurred while setting timetable-container display to none");
}

// Function to show/hide timetable
function showTimetable() {
  const themeChanger = document.querySelector('.timetable-container');
  if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
    themeChanger.style.display = "block";
  } else {
    themeChanger.style.display = "none";
  }
}

// Function to show/hide shop
function showShop() {
  const themeChanger = document.querySelector('.container');
  if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
    themeChanger.style.display = "block";
  } else {
    themeChanger.style.display = "none";
  }
}

// Function to toggle themes
function toggleThemes() {
  const themeChanger = document.getElementById('theme-changer');
  // Toggle the display property of the theme changer
  if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
    themeChanger.style.display = "block";
  } else {
    themeChanger.style.display = "none";
  }
}

// Initialize variables
var brunglePoints = parseInt(localStorage.getItem('counter')) || 'loading'; // Initialize with counter value or default value
var boughtItems = 0;

// Update display
function updateDisplay() {
  try {
    document.getElementById('brunglePoints').textContent = brunglePoints;
    document.getElementById('boughtItems').textContent = boughtItems;
  } catch {
    console.log("Error occurred while updating display");
  }
}

// Update local storage and display
function updateLocalStorageAndDisplay() {
  localStorage.setItem('counter', brunglePoints.toString());
  updateDisplay();
}

// Update cloud variable representing points
function updateCloudVariable(points) {
  // Make an HTTP request to update the cloud variable
  // Replace 'YOUR_UPDATE_ENDPOINT' with the actual endpoint URL
  fetch('YOUR_UPDATE_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ points: points })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update cloud variable');
      }
      console.log('Cloud variable updated successfully');
    })
    .catch(error => {
      console.error('Error updating cloud variable:', error);
    });
}

// Buy item function
function buyItem(price) {
  if (brunglePoints >= price) {
    brunglePoints -= price;
    boughtItems++;
    updateLocalStorageAndDisplay();
    updateCloudVariable(brunglePoints); // Update cloud variable after purchase
    alert('Item bought successfully!');
  } else {
    alert('Not enough Brungle Points!');
  }
}

// Initial display update
updateDisplay();