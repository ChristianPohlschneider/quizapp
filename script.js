let questions = [
    {
        "question": "What does JSON stand for?",
        "answer_1": "JavaScript Oriented Notation",
        "answer_2": "JavaScript Object Notation",
        "answer_3": "Java Ordered Notation",
        "answer_4": "Java Object Notation",
        "right_answer": 2
    },
    {
        "question": "What is the file extension commonly used for JSON files?",
        "answer_1": ".xml ",
        "answer_2": ".js ",
        "answer_3": ".json ",
        "answer_4": " .html ",
        "right_answer": 3
    },
    {
        "question": "How do you represent data in JSON?",
        "answer_1": "Key-Value pairs ",
        "answer_2": "Metadata ",
        "answer_3": "Binary Data",
        "answer_4": "Key-Object pairs ",
        "right_answer": 1
    },
    {
        "question": "Which symbol is used to enclose JSON objects?",
        "answer_1": "[]",
        "answer_2": "()",
        "answer_3": "{}",
        "answer_4": '""',
        "right_answer": 3
    },
    {
        "question": "In JSON, keys must always be of which data type?",
        "answer_1": "String",
        "answer_2": "Number",
        "answer_3": "Boolean",
        "answer_4": "Object",
        "right_answer": 1
    },
    {
        "question": "Which symbol is used to separate key-value pairs in JSON?",
        "answer_1": ":",
        "answer_2": ";",
        "answer_3": ",",
        "answer_4": "=",
        "right_answer": 1
    },
    {
        "question": "What can JSON format be used for?",
        "answer_1": "Storing data",
        "answer_2": "Sending data to the server",
        "answer_3": "Receiving data from the server",
        "answer_4": "All of the above",
        "right_answer": 4
    },
    {
        "question": "How do you represent an array in JSON?",
        "answer_1": "[1, 2, 3]",
        "answer_2": "(1, 2, 3)",
        "answer_3": "{1, 2, 3}",
        "answer_4": '"1, 2, 3"',
        "right_answer": 1
    },
    {
        "question": "Which of the following is true about JSON?",
        "answer_1": "JSON is a language",
        "answer_2": "JSON is a database system",
        "answer_3": "JSON is a data format",
        "answer_4": "JSON is an HTML tag",
        "right_answer": 3
    },
    {
        "question": "How would you write a Boolean value in JSON?",
        "answer_1": "{'value': true}",
        "answer_2": "{'value': 'true'}",
        "answer_3": "{'value': 1}",
        "answer_4": "{'value': 'true'}",
        "right_answer": 1
    },
    {
        "question": "JSON can be parsed using which of the following functions in JavaScript?",
        "answer_1": "JSON.parse()",
        "answer_2": "JSON.stringify()",
        "answer_3": "JSON.decode()",
        "answer_4": "JSON.encode()",
        "right_answer": 1
    },
    {
        "question": "What does the 'null' value represent in JSON?",
        "answer_1": "An empty string",
        "answer_2": "Zero",
        "answer_3": "An undefined value",
        "answer_4": "No value or absence of value",
        "right_answer": 4
    },
];

let currentQuestion = 0;
let score = 0;

function init() {
    document.getElementById("questionAmount").innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(answerIndex) {
    let question = questions[currentQuestion];
    if (question["right_answer"] == answerIndex) {
        document.getElementById('answer_' + answerIndex).parentNode.classList.add('bg-success');
        score = score + 1;
    } else {
        document.getElementById('answer_' + answerIndex).parentNode.classList.add('bg-danger');
    }
}