document.getElementById("showPunchline").addEventListener("click", function() {
  // Play the audio
  const audio = document.getElementById("calling");
  audio.play();

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

  // Set a timeout to start the fade-out after the image has been visible for 10 seconds
  setTimeout(() => {
    Jork.classList.remove('fade-in'); // Remove the class for fading in
    Jork.classList.add('fade-out');  // Add the class for fading out
  }, 10000); // Wait 10000 milliseconds (10 seconds)
});
