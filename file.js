let userName = prompt("Please enter your name:");
const password = localStorage.getItem(userName);
if(password === null) {
  let p_word = prompt("Password:");
  localStorage.setItem(userName,p_word);
} else {
  let p_word = prompt("Password: ");
  if(p_word === password) {
    document.write("Logged In!")
  }
}
