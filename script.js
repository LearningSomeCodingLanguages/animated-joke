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

  // Make the button invisible
  const button = document.getElementById("showPunchline");
  button.style.visibility = 'hidden'; // Hide the button

  // Set a timeout to make the button visible again after 10 seconds
  setTimeout(() => {
    button.style.visibility = 'visible'; // Show the button again
  }, 10000); // Wait 10000 milliseconds (10 seconds)
});
