// Function to handle forgot password request
function handleForgotPassword() {
  alert(
    "Please email ssnigdhasiraz22@sirhenryfloyd.co.uk to request a password reset"
  );
}

// Check login status and handle login
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
  loadSites();
  initializeDB();
  document.querySelector(".searchInput").focus();
});

// Check login status from IndexedDB
function checkLoginStatus() {
  var request = indexedDB.open("LoginDB", 1);

  request.onerror = function (event) {
    console.error("IndexedDB error:", event.target.errorCode);
  };

  request.onsuccess = function (event) {
    var db = event.target.result;
    var transaction = db.transaction(["login"], "readonly");
    var objectStore = transaction.objectStore("login");

    var getRequest = objectStore.get(1);

    getRequest.onsuccess = function (event) {
      var data = event.target.result;
      if (data && data.lastLogin) {
        var lastLogin = new Date(data.lastLogin);
        var now = new Date();
        var thirtyDaysLater = new Date(lastLogin);
        thirtyDaysLater.setDate(lastLogin.getDate() + 30);

        if (now >= thirtyDaysLater) {
          document.querySelector(".container").style.display = "block";
          document.querySelector(".bruhLolXd").style.display = "none";
        } else {
          document.querySelector(".container").style.display = "none";
          document.querySelector(".bruhLolXd").style.display = "block";
        }
      } else {
        document.querySelector(".container").style.display = "block";
        document.querySelector(".bruhLolXd").style.display = "none";
      }
    };

    getRequest.onerror = function (event) {
      console.error("Error retrieving data:", event.target.errorCode);
    };
  };

  request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("login", { keyPath: "id" });
    objectStore.add({ id: 1, lastLogin: null });
  };
}

// Handle login functionality
function handleLogin() {
  var usernameInput = document.querySelector("#usernameInput").value;
  var passwordInput = document.querySelector("#passwordInput").value;

  const adminUser = "Admin";
  const adminPass = "Pass";

  if (usernameInput === adminUser && passwordInput === adminPass) {
    document.querySelector(".container").style.display = "none";
    alert("Login successful!");
    document.querySelector(".bruhLolXd").style.display = "block";
    updateLoginTimestamp(new Date().toISOString());
  } else {
    alert("Incorrect username or password.");
  }
}

// Update login timestamp in IndexedDB
function updateLoginTimestamp(timestamp) {
  var request = indexedDB.open("LoginDB", 1);

  request.onerror = function (event) {
    console.error("IndexedDB error:", event.target.errorCode);
  };

  request.onsuccess = function (event) {
    var db = event.target.result;
    var transaction = db.transaction(["login"], "readwrite");
    var objectStore = transaction.objectStore("login");

    objectStore.put({ id: 1, lastLogin: timestamp });

    transaction.oncomplete = function () {
      console.log("Login timestamp updated");
    };

    transaction.onerror = function (event) {
      console.error("Transaction error:", event.target.errorCode);
    };
  };
}

// Handle search input
var queryURL = "https://search.brave.com/search?q=";
var urdad = "";
document
  .querySelector(".searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let query = event.target.value;
      if (query) {
        window.location.href = queryURL + encodeURIComponent(query) + urdad;
      }
    }
  });

// Handle button click
document.querySelector("#fuck").addEventListener("click", function () {
  urdad = "&source=llmSuggest&summary=1";
  console.log("clicked ai");
  var lol = document.querySelector("#fuck");
  lol.style.transition = "all 0.35s ease-in-out";
  lol.style.marginTop = "-20px";
});

// Add new site functionality
async function addSite() {
  let siteName = prompt(
    "What is the Name of your site? Please insert a name. For example, Twitter."
  );
  if (!siteName) return;
  let siteURL = prompt("What is the URL / web address of your Website.");
  if (!siteURL) return;
  createSiteElement(siteName, siteURL);
  saveSite(siteName, siteURL);
}

// Create and insert a site element into the DOM
function createSiteElement(name, url) {
  const template = document.querySelector("#siteTemplate");
  const clone = document.importNode(template.content, true);
  const siteAnchor = clone.querySelector(".siteName");
  const siteH = clone.querySelector(".siteH");
  const siteHT = clone.querySelector(".siteHT");
  siteH.textContent = name;
  siteHT.textContent = url;
  siteAnchor.href = url;
  document
    .getElementById("sitesContainer")
    .insertBefore(clone, document.querySelector(".sitesBottom"));
}

