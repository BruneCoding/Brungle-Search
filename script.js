//Util functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//I'd remove this and replace with sleep() but you can use this synchronously so learn how to async first
function wait(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


const icon = document.querySelector('.fa-solid');
const box = document.querySelector('.ext-icon');
const content = document.querySelector('.underlay-content');
const underlay = document.querySelector('.underlay');
const fat = document.querySelector('#fat');
const extTXT = document.querySelector('#extTXT');
const bfeature = document.querySelector('#bfeature');

bfeature.style.display = "none";
extTXT.style.display = "none";
underlay.style.maxWidth = "85px";
underlay.style.background = "transparent";
  

function show() {
  var currentDisplayStyle = content.style.display; 

  if (currentDisplayStyle === "none") {
    bfeature.style.display = "block";
extTXT.style.display = "block";
underlay.style.maxWidth = "300px";
underlay.style.background = "#f3f3f3";
    
    content.style.display = "block";
    box.style.border = "5px solid #edf5e3";
    box.style.transform = "scale(1.1)";
    box.style.background = "#c6d5b4";
    icon.style.color = "#edf5e3";
    icon.className = "fa-solid fa-shapes fa-bounce fa-2xl";

    setTimeout(() => {
      icon.className = "fa-solid fa-shapes fa-2xl";
    }, 1000); 
  } else {
    bfeature.style.display = "none";
extTXT.style.display = "none";
underlay.style.maxWidth = "85px";
underlay.style.background = "transparent";
    
    content.style.display = "none";
    box.style.border = "5px solid #f9f9f9";
    box.style.transform = "scale(1)";
    box.style.background = "#e5e5e5";
    icon.style.color = "#f9f9f9";
    icon.className = "fa-solid fa-shapes fa-bounce fa-2xl";

    setTimeout(() => {
      icon.className = "fa-solid fa-shapes fa-2xl";
      icon.style.color = "#f9f9f9";
      box.style.border = "5px solid #f9f9f9";
      box.style.transform = "scale(1)";
      box.style.background = "#e5e5e5";
    }, 1000); 
  }
}










function openMaps() {
 window.location.href = "https://maps-brungle.pages.dev/";
  alert('Welcome to Brungle Maps BETA! Please give  me FEEDBACK on your EXPERIENCE.')
}





const full = document.querySelector('.search-xd');
document.getElementById("inputText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        summarizeAndSearch();
        incrementCounter();
    }
});

function getSearchResults(query) {
  full.style.display = "block";
    var apiEndpoint = "https://www.googleapis.com/customsearch/v1";
    var cx = "564f027734c9441fe"; 
    var apiKey = "AIzaSyDIZJhGxmt_TZwEHATT25DmRk29VV_2xgU"; 

    var url = apiEndpoint + "?key=" + apiKey + "&cx=" + cx + "&q=" + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var searchResultsDiv = document.getElementById("searchResults");
            searchResultsDiv.innerHTML = "";

            if (data.items) {
                data.items.forEach(item => {
                    var resultElement = document.createElement("div");
                    resultElement.classList.add("searchResult");

                    var titleElement = document.createElement("h2");
                    titleElement.innerText = item.title;

                    var snippetElement = document.createElement("p");
                    snippetElement.innerText = item.snippet;

                    var dateElement = document.createElement("div");
                    dateElement.classList.add("date");
                    var formattedDate = new Date(item.pagemap.metatags[0]["og:updated_time"]).toLocaleDateString();
                    dateElement.innerText = "Published on: " + formattedDate;

                    var imageElement = document.createElement("img");
                    if (item.pagemap.cse_image) {
                        imageElement.src = item.pagemap.cse_image[0].src;
                    } else {
                        imageElement.style.display = "none";
                    }

                    var linkElement = document.createElement("a");
                    linkElement.href = item.link;
                    linkElement.innerText = "Result from " + new URL(item.link).hostname;
                    linkElement.style.display = "block"; // Make sure the link is displayed as a block element

                    resultElement.appendChild(titleElement);
                    resultElement.appendChild(dateElement);
                    resultElement.appendChild(imageElement);
                    resultElement.appendChild(snippetElement);
                    resultElement.appendChild(linkElement);

                    searchResultsDiv.appendChild(resultElement);
                });
            } else {
                searchResultsDiv.innerHTML = "No search results found.";
            }
        })
        .catch(error => {
            console.error("Error fetching search results:", error);
        });
}

function summarizeText(text) {
    return text.substring(0, 100) + "...";
}

function summarizeAndSearch() {
    var inputText = document.getElementById("inputText").value;
    var summaryDiv = document.getElementById("summary");
    var searchResultsDiv = document.getElementById("searchResults");

    summaryDiv.innerHTML = "";
    searchResultsDiv.innerHTML = "";

    var summary = summarizeText(inputText);
    summaryDiv.innerText = "Searching Results for " + summary + " on Brungle!";

    getSearchResults(inputText);
}

function SummarizeAndSearch() {
    var inputText = document.getElementById("searchInput").value;
    var summaryDiv = document.getElementById("summary");
    var searchResultsDiv = document.getElementById("searchResults");

    summaryDiv.innerHTML = "";
    searchResultsDiv.innerHTML = "";

    var summary = summarizeText(inputText);
    summaryDiv.innerText = "Searching Results for " + summary + " on Brungle!";

    getSearchResults(inputText);
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

window.onload = function() {
    var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    document.getElementById('counter').textContent = currentValue;
  };
  var searchInput = document.getElementById("searchInput");


  // Listen for keyup event
  searchInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
          incrementCounter()
          SummarizeAndSearch()
          var currentValue = parseInt(localStorage.getItem('counter')) || 0;
    
      }
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
  setCookie('currentBG', color, 365);
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

async function holdlinks() {
  links = document.getElementById('links');
  showlinks = document.getElementById('showlinks');
  links.classList = "website-layout-container show";
  showlinks.style = "transform: scale(1.025); margin-top: 7.5px; border: 0.1px solid #d1d1d1; margin-bottom: 35px;";
  await sleep(1000);
}

function unholdlinks () {
  links = document.getElementById('links');
  showlinks = document.getElementById('showlinks');
  links.classList = "website-layout-container";
  showlinks.style = "";
}

async function colourNav() {
  // Get reference to the colornav element
  var colorNavElement = document.getElementById("pro-feature");
  // Check if colornav is currently hidden
  if (colorNavElement.style.display === "none") {
    // If hidden, show colornav by setting display to block
    colorNavElement.style.display = "block";
    // Wait for 10 seconds, then hide colornav again
    await sleep(10000);
    colorNavElement.style.display = "none";
  } else {
    // If already shown, hide colornav by setting display to none
    colorNavElement.style.display = "none";
  }
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
  setCookie('currentBG', url, 365);
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


document.addEventListener('DOMContentLoaded', function(){
  //Check and apply bg colour/image
  backgroundValue = getCookie('currentBG');
  if (backgroundValue === null || backgroundValue === undefined || backgroundValue === "") {
    setCookie('currentBG', '#036b52', 365);
  } else if (backgroundValue.startsWith('http')) {
    changeBGimage(backgroundValue);
  } else if (backgroundValue.startsWith('#')) {
    changeColor(backgroundValue)
  } else {
    console.error("invalid background: " + backgroundValue);
  }

  //Update counter
  var currentValue = parseInt(localStorage.getItem('counter')) || 0;
  document.getElementById('counter').textContent = currentValue;
});
