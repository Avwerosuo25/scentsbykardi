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

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling
    });
  });