let isVisible = false; // Track visibility state

document.getElementById("showPunchline").addEventListener("click", function() {
  // Play the audio
  const audio = document.getElementById("calling");
  audio.play();

  // Change HTML
  document.getElementById("punchline").classList.remove("hidden");

  document.body.style.backgroundColor = "#ffe4b5";

  document.getElementById("jokeImage").src = "sly.png";

  const punchline = document.getElementById("punchline");
  punchline.style.transform = "scale(1.5)";
  punchline.style.color = "red";

  setTimeout(() => {
    punchline.style.transform = "scale(1)";
    punchline.style.color = "#2e8b57";
  }, 1500);

// Hide the button immediately after it's clicked
document.getElementById("showPunchline").classList.add("hidden");

// Set a timeout to make the button reappear after 10 seconds
setTimeout(() => {
    document.getElementById("showPunchline").classList.remove("hidden");
}, 10000); 

  // Show or hide John Pork image
  const Jork = document.getElementById('Jork');
  if (!isVisible) {
    Jork.classList.add('fade-in'); // Fade in image
    Jork.style.display = 'none'; // Visibility
    isVisible = false; 

    setTimeout(() => {
      Jork.classList.remove('fade-in'); // Remove the class for fading in
      Jork.classList.add('fade-out'); 
      setTimeout(() => {
        Jork.style.display = 'none';
      }, 2000); // Wait for fade-out duration
      isVisible = false; // Update visibility state
    }, 10000); 
  }
});
