const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful","Maybe someday"
  ];
  
  const fortuneInput = document.getElementById("fortune");
  const answerElement = document.getElementById("answer");
  const submitButton = document.getElementById("submit");
  
  submitButton.addEventListener("click", function() {
    // Check if the input field is empty
    if (fortuneInput.value.trim() === "") {
      answerElement.innerHTML = "Please ask a question.";
    } else {
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      answerElement.innerHTML = randomAnswer;
      fortuneInput.value = ""; // Reset the input field
    }
  });
  
  // Reset the answer and input field when user focuses on the input field
  fortuneInput.addEventListener("focus", function() {
    answerElement.innerHTML = "";
    fortuneInput.value = "";
  });
  