window.onload = function() {
    var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    document.getElementById('counter').textContent = currentValue;
  };
    document.addEventListener("DOMContentLoaded", function() {
  // Get the input element
  window.onload = function() {
    var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    document.getElementById('counter').textContent = currentValue;
  };
  var searchInput = document.getElementById("searchInput");


  // Listen for keyup event
  searchInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
          incrementCounter()
          var query = searchInput.value;
          var encodedQuery = encodeURIComponent(query);
          var searchURL = "https://www.google.com/search?q=" + encodedQuery; // Google search URL
          window.location.href = searchURL; // Redirect to Google search URL on the current tab
          var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    // Increment the counter value by
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchIcons = document.querySelectorAll('.search-icons');
  const assDiv = document.querySelector('.ass');

  searchIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          assDiv.classList.add('searchIcon');
          setTimeout(() => {
              assDiv.classList.remove('searchIcon');

              var query = document.getElementById('searchInput').value;

              // Encode the query to use in the URL
              var encodedQuery = encodeURIComponent(query);

              // Create the Google search URL
              var searchURL = "https://www.google.com/search?q=" + encodedQuery; // Google search URL

              // Redirect to Google search URL on the current tab
              window.location.href = searchURL;
              var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    incrementCounter()
          }, 1000);
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
   const toggle = document.querySelector('.toggle');
   const layoutContainer = document.querySelector('.website-layout-container');

   toggle.addEventListener('click', function() {
       layoutContainer.classList.toggle('show');
   });
});

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function showCustomColor() {
  var customColorInput = document.getElementById('custom-color');
  customColorInput.style.display = 'inline-block';
}

function addCustomColor() {
  var customColorInput = document.getElementById('custom-color');
  var customColor = customColorInput.value;
  if (/^#[0-9A-F]{6}$/i.test(customColor)) {
      var colorCircle = document.createElement('div');
      colorCircle.className = 'color-circle';
      colorCircle.style.backgroundColor = customColor;
      colorCircle.addEventListener('click', function() {
          changeColor(customColor);
      });
      var addButton = document.getElementById('add-button');
      document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
      customColorInput.value = '';
      customColorInput.style.display = 'none';

      // Retrieve existing colors array from local storage or initialize an empty array
      var colors = JSON.parse(localStorage.getItem('customColors')) || [];
      // Push the new color into the array
      colors.push(customColor);
      // Save the updated colors array to local storage
      localStorage.setItem('customColors', JSON.stringify(colors));
  } else {
      alert('Please enter a valid hex color code.');
  }
}

window.onload = function() {
  var storedColors = JSON.parse(localStorage.getItem('customColors'));
  if (storedColors && storedColors.length > 0) {
      storedColors.forEach(function(color) {
          var colorCircle = document.createElement('div');
          colorCircle.className = 'color-circle';
          colorCircle.style.backgroundColor = color;
          colorCircle.addEventListener('click', function() {
              changeColor(color);
          });
          var addButton = document.getElementById('add-button');
          document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
      });
  }
};


let count = 2;

function moveBoth() {
  const open = document.querySelector('.open');
  const sidebar = document.querySelector('.sidebar');

  if (count % 2 === 0) {
      open.style.transform = 'translate(43vw, 0px) rotate(270deg)';
      sidebar.style.transform = 'translate(48vw, 0px)';
      console.log('Sidebar opened'); /* DONT PUT YOUR IP IN HERE!*/
  } else {
  open.style.transform = 'translate(49vw, 0px) rotate(90deg)';
      sidebar.style.transform = 'translate(53vw, 0px)';
      var themeChanger = document.getElementById('theme-changer');
      themeChanger.style.display = "none";
      console.log('Sidebar closed');
  }

  count++;
}




