//VARIABLES
let isStarted = false;
let isFinished = false;
let score = 0;
let triviaTimer = 100;
let timerInterval;
let triviaQuestions = [
    {
        "question": "At what time does Romani, the ranch girl, wake up?",
        "answers": ["Six", "Seven", "She never gets up"],
        "correctAnswer": "Six"
    },
    {
        "question": "Darmani is of which race?",
        "answers": ["Deku Scrub", "Goron", "Zora"],
        "correctAnswer": "Goron"
    },
    {
        "question": "Who is the leader of the Bomber's Gang?",
        "answers": ["Gorman", "Viscen", "Jim"],
        "correctAnswer": "Jim"
    },
    {
        "question": "How many balloons does Romani use during target practice?",
        "answers": ["One", "Two", "She doesn't use balloons"],
        "correctAnswer": "One"
    },
    {
        "question": "How many cows are there at Romani Ranch?",
        "answers": ["Two", "Three", "Four"],
        "correctAnswer": "Three"
    },
    {
        "question": "How many Cuccos are there in the barn at Romani Ranch?",
        "answers": ["One", "Two", "There are none"],
        "correctAnswer": "One"
    },
    {
        "question": "How many tiny cow figurines are there in Clock Town?",
        "answers": ["Eight", "Nine", "Ten"],
        "correctAnswer": "Ten"
    },
    {
        "question": "How many mailboxes are there in Clock Town?",
        "answers": ["Four", "Five", "Six"],
        "correctAnswer": "Five"
    },
    {
        "question": "How many members are there in the Zora band, The Indigo-Go's?",
        "answers": ["Four", "Five", "Six"],
        "correctAnswer": "Five"
    },
    {
        "question": "How old is Tingle, the map salesman?",
        "answers": ["15", "25", "35"],
        "correctAnswer": "35"
    },
]


//FUNCTIONS
function init() {
    $(`#title`).text(`Keaton's Quiz!`);
    $(`.js-startsubmit`).text(`Start`);
    $(`#results`).empty();
    isStarted = false;
    isFinished = false;
    score = 0;
    triviaTimer = 100;
}

function startGame() {
    isStarted = true;
    //start Timer
    //populate questions Div
    for (let i = 0; i < triviaQuestions.length; i++) {
        $(`#questions`).append(`<p class="padt-1p">` + triviaQuestions[i].question + `</p>`);
        for (let j = 0; j < triviaQuestions[i].answers.length; j++) {
            $(`#questions`).append(`<input type="radio" value="` + triviaQuestions[i].answers[j] + `" name="` + i +`">` + triviaQuestions[i].answers[j] + `</input>`);
        }
        $(`#questions`).append(`<br>`);
        
    }
    //Start button changes to submit
    $(`.js-startsubmit`).text(`Submit`);
}

function stopGame() {
    clearInterval(timerInterval);
    //Score is tabulated
    $(`input:checked`).each(function() {
        let userAnswers = $(this).val();
            if(userAnswers === triviaQuestions[$(this).attr(`name`)].correctAnswer) {
                score++;
            }
    })
}

function tabulatedGame() {
    isFinished = true;
    $(`#questions`).empty();
    $(`#timer`).empty();
    $(`#results`).text(`Your score was ` + score + ` out of ` + triviaQuestions.length)
    $(`.js-startsubmit`).text(`Reset`);
}

function timer() {
    $(`#timer`).text(`Time remaining: ` + triviaTimer);
    timerInterval = setInterval(timerCount, 1000);
}
function timerCount() {
    triviaTimer--;
    $(`#timer`).text(`Time remaining: ` + triviaTimer);
    if (triviaTimer === 0) {
        stopGame();
        tabulatedGame();
    }
}

//EVENTS
    init();
    $(`.js-startsubmit`).on(`click`, function() {
        if(isStarted === false) {
            startGame();
            timer();
        } else if (isStarted === true & isFinished === false) {
            stopGame();
            tabulatedGame();    
        } else {
            init();
        }

    })
    //PAGE LOAD
    //CLICK START
        //TIMER STARTS
        //TRIVIA APPEARS
        //SUBMIT BUTTON AT THE BOTTOM
    //TIMER RUNS OUT OR CLICK SUBMIT
        //TRIVIA IS GRADED