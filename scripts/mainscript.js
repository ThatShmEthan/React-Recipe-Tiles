
document.getElementsByTagName('body').onload = reciPlsInit();

// Initialization Function
function reciPlsInit() {
    cookieTimerIntervalStart();
    if(!getCookie('username')){
    }
}

// Used to show the filter menu
function showFilters() {
    blockDisplayToggle(document.getElementById('filter-dropdown'));
}

// Used to show the header login menu
function showLoginMenu() {
    blockDisplayToggle(document.getElementById('header-login-dropdown'));
}

// Used to open the dropdowns in the recipe tile
function setActiveDropDown(button) {
    button.parentElement.getElementsByClassName("recipe-dropdown active")[0].className = "recipe-dropdown inactive";
    button.nextElementSibling.className = "recipe-dropdown active";
}

// Used to toggle visibility of hidden elements by changing display to block
function blockDisplayToggle(element) {
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Gets a specific cookie
function getCookie(cookieName) {
    try {
        return document.cookie.replace(' ', '').split(cookieName + '=')[1].split(';')[0];
    } catch (error) {
        return 0;
    }
}

// Sets a specific cookie
function setCookie(cookieName, value, maxage = "31536000") {
    document.cookie = cookieName + '=' + value + ";max-age=" + maxage;
}

// Function to create beep noise
function beepNoise() {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 500;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(function () {
        oscillator.stop();
        var oscillator2 = context.createOscillator();
        oscillator2.type = "sine";
        oscillator2.frequency.value = 600;
        oscillator2.connect(context.destination);
        oscillator2.start();
        setTimeout(function () {
            oscillator2.stop();
        }, 100);
    }, 100);
}

// Function to change display timer to time
function setDisplayTime(secondTime) {
    var displaySeconds = document.getElementById("timer-seconds");
    var displayMinutes = document.getElementById("timer-minutes");
    var displayHours = document.getElementById("timer-hours");
    var hoursLeft = Math.floor((secondTime / 60) / 60);
    var minutesLeft = Math.floor((secondTime - (hoursLeft * 60 * 60)) / 60);
    var secondsLeft = Math.floor(secondTime - minutesLeft * 60);
    displaySeconds.textContent = timerFormat(secondsLeft);
    displayMinutes.textContent = timerFormat(minutesLeft);
    displayHours.textContent = timerFormat(hoursLeft);
}

// Makes all time numbers take the 01 - 99 format
function timerFormat(x) {
    x = (x < 0) ? 0 : x;
    return (x < 10) ? '0' + x.toString() : x.toString();
}

// Sets a timer using cookies and keeps it consistent across pages. Checks once per second.
function setCookieTimer(durationSeconds) {
    console.log("Setting Timer for " + durationSeconds/60 + " Minutes");
    setDisplayTime(durationSeconds);
    setCookie("reciPlsTimerOn", 1);
    setCookie("reciPlsTimerStart", Date.now());
    setCookie("reciPlsTimerDuration", durationSeconds * 1000);
    cookieTimerIntervalStart();
    updatePageTimer();
}

// Checks if Cookie Timer is done
function checkCookieTimerDone() {
    if (getCookie("reciPlsTimerOn") != 0 && Date.now() - getCookie("reciPlsTimerDuration") >= getCookie("reciPlsTimerStart")) {
        return true;
    } else {
        return false;
    }
}

// Updates display timer using Cookie Timer
function updatePageTimer() {
    if (getCookie("reciPlsTimerOn") == '0' || !document.getElementById("timer-seconds")) {
        return;
    }
    var displaySeconds = document.getElementById("timer-seconds");
    var displayMinutes = document.getElementById("timer-minutes");
    var displayHours = document.getElementById("timer-hours");
    var millisecondsLeft = getCookie("reciPlsTimerDuration") - (Date.now() - getCookie("reciPlsTimerStart"));
    var hoursLeft = Math.floor(((millisecondsLeft / 1000) / 60) / 60);
    var minutesLeft = Math.floor(((millisecondsLeft - hoursLeft * 1000 * 60 * 60) / 1000) / 60);
    var secondsLeft = Math.round((millisecondsLeft - minutesLeft * 1000 * 60) / 1000);
    displaySeconds.textContent = timerFormat(secondsLeft);
    displayMinutes.textContent = timerFormat(minutesLeft);
    displayHours.textContent = timerFormat(hoursLeft);
}

// Starts an interval to check if Cookie Timer is done and update the timer, also 
function cookieTimerIntervalStart() {
    var cookieTimerInterval = setInterval(function() {
        if (checkCookieTimerDone()) {
            setDisplayTime(0);
            if (getCookie("reciPlsTimerOn") != '0') {
                document.getElementById("timer").style.backgroundColor = "var(--timer-done-color)";
                document.getElementById("timer").style.cursor = "pointer";
                document.getElementById("timer").onclick = function() {
                    document.getElementById("timer").style.backgroundColor = "var(--secondary-theme-color)";
                    document.getElementById("timer").style.cursor = "pointer"
                };
            }
            setCookie("reciPlsTimerOn", 0);
            beepNoise();
            clearInterval(cookieTimerInterval);
        } else {
            updatePageTimer();
        }
    }, 1000);
}

function addRecipePanel(elem) {
    if (elem.className.includes("current-page")) {
        elem.className = "sidebar-button";
        document.getElementById('add-recipe-panel').style.display = "none";
    } else {
        elem.className = "sidebar-button current-page";
        document.getElementById('add-recipe-panel').style.display = "block";
    }
}

function recipeLookup(id) {
    var recipeData = {
        "id": id,
        "name": "Example Recipe 2",
        "thumbnail": "/images/000000002.jpg",
        "image": "/images/000000002.jpg",
        "description": "No Description Yet",
        "ingredients": [],
        "instructions": "No Instructions Yet",
        "allergens": [],
        "utensils": [],
        "cookTime": [1, 0],
        "prepTime": [0, 20],
        "serves": 2,
        "rating": "60%"
    }
    return recipeData;
}

function editRecipe(id) {
    document.getElementById('add-recipe-panel').style.display = "block";
    document.getElementById('add-recipe-button').className = "sidebar-button";

    recipe = recipeLookup(id);

    document.getElementById('recipe-name-input').value = recipe.name;
    document.getElementById('recipe-image-input').value = recipe.image;
    document.getElementById('description-input').value = recipe.description;
    document.getElementById('ingredient-input').value = recipe.ingredients.join(", ");
    document.getElementById('instruction-input').value = recipe.instructions;
    document.getElementById('allergen-input').value = recipe.allergens.join(", ");
    document.getElementById('utensil-input').value = recipe.utensils.join(", ");
    document.getElementById('cook-hours-input').value = recipe.cookTime[0];
    document.getElementById('cook-minutes-input').value = recipe.cookTime[1];
    document.getElementById('prep-hours-input').value = recipe.prepTime[0];
    document.getElementById('prep-minutes-input').value = recipe.prepTime[1];
    document.getElementById('recipe-servings-input').value = recipe.serves;
}

function closeAddRecipePanel() {
  document.getElementById('add-recipe-panel').style.display = "none";
  document.getElementById('add-recipe-button').className = "sidebar-button";
}



// THE FUNCTIONS BELOW REQUIRE SQL OR API CONNECTION

function deleteRecipe(id, name = "a recipe") {
    if (!getCookie('username')) {
        alert('Please log in again.');
        return;
    }
    if (!checkCredentials()) {
        return;
    }
    if (!recipeLookup(id)) {
        alert('Could not find that recipe.');
        return;
    }
    if(window.confirm('You are about to delete ' + name + '. Please confirm your choice by pressing Ok to confirm or press Cancel to cancel the delete.')) {
        console.log('Recipe ' + id + ' Deleted');
    } else {
        console.log('Delete Cancelled.');
    }
}

function uploadRecipe(id = 0) {
    var username = getCookie('username');
    if (checkCredentials()) {
        var recipeData = {
            "name": document.getElementById('recipe-name-input').value,
            "image": document.getElementById('recipe-image-input').value,
            "description": document.getElementById('description-input').value,
            "ingredients": document.getElementById('ingredient-input').value.replaceAll("   ", " ").replaceAll("  ", " ").replaceAll(", ", ",").split(","),
            "instructions": document.getElementById('instruction-input').value,
            "allergens": document.getElementById('allergen-input').value.replaceAll("   ", " ").replaceAll("  ", " ").replaceAll(", ", ",").split(","),
            "utensils": document.getElementById('utensil-input').value.replaceAll("   ", " ").replaceAll("  ", " ").replaceAll(", ", ",").split(","),
            "serves": document.getElementById('recipe-servings-input').value,
            "cookTime": [document.getElementById('cook-hours-input').value, document.getElementById('cook-minutes-input').value],
            "prepTime": [document.getElementById('prep-hours-input').value, document.getElementById('prep-minutes-input').value],
            "chef": username
        }
        if (!id) {
            // Upload New Recipe (SQL)
        } else {
            // Edit Old Recipe (SQL)
        }
        console.log(recipeData); // For Testing
        console.log('Recipe Uploaded');
    }
}


// THE BELOW FUNCTIONS ARE LOGIN FUNCTIONALITY. NEEDS SQL CONNECTION.
function login(username, password) {
    if (validateLogin()) {
        setCookie('username', username, 2600000);
        setCookie('password', password, 2600000);
        return true;
    } else {
        alert('Unable to log in.');
        return false;
    }
}

function signup(username, pass1, pass2) {
    if (pass1 != pass2) {
        alert('Passwords do not match.');
        return false;
    }
    if (!username) {
        alert('Please enter a username.');
        return false;
    }
    // Send info to server
    // If statement will contain result
    if (username && password) {
        setCookie('username', username, 2600000);
        setCookie('password', password, 2600000);
        return true;
    } else {
        alert('Unable to sign up.');
        return false;
    }
}

function validateLogin() {
    username = getCookie('username');
    password = getCookie('password');
    if (username && password) { // SQL HERE, SEND INFO TO SERVER, HANDLE RETURN VALUE
        return true;
    } else {
        return false;
    }
}

function logout() {
    setCookie('username', '', 2600000);
    setCookie('password', '', 2600000);
}

// Returns true if the login is valid, or false if it is not. Used before changing any data in the database.
function checkCredentials(username = getCookie('username'), password = getCookie('password')) {
    if (username && password) { // SEND SQL REQUEST HERE
        console.log("Logged In");
        return true;
    } else {
        console.warn('Check Credentials Failed');
        window.alert('There was an error validating your session. Please sign out and log in again.');
        return false;
    }
}
