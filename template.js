function getCardTemplate(){
  return `
  <div id="cardBodyItem" class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div id="progressBar" class="progress-bar" style="width: 0%">0%</div>
                    </div>
                    <h5 class="card-title" id="question">Frage</h5>

                    <div id="cardBodyItem" class="card quiz-answer-card mb-2">
                        <div class="card-body" id="answer_1" onclick="answer(1)">
                            Antwort
                        </div>
                    </div>

                    <div class="card quiz-answer-card mb-2">
                        <div class="card-body" id="answer_2" onclick="answer(2)">
                            Antwort
                        </div>
                    </div>

                    <div class="card quiz-answer-card mb-2">
                        <div class="card-body" id="answer_3" onclick="answer(3)">
                            Antwort
                        </div>
                    </div>

                    <div class="card quiz-answer-card mb-2">
                        <div class="card-body" id="answer_4" onclick="answer(4)">
                            Antwort
                        </div>
                    </div>

                    <div class="question-footer">
                        <span>
                            <b id="currentQuestionAmount">1</b> von <b id="questionAmount"></b> Fragen
                        </span>
                        <button id="nextbutton" onclick="nextQuestion()" class="btn btn-warning" disabled>Nächste
                            Frage</button>
                    </div>
  `;
}

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