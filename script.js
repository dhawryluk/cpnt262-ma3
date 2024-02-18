"use strict";

function textResult() {
  let inputElement = document.getElementById("text-input");

  let inputText = inputElement.value;

  if (!inputText.trim()) {
    console.error("Input is empty. Please enter some text.");
    return;
  }

  let trimmedText = inputText.trim();

  let formattedText = trimmedText.toUpperCase();

  console.log("Your formatted Text is:", formattedText);

  prompt("Your formatted Text is:", formattedText);
}
