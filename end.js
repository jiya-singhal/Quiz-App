const finalScore = document.getElementById('final-score');

const score = localStorage.getItem('mostRecentScore');
finalScore.innerText = `Your Score: ${score}`;
