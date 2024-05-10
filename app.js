
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
         colorCircle.setAttribute('onclick', 'changeColor("' + customColor + '")');
         var addButton = document.getElementById('add-button');
         document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
         customColorInput.value = '';
         customColorInput.style.display = 'none';
     } else {
         alert('Please enter a valid hex color code.');
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
    let currentValue = parseInt(localStorage.getItem('counter')) || 0;
    currentValue++;
    localStorage.setItem('counter', currentValue);
    document.getElementById('counter').textContent = currentValue;
    lastIncrementTime = currentTime;
  }
  checker++;
}

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
    console.log('Sidebar opened by 146.90.75.207');
  } else {
    open.style.transform = 'translate(49vw, 0px) rotate(90deg)';
    sidebar.style.transform = 'translate(53vw, 0px)';
    sidebar.style.height = "auto";
    sidebar.style.width = "auto";
    console.log('Sidebar closed by 146.90.75.207');
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
function iamgaybecozitypedthisin() {
  let currentValue = parseInt(localStorage.getItem('counter')) || 0;
  currentValue += 10000;
  localStorage.setItem('counter', currentValue.toString());
  console.log('Counter increased by 10000. New value: ' + currentValue);
}

// Other functions...

// Remaining functions...

// Main function to set up event listeners and initial state
document.addEventListener("DOMContentLoaded", function() {
  // Initial clock update
  updateClock();
  setInterval(updateClock, 1000);

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

  // Event listener for toggle theme changer
  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', toggleThemeChanger);

  // Event listener for color element click
  const colorElement = document.getElementById("brunebot");
  colorElement.addEventListener("click", handleColorElementClick);
});

// Other initialization code...
// Initialize variables
let count = 2;
let checker = 0;
let lastIncrementTime = 0;

// Initial display update
updateDisplay();










window.onload = function() {
    setTimeout(function() {
        
        const newsElements = document.querySelector('.news');
        
            newsElements.style.display = 'none';
    }, 1500); 
};











const abras = document.querySelector('.timetable-container');
abras.style.display = "none";

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



function toggleThemes() {
 const themeChanger = document.getElementById('theme-changer');
   // Toggle the display property of the theme changer
    if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
        themeChanger.style.display = "block";
    } else {
        themeChanger.style.display = "none";
    }
}






let brunglePoints = 100; // Example initial points
let boughtItems = 0; // Example initial bought items count

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
function updateDisplay() {
  let brunglePointsElement = document.getElementById('brunglePoints');
  let boughtItemsElement = document.getElementById('boughtItems');
  brunglePointsElement.textContent = brunglePoints;
  boughtItemsElement.textContent = boughtItems;
}

updateDisplay(); // Call the initial display update function