function incrementCounter() {
    // Get the current counter value from localStorage or initialize it to 0
    var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    // Increment the counter value by 1
    currentValue++;
    // Update the counter value in localStorage
    localStorage.setItem('counter', currentValue);
    // Update the counter value on the page
    document.getElementById('counter').textContent = currentValue;
  }



  // Load the counter value from localStorage on page load
  window.onload = function() {
    var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    document.getElementById('counter').textContent = currentValue;
  };




  function resetCounter() {
  // Set the counter value to 0
  var currentValue = 0;
  // Update the counter value in localStorage
  localStorage.setItem('counter', currentValue);
  // Update the counter value on the page
  document.getElementById('counter').textContent = currentValue;
}



document.addEventListener("DOMContentLoaded", function() {
// Get reference to the color element
var colorElement = document.getElementById("brunebot");

// Get reference to the colornav element
var colorNavElement = document.getElementById("pro-feature");

// Add click event listener to the color element
colorElement.addEventListener("click", function() {
  // Check if colornav is currently hidden
  if (colorNavElement.style.display === "none") {
    // If hidden, show colornav by setting display to block
    colorNavElement.style.display = "block";

    // Wait for 3 seconds, then hide colornav again
    wait(10000, () => {
      colorNavElement.style.display = "none";
    });
  } else {
    // If already shown, hide colornav by setting display to none
    colorNavElement.style.display = "none";
  }
});
});

// Simple wait function
function wait(milliseconds, callback) {
setTimeout(callback, milliseconds);
}


function showThemeChanger() {
  // Get reference to the theme changer element
  var themeChanger = document.getElementById('theme-changer');

  // Toggle the display property of the theme changer
  if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
      themeChanger.style.display = "block";
  } else {
      themeChanger.style.display = "none";
  }
}


function showTimetable() {
    console.log("not implemented");
}

function showShop() {
  // Get reference to the theme changer element
  var themeChanger = document.querySelector('.container');

  // Toggle the display property of the theme changer
  if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
      themeChanger.style.display = "block";
  } else {
      themeChanger.style.display = "none";
  }
}

// Initialize variables
let brunglePoints = parseInt(localStorage.getItem('counter')); // Initialize with counter value or default value
let boughtItems = 0;

// Update display
function updateDisplay() {
document.getElementById('brunglePoints').textContent = brunglePoints;
document.getElementById('boughtItems').textContent = boughtItems;
}

// Buy item function
function buyItem(price) {
let brunglePointsElement = document.getElementById('brunglePoints');
let boughtItemsElement = document.getElementById('boughtItems');

if (brunglePoints >= price) {
  brunglePoints -= price;
  boughtItems++;
  brunglePointsElement.textContent = brunglePoints;
  boughtItemsElement.textContent = boughtItems;
  // Update cloud variable here
  updateCloudVariable(brunglePoints, boughtItems);
  alert('Item bought successfully!');
} else {
  alert('Not enough Brungle Points!');
}
}

// Simulate updating cloud variable
function updateCloudVariable(points, items) {
// You can replace this with your actual cloud variable update logic
console.log(`Cloud variable updated: Brungle Points = ${points}, Bought Items = ${items}`);
}

// Initial display update
updateDisplay();


function toggleTables() {
    var table1 = document.getElementById('table1');
    var table2 = document.getElementById('table2');

    if (table1.style.display === 'block') {
      table1.style.display = 'none';
      table2.style.display = 'block';
    } else {
      table1.style.display = 'block';
      table2.style.display = 'none';
    }
  }

  // admin tools

  function increaseCounterBy10000() {
// Get the current counter value from localStorage or initialize it to 0
let currentValue = parseInt(localStorage.getItem('counter')) || 0;

// Increase the counter value by 10000
currentValue += 10000;

// Update the counter value in localStorage
localStorage.setItem('counter', currentValue.toString());

// Display the updated counter value
console.log('Counter increased by 10000. New value: ' + currentValue);
}

function changeBGimage(url) {
  document.body.style.backgroundImage = "url('" + url + "')";
  document.body.style.backgroundSize = "100vw auto";
}

// Change background
document.getElementById('change-bg-btn').addEventListener('click', function() {
  var imageUrl = prompt("Enter the URL of the image you want as background:");
  if (imageUrl) {
    changeBGimage(url);
  }
});