// Save site information in IndexedDB
function saveSite(name, url) {
  let request = indexedDB.open("sitesDB", 1);
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    console.log("Upgrading database...");
    if (!db.objectStoreNames.contains("sites")) {
      let objectStore = db.createObjectStore("sites", {
        keyPath: "id",
        autoIncrement: true
      });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("url", "url", { unique: false });
    }
  };
  request.onsuccess = function (event) {
    let db = event.target.result;
    let transaction = db.transaction(["sites"], "readwrite");
    let objectStore = transaction.objectStore("sites");
    let site = {
      name: name,
      url: url
    };
    let addRequest = objectStore.add(site);
    addRequest.onsuccess = function () {
      console.log("Site added to the store:", site);
    };
    addRequest.onerror = function (event) {
      console.log("Error adding site:", event.target.error);
    };
  };
  request.onerror = function (event) {
    console.log("Error opening database:", event.target.errorCode);
  };
}

// Load sites from IndexedDB and display them
function loadSites() {
  let request = indexedDB.open("sitesDB", 1);
  request.onsuccess = function (event) {
    let db = event.target.result;
    let transaction = db.transaction(["sites"], "readonly");
    let objectStore = transaction.objectStore("sites");
    objectStore.openCursor().onsuccess = function (event) {
      let cursor = event.target.result;
      if (cursor) {
        createSiteElement(cursor.value.name, cursor.value.url);
        cursor.continue();
      }
    };
  };
  request.onerror = function (event) {
    console.log("Error opening database:", event.target.errorCode);
  };
}

// Show theme changer
function showThemeChanger() {
  var bruh = document.querySelector(".customize");
  var theme = document.querySelector("#themeButton");
  var hurb = document.querySelector(".moreMenu");
  if (bruh.style.display === "block") {
    bruh.style.display = "none";
    theme.style.background = "#3e404d";
    theme.style.border = "none";
  } else {
    bruh.style.display = "block";
    theme.style.background = "#515157";
    theme.style.border = "2px dashed white";
    if (hurb.style.display === "block") {
      toggleMore();
    }
  }
}

// Toggle more menu
function toggleMore() {
  var bruh = document.querySelector(".moreMenu");
  var more = document.querySelector("#moreButton");
  var hurb = document.querySelector(".customize");
  if (bruh.style.display === "block") {
    bruh.style.display = "none";
    more.style.background = "#3e404d";
    more.style.border = "none";
  } else {
    bruh.style.display = "block";
    more.style.background = "#515157";
    more.style.border = "2px dashed white";
    if (hurb.style.display === "block") {
      showThemeChanger();
    }
  }
}

// Close functionality
function closeIT() {
  alert("broken lol");
}

// Initialize color database
function initializeColorDB() {
  const request = indexedDB.open("ColorDB", 1);
  request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("colors", { keyPath: "id", autoIncrement: true });
  };
  request.onsuccess = function (event) {
    db = event.target.result;
    loadColors();
  };
  request.onerror = function (event) {
    console.error("Database error: " + event.target.errorCode);
  };
}

// Add a new color to IndexedDB and UI
function addNewColor() {
  const color = prompt("Enter a color in hex (e.g., #ff0000):");
  if (color) {
    const transaction = db.transaction(["colors"], "readwrite");
    const store = transaction.objectStore("colors");
    store.add({ color: color });
    transaction.oncomplete = () => {
      createColorDiv(color);
    };
    transaction.onerror = (event) => {
      console.error("Transaction error:", event.target.errorCode);
    };
  }
}

// Load colors from IndexedDB and display them
function loadColors() {
  const transaction = db.transaction(["colors"], "readonly");
  const store = transaction.objectStore("colors");
  store.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      createColorDiv(cursor.value.color);
      cursor.continue();
    }
  };
}

// Create a color div
function createColorDiv(color) {
  const div = document.createElement("div");
  div.className = "color-circle";
  div.style.backgroundColor = color;
  div.onclick = function () {
    document.body.style.backgroundColor = color;
    saveSetting("backgroundColor", { color: color });
  };
  document.getElementById("color-dang").appendChild(div);
}

