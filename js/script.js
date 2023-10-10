// Get a reference to the scroll-to-top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on the user's scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Add a click event listener to scroll back to the top
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
