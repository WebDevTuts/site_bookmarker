// Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;
}