// Initialize the database
function initializeDB() {
  const request = indexedDB.open("bgSettingsDB", 1);
  request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("settings", { keyPath: "id" });
    db.createObjectStore("colors", { keyPath: "id", autoIncrement: true });
    db.createObjectStore("images", { keyPath: "id" });
    db.createObjectStore("circles", { keyPath: "id", autoIncrement: true });
  };
  request.onsuccess = (event) => {
    db = event.target.result;
    loadSettings();
  };
  request.onerror = (event) => {
    console.error("Database error:", event.target.errorCode);
  };
}

// Save a setting to IndexedDB
function saveSetting(id, value) {
  const transaction = db.transaction(["settings"], "readwrite");
  const store = transaction.objectStore("settings");
  store.put({ id: id, ...value });
  transaction.oncomplete = () => {
    console.log(`${id} saved to IndexedDB.`);
  };
  transaction.onerror = (event) => {
    console.error("Transaction error:", event.target.errorCode);
  };
}

// Change background color and save it
function changeBackgroundColor(color) {
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = color;
  saveSetting("backgroundColor", { color: color });
}

// Add new background image
function addNewBG() {
  const imageUrl = prompt("Please enter the image URL:");
  if (imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    saveSetting("backgroundImage", { url: imageUrl });
    addColorCircle(imageUrl, true);
  } else {
    console.log("No image URL provided.");
  }
}

// Add color circle element with an image
function addColorCircle(imageUrl, saveToDB) {
  const parentDiv = document.getElementById("image-dang");
  const newDiv = document.createElement("div");
  newDiv.className = "color-circle";
  newDiv.style.backgroundImage = `url(${imageUrl})`;
  newDiv.addEventListener("click", () => {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    saveSetting("backgroundImage", { url: imageUrl });
  });
  parentDiv.appendChild(newDiv);

  if (saveToDB) {
    const transaction = db.transaction(["circles"], "readwrite");
    const store = transaction.objectStore("circles");
    store.add({ url: imageUrl });
    transaction.oncomplete = () => {
      console.log("Circle image saved to IndexedDB.");
    };
    transaction.onerror = (event) => {
      console.error("Transaction error:", event.target.errorCode);
    };
  }
}

// Event listeners for UI elements
document.addEventListener("DOMContentLoaded", () => {
  initializeDB();
  document
    .querySelector("#color-navy")
    .addEventListener("click", () => changeBackgroundColor("#000042"));
  document
    .querySelector("#color-normal")
    .addEventListener("click", () => changeBackgroundColor("#282a37"));
  document
    .querySelector("#color-green")
    .addEventListener("click", () => changeBackgroundColor("#036B52"));
  document
    .querySelector("#color-og")
    .addEventListener("click", () => changeBackgroundColor("#E63946"));
  document.querySelector("#addNewBGButton").addEventListener("click", addNewBG);
  document
    .querySelector("#addNewColorButton")
    .addEventListener("click", addNewColor);
});

//

let debounceTimeout;

// Initialize the points database
function initializePointsDB() {
  const request = indexedDB.open("PointsDB", 1);
  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("points", { keyPath: "id" });
  };
  request.onsuccess = function (event) {
    db = event.target.result;
    loadPoints();
  };
  request.onerror = function (event) {
    console.error("Database error:", event.target.errorCode);
  };
}

// Load points from IndexedDB
function loadPoints() {
  const request = indexedDB.open("PointsDB", 1);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["points"], "readonly");
    const objectStore = transaction.objectStore("points");
    const getRequest = objectStore.get(1);
    getRequest.onsuccess = function (event) {
      const data = event.target.result;
      const points = data ? data.value : 0;
      document.querySelector("#points").textContent = points;
    };
  };
}

// Increment points in IndexedDB
function incrementPoints() {
  const request = indexedDB.open("PointsDB", 1);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["points"], "readwrite");
    const objectStore = transaction.objectStore("points");
    const getRequest = objectStore.get(1);
    getRequest.onsuccess = function (event) {
      const data = event.target.result;
      const newPoints = data ? data.value + 1 : 1;
      objectStore.put({ id: 1, value: newPoints });
      document.querySelector("#points").textContent = newPoints;
    };
  };
}

// Handle search input with debounce
function handleSearchInput(event) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = event.target.value;
    if (query) {
      incrementPoints();
      window.location.href = queryURL + encodeURIComponent(query) + urdad;
    }
  }, debounceDelay);
}

// Set debounce delay (e.g., 1 second)
const debounceDelay = 1000;

document
  .querySelector(".searchInput")
  .addEventListener("input", handleSearchInput);

// Initialize the points database when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializePointsDB();
});
