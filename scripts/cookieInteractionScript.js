
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
