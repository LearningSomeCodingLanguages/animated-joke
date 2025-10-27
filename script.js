document.getElementById("showPunchline").addEventListener("click", function() {
  // Change HTML
  document.getElementById("punchline").classList.remove("hidden");

  // Change CSS dynamically
  document.body.style.backgroundColor = "#ffe4b5";

  // Change image
  document.getElementById("jokeImage").src = "sly.png";

  // Add animation using JavaScript
  const punchline = document.getElementById("punchline");
  punchline.style.transform = "scale(1.5)";
  punchline.style.color = "red";

  // Add a timeout to reset after animation
  setTimeout(() => {
    punchline.style.transform = "scale(1)";
    punchline.style.color = "#2e8b57";
  }, 1500);

  // Show John Pork image
  const Jork = document.getElementById('Jork');
  Jork.classList.add('fade-in');

  // Set a timeout to start the fade-out after the image has been visible for a while
  setTimeout(() => {
    Jork.classList.remove('fade-in'); // Remove the class for fading in
    Jork.classList.add('fade-out');  // Add the class for fading out
  }, 2000); // Wait 2000 milliseconds (2 seconds)

  // Set a timeout to remove the image from the DOM after the fade-out is complete
  setTimeout(() => {
    Jork.remove();
  }, 4000); // Wait an additional 2 seconds (2s fade-in + 2s display + 2s fade-out)
});
