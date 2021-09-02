let questions = [
    {
        "question": "Was ist HTML?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Burger with cheese",
        "answer_3": "Most spoken language",
        "answer_4": "A country in usa ",
        "right_answer": 1
    },

    {
        "question": "Welche Farbe ist #0000ff?",
        "answer_1": "Red",
        "answer_2": "Blue", 
        "answer_3": "Black",
        "answer_4": "Green",
        "right_answer": 2
    },

    {
        "question": "How to write comments in html ?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "&lt;!--...--&gt;",
        "answer_3": "Most spoken language",
        "answer_4": "<!--i am a coment. ",
        "right_answer": 2
    },

    {
        "question": "was ist HTML",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "Burger with cheese",
        "answer_3": "Most spoken language",
        "answer_4": "A country in usa ",
        "right_answer": 1
    },

    {
        "question": "How to write comments in html ?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "<!--i am a coment--.",
        "answer_3": "Most spoken language",
        "answer_4": "<!--i am a coment. ",
        "right_answer": 1
    },

    {
        "question": "How to write comments in html ?",
        "answer_1": "Hypertext Markup Language",
        "answer_2": "<!--i am a coment--.",
        "answer_3": "Most spoken language",
        "answer_4": "<!--i am a coment. ",
        "right_answer": 1
    },
];
let zahlDerRfragen = 0;
let currentQuestion = 0;// Variable für Fragen
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function showQuetion() {
    if (currentQuestion >= questions.length) {
        endScreen();
    } else {
        progress();
        Quetion();

    }
}

function progress(){
    let prozent = (currentQuestion + 1) / questions.length;
    prozent = Math.round(prozent * 100);
    document.getElementById('progress').innerHTML = `${prozent}%`;
    document.getElementById('progress').style = `width:${prozent}%;`;
}

function Quetion() {
    let question = questions[currentQuestion]; //Zugriff auf Elemente 0
    document.getElementById('questionText').innerHTML = question['question'];//Text und Fragen anzeigen
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function endScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('questionBody').style = 'display:none';
    document.getElementById('zahlDerFragen').innerHTML = questions.length;
    document.getElementById('richtigeFragen').innerHTML = zahlDerRfragen;
}

function answer(selection) {
    let question = questions[currentQuestion];//aktuelle Frage
    let gewälteAntwortNumber = selection.slice(-1);//eine Buchstabe vermindert
    let rigtAnswer = `answer_${question['right_answer']}`//"right_answer": 1
        
    if (gewälteAntwortNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');//parentNode äußere Div
        AUDIO_SUCCESS.play();
        zahlDerRfragen++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rigtAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();

    }
    document.getElementById('nextbutten').disabled = false;
}

function nextQuestion() { //nächte Frage      
    currentQuestion++;
    document.getElementById('nextbutten1').disabled = false;
    document.getElementById('nextbutten').disabled = true;
    resetanswer();
    Quetion();

}

function backQuestion() {
    currentQuestion--;
    if (currentQuestion == 0) { }
    else {
        document.getElementById('nextbutten1').disabled = true;

    }

}

function resetanswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function toQuetion() {
    document.getElementById('questionBody').style = '';
    document.getElementById('quetion').style = 'display:none';



}

function replay() {
    document.getElementById('quetion').style = '';
    document.getElementById('endscreen').style = 'display:none';
    zahlDerRfragen = 0;
    currentQuestion = 0;

    showQuetion();

}