
        document.addEventListener("DOMContentLoaded", function() {
  // Call updateClock function initially
  updateClock();

  // Call updateClock function every second
  setInterval(updateClock, 1000);
});
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
         colorCircle.setAttribute('onclick', 'changeColor("' + customColor + '")');
         var addButton = document.getElementById('add-button');
         document.getElementById('theme-changer').insertBefore(colorCircle, addButton);
         customColorInput.value = '';
         customColorInput.style.display = 'none';
     } else {
         alert('Please enter a valid hex color code.');
     }
 }

window.addEventListener('load', function() {
    var countdown = 25.69420; // 7.5 seconds * 10 (convert to tenths of a second)
    var countdownInterval = setInterval(function() {
        countdown--;
        var countdownSeconds = countdown / 10; // Convert back to seconds
        var countdownDisplay = document.querySelector('.news h3');
        if (countdownDisplay) {
            countdownDisplay.textContent = "Removing in " + countdownSeconds.toFixed(1) + " Seconds";
        }
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            var newsDiv = document.querySelector('.news');
            if(newsDiv) {
                newsDiv.style.display = 'none';
            }
        }
    }, 100); // 0.1 second intervals
});


 let count = 2;

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

let checker = 0;
let lastIncrementTime = 0;

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

const abras = document.querySelector('.timetable-container');
abras.style.display = "none";

function showTimetable() {
    // Get reference to the theme changer element
    var themeChanger = document.querySelector('.timetable-container');

    // Toggle the display property of the theme changer
    if (themeChanger.style.display === "none" || themeChanger.style.display === "") {
        themeChanger.style.display = "block";
    } else {
        themeChanger.style.display = "none";
    }
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
let brunglePoints = parseInt(localStorage.getItem('counter')) || 1000; // Initialize with counter value or default value
let boughtItems = 0;

// Update display
function updateDisplay() {
  document.getElementById('brunglePoints').textContent = brunglePoints;
  document.getElementById('boughtItems').textContent = boughtItems;
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
  let brunglePointsElement = document.getElementById('brunglePoints');
  let boughtItemsElement = document.getElementById('boughtItems');
  
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

    function infa() {
  // Get the current counter value from localStorage or initialize it to 0
  let currentValue = parseInt(localStorage.getItem('counter')) || 0;
  
  // Increase the counter value by 10000
  currentValue += 10000;
  
  // Update the counter value in localStorage
  localStorage.setItem('counter', currentValue.toString());
  
  // Display the updated counter value
  console.log('Counter increased by 10000. New value: ' + currentValue);
}

// Call the function to increase the counter value by 10000
increaseCounterBy10000();



function updateClock() {
  console.log("Updating clock...");
  
  const now = new Date();
  console.log("Current time:", now);

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  console.log("Hour:", hour, "Minute:", minute, "Second:", second);

  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  if (!hourHand || !minuteHand || !secondHand) {
    console.error("Clock hands not found in the DOM");
    return;
  }

  console.log("Clock hands found in the DOM");

  // Calculate rotation angles for hour, minute, and second hands
  const hourRotation = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteRotation = minute * 6 + (second / 60) * 6;
  const secondRotation = second * 6;

  console.log("Hour rotation:", hourRotation);
  console.log("Minute rotation:", minuteRotation);
  console.log("Second rotation:", secondRotation);

  // Apply rotation transform to the clock hands
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;

  console.log("Clock updated successfully");
}


