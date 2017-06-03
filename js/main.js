// Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log("It works!");
}
