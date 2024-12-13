let userName = prompt("Please enter your name:");
const password = encodeURIComponent(sessionStorage.getItem(userName));
if(password === null) {
  let p_word = prompt("Password:");
  const expires = new Date(Date.now() + 60 * 60 * 10000); //365 * 24 * 60 * 60 * 1000 set the expiration date for the account to 1 year
  document.cookie = userName + "=" + p_word + "; expires=" + expires.toUTCString() + "; path=/";
} else {
  let p_word = prompt("Password: ");
  if(p_word === password) {
    document.write("Logged In!")
  }
}
