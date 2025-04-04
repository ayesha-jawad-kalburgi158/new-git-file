  // Define the correct answers for each cell (key: "row-col")
  const solution = {
    "0-1": "M",  // Vertical letter (MATH)
    "1-0": "G",  // Horizontal letter (GAME)
    "1-1": "A",  // Overlap letter for both GAME and MATH
    "1-2": "M",  // Horizontal letter (GAME)
    "1-3": "E",  // Horizontal letter (GAME)
    "2-1": "T",  // Vertical letter (MATH)
    "3-1": "H"   // Vertical letter (MATH)
  };

  // Function to check the puzzle answers
  function checkPuzzle() {
    let allCorrect = true;
    // Loop through each key in our solution
    for (const key in solution) {
      const cell = document.getElementById("cell-" + key);
      if (!cell) continue;
      // Compare user input to solution (case-insensitive)
      if (cell.value.trim().toUpperCase() !== solution[key]) {
        allCorrect = false;
        cell.style.borderColor = "#e74c3c"; // red border for wrong letter
      } else {
        cell.style.borderColor = "#2ecc71"; // green border for correct letter
      }
    }
    if (allCorrect) {
      showWinner();
    }
  }

  // Function to display the winner page with animation
  function showWinner() {
    document.getElementById("game-container").style.display = "none";
    const winnerDiv = document.getElementById("winner");
    winnerDiv.classList.add("show");
  }

  // Function to reset the game
  function resetGame() {
    // Clear all input cells and reset border colors
    for (const key in solution) {
      const cell = document.getElementById("cell-" + key);
      if (cell) {
        cell.value = "";
        cell.style.borderColor = "#ccc";
      }
    }
    // Hide winner page and show game container
    document.getElementById("winner").classList.remove("show");
    document.getElementById("game-container").style.display = "block";
  }

  // Event listeners for the buttons
  document.getElementById("submit-btn").addEventListener("click", checkPuzzle);
  document.getElementById("play-again-btn").addEventListener("click", resetGame);

  // Optional: Auto advance focus when a letter is typed
  const inputs = document.querySelectorAll("#puzzle-grid input");
  inputs.forEach(input => {
    input.addEventListener("keyup", function(e) {
      if (this.value.length === 1) {
        // Find next input in the grid order
        const formInputs = Array.from(inputs);
        const nextIndex = formInputs.indexOf(this) + 1;
        if (nextIndex < formInputs.length) {
          formInputs[nextIndex].focus();
        }
      }
    });
  });
