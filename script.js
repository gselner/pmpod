// Scoring for each answer
const answerScores = {
    q1: { a: 4, b: 3, c: 2, d: 1 },
    q2: { a: 4, b: 3, c: 2, d: 1 },
    q3: { a: 4, b: 3, c: 2, d: 1 },
    q4: { a: 4, b: 3, c: 2, d: 1 },
    q5: { a: 4, b: 3, c: 2, d: 1 }
};

function calculateScore() {
    const form = document.getElementById('quiz-form');
    let score = 0;
    let allAnswered = true;  // Track if all questions are answered

    // Loop through each question and add the corresponding score
    for (let key in answerScores) {
        // Log to check if the key and elements exist
        console.log(`Checking question: ${key}`);

        // Get the selected answer for each question
        const selectedOption = form.querySelector(`input[name="${key}"]:checked`);

        if (selectedOption) {
            console.log(`Selected answer for ${key}: ${selectedOption.value}`);
            score += answerScores[key][selectedOption.value];  // Add the score based on the answer
        } else {
            console.log(`No answer selected for ${key}`);
            allAnswered = false;  // If an answer is missing, flag it
            break;  // Exit the loop early since we found an unanswered question
        }
    }

    // Display the result based on whether all questions were answered
    const result = document.getElementById('result');
    if (allAnswered) {
        let recommendation = '';  // Variable to store the recommendation message

        // Determine the recommendation based on the score
        if (score >= 18) {
            recommendation = "This project is HIGHLY recommended.";
        } else if (score >= 16) {
            recommendation = "This project is MODERATELY recommended.";
        } else {
            recommendation = "This project is NOT recommended.";
        }

        // Display the score and recommendation
        result.innerHTML = `You scored ${score} out of 20! ${recommendation}`;
    } else {
        result.innerHTML = "Please answer all the questions.";
    }
}