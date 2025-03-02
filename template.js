function getEndScreenTemplate(score, questionsLength) {
    return `
            <div class="resultCard">
                <div class="leftResultCard">
                    <img class="brainResult" src="./img/brain result.png" alt="brain result">
                    <h2><b>COMPLETE HTML QUIZ</b></h2>
                    <h2><b class="orange">YOUR SCORE </b><b> ${score + "/" + questionsLength}</b></h2>
                    <button class="btn btn-width btn-primary">SHARE</button>
                    <button class="btn btn-width btn-outline-primary" onclick="restartQuiz()">REPLAY</button>
                </div>
            </div>
            `;
}